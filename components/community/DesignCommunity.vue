<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <button
      class="py-[5px] px-[15px] text-left border border-black w-fit mx-auto rounded-[5px]"
    >
      <p class="wv-b6">ดาวน์โหลดข้อมูลงบประมาณรายจ่าย</p>
      <p class="wv-b7 opacity-50">ตามโครงการชุมชนเข้มแข็ง</p>
    </button>
    <div
      id="communityPlans"
      class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8 mt-11"
    >
      <div class="flex flex-col justify-center items-center w-full text-center">
        <img
          src="~/assets/illustrations/communityPlan.svg"
          alt="Budget plan"
          width="100%"
          height="auto"
          class="max-w-[600px]"
        />
        <div class="absolute max-wa-lg p-16 sm:p-8">
          <p class="wv-h5 font-bold">
            ออกแบบชุมชนเมือง<br />
            ผ่าน ‘งบประมาณ<br />
            200,000 บาทต่อชุมชน’
          </p>
          <p class="wv-b3">
            อยากให้ชุมชนของคุณ<br />
            พัฒนาโครงการอะไร ? เริ่มต้นได้ด้วย<br />
            การส่งไอเดียของคุณให้เราฟัง
          </p>
          <div
            @click="() => handleDesignDialog()"
            class="cursor-pointer mt-2 wv-b3 font-bold border border-black rounded-[5px] py-[10px] px-[15px] w-fit mx-auto"
          >
            แบบฟอร์มเสนอโครงการ
          </div>
          <div
            class="py-[5px] cursor-pointer mt-2 wv-b5 text-white bg-black border rounded-[5px] border-black w-fit mx-auto"
          >
            <a
              class="my-[5px] mx-[10px]"
              href="https://docs.google.com/document/d/1iOycCc-TOa6DO4g337sNnq4iycEpWHY8/edit"
              target="_blank"
            >
              คู่มือการเขียนโครงการ
            </a>
          </div>
        </div>
      </div>
    </div>
    <DesignDialog
      v-if="isDesginDialog"
      :handleDesignDialog="handleDesignDialog"
    />
  </div>
</template>
<script>
import DesignDialog from "../dialog/DesignDialog.vue";

export default {
  components: {
    DesignDialog,
  },
  data() {
    return {
      isDesginDialog: false,
    };
  },
  methods: {
    handleDesignDialog() {
      this.isDesginDialog = !this.isDesginDialog;
    },
  },
};
</script>
<style lang=""></style>
