<template>
  <BoxContainer>
    <div class="wv-b3 w-[300px] mx-auto">
      <div>
        <b
          >‘เมืองที่น่าอยู่’<br />
          ในความคิดของคุณนั้นเป็นอย่างไร ? </b
        ><br />
        กรุงเทพมหานคร มี ‘ความน่าอยู่’ ในรูปแบบที่คุณวาดฝันมากน้อยแค่ไหน ?
      </div>
      <div class="my-5">
        ในฐานะประชาชนผู้เสียภาษี เรามีสิทธิที่จะวาดฝันและออกความเห็น
        เพื่อพัฒนาเมืองในรูปแบบที่ต้องการได้
      </div>
      <div>
        <b
          >ชวนคุณสำรวจงบประมาณ<br />
          รายจ่ายของกรุงเทพฯ และแสดง<br />ความคิดเห็นในประเด็นที่คุณสนใจ</b
        ><br />
        เพื่อขับเคลื่อนกรุงเทพฯ ให้เป็นเมืองที่น่าอยู่สำหรับทุกคน
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
