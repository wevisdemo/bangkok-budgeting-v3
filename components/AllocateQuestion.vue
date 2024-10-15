<template>
  <BoxContainer>
    <div class="flex -mx-14 sm:m-auto relative my-4">
      <div class="flex justify-center items-center w-full text-center">
        <img
          class="w-full h-full max-w-[600px]"
          src="~/assets/images/question.png"
          alt="proposed"
        />
        <div
          class="absolute top-0 w-full max-w-[600px] max-h-[600px] rounded-full flex items-center justify-center aspect-square"
        >
          <div class="flex flex-col gap-4 px-16 sm:px-20 text-center">
            <p class="wv-h5">อยากให้ใช้งบทำอะไร?</p>
            <p class="wv-b5 max-w-[376px] mx-auto">
              ในปีต่อ ๆ ไป กรุงเทพมหานครยังคงมุ่งพัฒนาและขับเคลื่อน ‘แผนงานพัฒนา
              9 ด้าน(ดี)’ ให้เกิดขึ้นต่อไป เพื่อเป้าหมาย<br />
              <b>‘กรุงเทพฯ เมืองน่าอยู่สำหรับทุกคน’</b>
            </p>
            <p class="wv-h9 wv-bold max-w-[302px] mx-auto">
              ถ้าบางส่วนของงบฯ<br />
              ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้ อย่างตรงจุดได้คุณคิดว่าควร
              นำไปพัฒนากับเรื่องอะไรบ้าง?
            </p>
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
