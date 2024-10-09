<template>
  <div>
    <el-popover ref="district" class="w-full" acement="bottom" trigger="click">
      <div class="relative">
        <img
          src="~/assets/images/searchIcon.svg"
          class="absolute top-0 left-0 ml-2"
        />
        <input
          type="text"
          class="border-b border-b-black w-full min-w-[90vw] wv-b5 mb-3 pl-8"
          placeholder="พิมพ์คีย์เวิร์ด"
        />
        <div class="overflow-scroll h-[250px]" id="listDistrict">
          <div v-for="(item, index) in districtData" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:district>District</el-button>
  </div>
</template>
<script>
export default {
  props: ["districtData", "filterData"],
};
</script>
<style lang=""></style>
