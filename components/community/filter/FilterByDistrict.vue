<template>
  <div v-if="districtData">
    <el-popover
      ref="district"
      class="w-full filterSelect"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div class="relative md:w-[500px]">
        <img
          src="~/assets/images/searchIcon.svg"
          class="absolute top-0 left-0 ml-2"
        />
        <input
          v-model="inputData"
          type="text"
          class="border-b border-b-black w-full wv-b5 mb-3 pl-8"
          :placeholder="`ค้นหาจาก ${districtData.length} เขต`"
        />
        <button @click="handleSelectedData('clear')">ทุกเขต</button>
        <div
          class="overflow-auto max-w-[500px] max-h-[250px]"
          id="listDistrict"
        >
          <div v-for="(item, index) in searchBy" :key="index">
            <button @click="handleSelectedData(item)">{{ item }}</button>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:district class="filterBtn wv-b6"
      ><span v-if="filterData.district">{{ filterData.district }}</span
      ><span v-else>ทุกเขต ({{ districtData.length }} เขต)</span>
    </el-button>
  </div>
</template>
<script>
export default {
  props: ["filterData", "districtData", "handleFilterData"],
  data() {
    return {
      inputData: "",
      searchBy: [],
      isOpen: false,
    };
  },

  methods: {
    handleSelectedData(district) {
      if (district === "clear") {
        this.handleFilterData({ district: "", community: "" });
        this.inputData = "";
      } else {
        this.inputData = district;
        this.handleFilterData({ district, community: "" });
        this.searchBy = this.districtData.filter((d) =>
          d.toString().includes(district)
        );
      }
      this.isOpen = false;
    },
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.inputData = newValue.district;
      },
    },
    inputData: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.searchBy = this.districtData.filter((d) =>
          d.toString().includes(newValue)
        );
      },
    },
    districtData: {
      immediate: true,
      deep: false,
      handler() {
        this.searchBy = this.districtData;
      },
    },
  },
};
</script>
