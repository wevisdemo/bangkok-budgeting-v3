<template>
  <BoxContainer>
    <div class="flex -mx-14 sm:m-auto relative my-4" id="allocate-question">
      <div class="flex justify-center items-center w-full text-center">
        <img
          class="w-full h-full max-w-[600px]"
          src="~/assets/images/question.png"
          alt="proposed"
        />
        <div
          class="absolute top-0 w-full max-w-[600px] max-h-[600px] rounded-full flex items-center justify-center aspect-square"
        >
          <div class="flex flex-col gap-2 px-16 sm:px-20 text-center">
            <p class="wv-h5 wv-kondolar font-black">อยากให้ใช้งบทำอะไร?</p>
            <p class="wv-b5 max-w-[376px] mx-auto">
              ในปีต่อ ๆ ไป กรุงเทพมหานครยังคงมุ่งพัฒนาและขับเคลื่อน ‘แผนงานพัฒนา
              9 ด้าน(ดี)’ ให้เกิดขึ้นต่อไป เพื่อเป้าหมาย<br />
              <b>‘กรุงเทพฯ เมืองน่าอยู่สำหรับทุกคน’</b>
            </p>
            <p class="wv-h8 font-bold wv-kondolar mt-2 max-w-[302px] mx-auto">
              ถ้าบางส่วนของงบฯ<br />
              ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้<br />
              อย่างตรงจุดได้คุณคิดว่าควร นำไป<br />พัฒนากับเรื่องอะไรบ้าง?
            </p>
            <svg
              class="mx-auto mt-3"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6177_11610)">
                <path
                  d="M7.25024 1.98474C7.25024 1.43246 7.69796 0.984741 8.25024 0.984741C8.80253 0.984741 9.25024 1.43246 9.25024 1.98474L7.25024 1.98474ZM8.95735 15.9981C8.56683 16.3887 7.93366 16.3887 7.54314 15.9981L1.17918 9.63418C0.788652 9.24365 0.788652 8.61049 1.17918 8.21996C1.5697 7.82944 2.20287 7.82944 2.59339 8.21996L8.25024 13.8768L13.9071 8.21996C14.2976 7.82944 14.9308 7.82944 15.3213 8.21996C15.7118 8.61049 15.7118 9.24365 15.3213 9.63418L8.95735 15.9981ZM9.25024 1.98474L9.25024 15.291L7.25024 15.291L7.25024 1.98474L9.25024 1.98474Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_6177_11610">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.250244 16.6379) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "./BoxContainer.vue";

export default Vue.extend({
  name: "AllocationQuestion",
  components: { BoxContainer },
});
</script>
