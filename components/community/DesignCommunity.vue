<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <a
      href="https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/edit?gid=453189989#gid=453189989"
      target="_blank"
      class="flex py-[5px] px-[15px] text-left border items-center border-black w-fit mx-auto rounded-[5px]"
    >
      <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
      <div>
        <p class="wv-b6">ดาวน์โหลดข้อมูลงบประมาณรายจ่าย</p>
        <p class="wv-b7 opacity-50">ตามโครงการชุมชนเข้มแข็ง</p>
      </div>
    </a>
    <div
      id="community-plans"
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
          <div class="mt-5 mb-6">
            <a
              class="my-[5px] cursor-pointer mt-2 wv-b3 font-bold border-[2px] border-black rounded-[5px] py-[10px] flex justify-center items-center px-[15px] w-fit mx-auto"
              href="https://docs.google.com/document/d/1iOycCc-TOa6DO4g337sNnq4iycEpWHY8/edit"
              target="_blank"
            >
              <svg
                class="mr-2"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66395 4.30933H1.1084V19.7414H18.3923V4.30933C18.3923 4.30933 14.1087 4.30933 12.8368 4.30933"
                  stroke="black"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.251 10.2798L9.74986 15.7809L4.24874 10.2798"
                  stroke="black"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.75098 1.84033L9.75098 15.4206"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              แบบฟอร์มเสนอโครงการ
            </a>
          </div>
          <div
            @click="() => handleDesignDialog()"
            class="py-[5px] cursor-pointer flex justify-center items-center mt-2 px-2 wv-b5 text-white bg-black border rounded-[5px] border-black w-fit mx-auto"
          >
            <svg
              class="mr-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.25" cy="7.79102" r="7.5" fill="white" />
              <path
                d="M5.62012 12.9092V11.2845H7.27432V7.57735H5.69397V5.95269H9.37161V11.2845H10.8781V12.9092H5.62012ZM8.21957 5.00743C7.87495 5.00743 7.57956 4.8942 7.3334 4.66773C7.09708 4.43142 6.97892 4.15572 6.97892 3.84063C6.97892 3.496 7.09216 3.21538 7.31863 2.99876C7.55494 2.78214 7.85526 2.67383 8.21957 2.67383C8.54451 2.67383 8.83005 2.79199 9.07621 3.0283C9.33222 3.25477 9.46022 3.52554 9.46022 3.84063C9.46022 4.15572 9.33222 4.43142 9.07621 4.66773C8.83005 4.8942 8.54451 5.00743 8.21957 5.00743Z"
                fill="black"
              />
            </svg>

            คู่มือการเขียนโครงการ
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
