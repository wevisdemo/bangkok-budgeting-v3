<template>
  <div class="fixed inset-0 z-40">
    <div
      class="bg-white z-30 relative py-[70px] h-screen md:h-fit top-[50%] translate-y-[-50%] max-w-[800px] left-[50%] translate-x-[-50%] card px-[50px]"
    >
      <div class="absolute w-[25px] md:w-[50px] z-50 top-0 right-0 m-5">
        <img
          src="~/assets/images/cancel.svg"
          class="cursor-pointer"
          @click="() => handleProject()"
        />
      </div>
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
        <p class="font-bold wv-b7">รายการใช้จ่าย</p>
        <p
          class="wv-b5 mt-2"
          v-html="project.procurement_list.replace(/(?:\r\n|\r|\n)/g, '<br />')"
        ></p>
      </div>
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
  mounted() {
    console.log(this.project, "project");
  },
};
</script>

<style lang="scss" scoped></style>
