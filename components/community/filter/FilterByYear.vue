<template>
  <div class="relative">
    <div
      class="flex absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 space-x-2 mr-5"
    >
      <button v-if="!isOpen" @click="handleDialog">
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
      <button v-if="isOpen" @click="handleDialog">
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
    <el-popover
      ref="popover1"
      placeholder="Select"
      class="w-full wv-b3"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div
        v-for="(item, index) in yearData"
        :key="index"
        class="md:w-[500px] relative"
      >
        <button
          :class="filterData?.year == item ? 'font-bold' : ''"
          @click="() => handleFilter(item)"
        >
          งบในปี {{ item }}
        </button>
      </div>
    </el-popover>
    <el-button v-popover:popover1 class="filterBtn"
      >งบในปี {{ filterData?.year }}</el-button
    >
  </div>
</template>
<script>
export default {
  props: ["yearData", "handleFilterData", "filterData"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleFilter(year) {
      this.handleFilterData(year);
      this.isOpen = false;
    },
    handleDialog() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss">
.filterBtn {
  @apply w-full text-left  border-black;
}
</style>
