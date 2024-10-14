<template>
  <div>
    <el-popover
      ref="popover1"
      placeholder="Select"
      class="w-full wv-b4 font-bold"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div v-for="(item, index) in yearData" :key="index">
        <button @click="() => handleFilter(item)">{{ item }}</button>
      </div>
    </el-popover>
    <el-button v-popover:popover1>งบในปี {{ filterData?.year }}</el-button>
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
<style lang=""></style>
