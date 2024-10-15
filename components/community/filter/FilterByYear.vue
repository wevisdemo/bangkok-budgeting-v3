<template>
  <div>
    <el-popover
      ref="popover1"
      placeholder="Select"
      class="w-full wv-b3"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div v-for="(item, index) in yearData" :key="index" class="md:w-[500px]">
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
  },
};
</script>
<style lang="scss">
.filterBtn {
  @apply w-full text-left  border-black;
}
</style>
