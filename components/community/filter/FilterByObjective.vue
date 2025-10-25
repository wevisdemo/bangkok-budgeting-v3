<template>
  <div v-if="originData && commuData" class="relative">
    <div
      class="flex absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 space-x-2 mr-5"
    >
      <button v-if="!isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="w-[20px] h-[20px]"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
      </button>
      <button v-if="isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="w-[20px] h-[20px] cursor-pointer z-20"
        >
          <path
            fill="currentColor"
            d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="flex absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 space-x-2 mr-5"
    >
      <!-- Keep existing arrow buttons -->
    </div>
    <el-popover
      ref="commu"
      class="w-full filterSelect"
      placement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div class="relative">
        <div class="overflow-auto max-h-[250px]" id="listObjectives">
          <div class="flex flex-col space-y-2">
            <label class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="selectAll"
                @change="handleSelectAll"
                class="mr-2"
              />
              <span class="wv-b6">เป้าประสงค์ทุกด้าน</span>
            </label>
            <label
              v-for="objective in objectives"
              :key="objective.id"
              class="flex items-center cursor-pointer"
              :class="{
                'disabled-objective': !availableObjectives.includes(
                  objective.id
                ),
              }"
            >
              <input
                type="checkbox"
                v-model="selectedObjectives"
                :value="objective.id"
                @change="handleObjectiveChange"
                class="mr-2"
              />
              <span class="wv-b6">{{ objective.name }}</span>
            </label>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:commu class="filterBtn wv-b6">
      <span v-if="selectedObjectives.length === 0"
        >เป้าประสงค์ทุกด้าน (5 ด้าน)</span
      >
      <span v-else-if="selectedObjectives.length === objectives.length"
        >เป้าประสงค์ทุกด้าน (5 ด้าน)</span
      >
      <span v-else>{{ selectedObjectivesText }}</span>
    </el-button>
  </div>
</template>

<script>
export default {
  props: ["filterData", "originData", "handleFilterData", "commuData"],
  data() {
    return {
      isOpen: false,
      selectedObjectives: [],
      selectAll: false,
      availableObjectives: [],
      objectives: [
        { id: "ด้านเศรษฐกิจ", name: "ด้านเศรษฐกิจ", isDisabled: true },
        {
          id: "ด้านกายภาพและสิ่งแวดล้อม",
          name: "ด้านกายภาพและสิ่งแวดล้อม",
          isDisabled: true,
        },
        { id: "ด้านสังคม", name: "ด้านสังคม", isDisabled: true },
        { id: "ด้านอนามัย", name: "ด้านอนามัย", isDisabled: true },
        { id: "ด้านจิตใจ", name: "ด้านจิตใจ", isDisabled: true },
      ],
    };
  },
  computed: {
    selectedObjectivesText() {
      if (this.selectedObjectives.length === 0)
        return "เป้าประสงค์ทุกด้าน (5 ด้าน)";
      return this.objectives
        .filter((obj) => this.selectedObjectives.includes(obj.id))
        .map((obj) => obj.name)
        .join(", ");
    },
  },
  methods: {
    handleSelectAll() {
      if (this.selectAll) {
        this.selectedObjectives = this.objectives
          .filter((obj) => this.availableObjectives.includes(obj.id))
          .map((obj) => obj.id);
      } else {
        this.selectedObjectives = [];
      }
      this.handleFilterChange();
    },
    handleObjectiveChange() {
      this.selectAll =
        this.selectedObjectives.length === this.objectives.length;
      this.handleFilterChange();
    },
    handleFilterChange() {
      this.handleFilterData({
        ...this.filterData,
        objectives: this.selectedObjectives,
      });
    },
  },
  watch: {
    filterData: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (newValue.objectives) {
          this.selectedObjectives = newValue.objectives;
          this.selectAll =
            this.selectedObjectives.length === this.objectives.length;
        }
      },
    },
    commuData: {
      immediate: true,
      deep: true,
      handler() {
        this.availableObjectives = this.commuData
          ? [...new Set(this.commuData.map((item) => item.project_objective))]
          : [];
      },
    },
  },
};
</script>
<style scoped>
.filterSelect {
  width: 100%;
}
.el-popover.el-popper {
  /* max-width: 250px !important; */
}

/* Checkbox and label container */
label {
  /* padding: 8px; */
  border-radius: 4px;
}

/* Selected label background */
input[type="checkbox"]:checked + span {
  background-color: #000;
  width: 100%;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  /* max-width: 250px; */
  display: inline-block;
}

/* Checkbox styling */
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid #000;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  cursor: pointer;
}

/* Checked checkbox state */
input[type="checkbox"]:checked {
  background-color: #000;
}

/* Checkmark symbol */
input[type="checkbox"]:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  line-height: 1;
}
.disabled-objective {
  opacity: 0.5;
  pointer-events: none;
}

input[type="checkbox"]:disabled {
  cursor: not-allowed;
  border-color: #ccc;
}
</style>
