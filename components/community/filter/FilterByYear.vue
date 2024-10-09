<template>
  <div>
    <el-popover
      ref="popover1"
      placeholder="Select"
      class="w-full wv-b4 font-bold"
      acement="bottom"
      trigger="click"
    >
      <div v-for="(item, index) in yearData" :key="index">
        {{ item }}
      </div>
    </el-popover>
    <el-button v-popover:popover1>Year Data</el-button>
  </div>
</template>
<script>
export default {
  props: ["yearData", "filterData"],
};
</script>
<style lang=""></style>
