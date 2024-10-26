<template>
  <BoxContainer>
    <div class="wv-b3 mx-auto">
      <img src="~/assets/images/landingBkk.png" class="mx-auto" />
      <div
        class="opacity-50 mt-3 wv-b7 flex space-x-1 items-center justify-center"
      >
        <span>เลื่อนเพื่อเข้าเนื้อหา</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5" stroke="black" stroke-width="0.787917" />
          <path
            d="M3.85156 5.01334L5.99949 7.71939L8.14741 5.01334"
            stroke="black"
            stroke-width="0.787917"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="max-w-[300px] md:max-w-[500px] mx-auto">
        <div class="mt-10">
          <b
            >‘เมืองที่น่าอยู่’<br class="lg:hidden" />
            ในความคิดของคุณนั้นเป็นอย่างไร ? </b
          ><br />
          กรุงเทพมหานคร มี ‘ความน่าอยู่’ <br />ในรูปแบบที่คุณวาดฝันมากน้อยแค่ไหน
          ?
        </div>
        <div class="my-10">
          ในฐานะประชาชนผู้เสียภาษี<br class="md:hidden" />
          เรามีสิทธิที่จะวาดฝัน<br class="hidden md:block" />และออกความเห็น
          เพื่อพัฒนาเมืองในรูปแบบที่ต้องการได้
        </div>
        <div>
          <b
            >ชวนคุณสำรวจงบประมาณ<br class="lg:hidden" />
            รายจ่ายของกรุงเทพฯ<br
              class="hidden md:block"
            /> และแสดงความคิดเห็นในประเด็นที่คุณสนใจ</b
          ><br />
          เพื่อขับเคลื่อนกรุงเทพฯ<br class="md:hidden" />
          ให้เป็นเมืองที่น่าอยู่สำหรับทุกคน
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";

export default Vue.extend({
  name: "MissionStatement",
  components: { BoxContainer },
});
</script>
