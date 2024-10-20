<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <div
      id="budgetplans"
      class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8"
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
          <p class="wv-h8 font-bold">
            เราจะส่งมอบไอเดียของคุณ<br />
            ให้ทางชุมชนพิจารณา<br />
            เพื่อนำไปพัฒนาต่อให้เกิดขึ้นจริง
          </p>
          <p class="wv-b5 mt-2 mb-3">
            ชวนคุณสำรวจงบประมาณรายจ่ายของ กทม. ต่อ !<br />
            เพื่อให้เข้าใจแผนการใช้งบและร่วมขับเคลื่อน<br />
            ให้กรุงเทพฯ เป็นเมืองที่น่าอยู่มากขึ้น
          </p>
          <div class="flex flex-col space-y-3">
            <button
              class="wv-b5 py-[5px] px-[10px] w-fit mx-auto border border-black rounded-[5px]"
            >
              สำรวจงบ กทม.
            </button>
            <button
              class="wv-b5 py-[5px] px-[10px] w-fit mx-auto border border-black rounded-[5px]"
            >
              ย้อนกลับหน้าแรก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
