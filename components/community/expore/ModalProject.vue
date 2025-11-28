<template>
  <div class="fixed inset-0 z-40" @click.self="handleProject">
    <div
      class="bg-white z-30 relative pt-[30px] pb-[20px] h-screen md:h-fit md:w-full left-[50%] lg:w-[850px] lg:h-[600px] translate-x-[-50%] px-[20px] md:px-[50px] overflow-auto lg:top-[50%] lg:translate-y-[-50%] lg:absolute lg:shadow-lg"
    >
      <div
        class="absolute w-[25px] md:w-[50px] z-50 top-0 right-0 m-5"
        @click="handleProject"
      >
        <img src="~/assets/images/cancel.svg" class="cursor-pointer" />
      </div>
      <p class="wv-b3 font-bold">{{ project.project_name }}</p>

      <div class="flex py-5">
        <div class="flex-[3] border-r border-r-gray-300 pr-4">
          <div class="flex flex-row relative">
            <p class="wv-b7 font-bold">เป้าประสงค์</p>
            <img
              src="~/assets/images/icon_information.png"
              class="mx-auto w-[15px] h-[15px] ml-2"
              @click.stop="toggleInfoModal"
            />
            <div
              v-if="showInfoModal"
              class="absolute bg-white rounded-lg shadow-lg max-w-[250px] p-4 top-6 left-0 z-50"
              @click.stop
            >
              <p class="wv-b6 font-bold mb-2">
                สามารถใช้ดำเนินโครงการ<br />ตามหลักเกณฑ์การพิจารณา<br />แผนพัฒนาชุมชนฯ
                5 ด้าน คือ
              </p>
              <ul class="list-disc wv-b6 pl-4 text-sm">
                <li>ด้านเศรษฐกิจ</li>
                <li>ด้านกายภาพและสิ่งแวดล้อม</li>
                <li>ด้านสังคม</li>
                <li>ด้านอนามัย</li>
                <li>ด้านจิตใจ</li>
              </ul>
            </div>
          </div>
          <p>{{ project.project_objective }}</p>
        </div>
        <div class="flex-[3] pl-3">
          <p class="wv-b7 font-bold">ปีงบประมาณ</p>
          <p>พ.ศ. {{ project.budget_year }}</p>
        </div>
      </div>
      <div class="flex py-5 border-t border-t-gray-300">
        <div class="flex-[3] border-r border-r-gray-300 pr-4">
          <p class="wv-b7 font-bold">เขต</p>
          <p>{{ project.district }}</p>
        </div>
        <div class="flex-[3] pl-3">
          <p class="wv-b7 font-bold">ชุมชน</p>
          <p>{{ project.community }}</p>
        </div>
      </div>
      <div class="py-5 border-t border-t-gray-300">
        <p class="font-bold wv-b7">รายการใช้จ่าย</p>
        <p
          class="wv-b6 mt-2"
          v-html="
            project.procurement_list
              .map((item) => item.replace(/(?:\r\n|\r|\n)/g, '<br />'))
              .join('<br />')
          "
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
  data() {
    return {
      showInfoModal: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleInfoModal() {
      this.showInfoModal = !this.showInfoModal;
    },
    handleClickOutside() {
      if (this.showInfoModal) {
        this.showInfoModal = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
