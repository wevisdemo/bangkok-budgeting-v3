<template>
  <div
    class="fixed md:absolute inset-0 h-full bg-white z-40 py-[70px] px-[50px]"
  >
    <i
      class="el-icon-back absolute top-0 left-0 m-[20px] wv-h5 cursor-pointer"
      @click="() => handleProject()"
    ></i>
    <p class="wv-b3 font-bold">{{ project.project_name }}</p>
    <div class="flex py-5">
      <div class="flex-[3] border-r border-r-gray-300 pr-4">
        <p class="wv-b7 font-bold">เขต</p>
        <p>{{ project.district }}</p>
      </div>
      <div class="flex-[3] pl-3">
        <p class="wv-b7 font-bold">ชุมชน</p>
        <p>{{ project.community }}</p>
      </div>
    </div>
    <div class="flex py-5 border-t border-t-gray-300">
      <div class="flex-[3] border-r border-r-gray-300 pr-4">
        <p class="wv-b7 font-bold">งบประมาณ</p>
        <p>{{ project.amount.toLocaleString("en-US", {}) }} บาท</p>
      </div>
      <div class="flex-[3] pl-3">
        <p class="wv-b7 font-bold">ปีงบประมาณ</p>
        <p>พ.ศ. {{ project.budget_year }}</p>
      </div>
    </div>
    <div class="py-5 border-t border-t-gray-300">
      <p class="wv-b7 font-bold">รายละเอียดโครงการ</p>
      <div class="flex items-top">
        <p class="wv-b5">{{ project?.description }}</p>
      </div>
    </div>
    <div class="py-5 border-t border-t-gray-300">
      <p class="font-bold wv-b7">รายการใช้จ่าย</p>
      <p class="wv-b5">{{ project.procurement_list }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object || Boolean,
    },
    handleProject: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped></style>
