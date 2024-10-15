<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <div
      id="budgetplans"
      class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8"
    >
      <div class="flex justify-center items-center w-full text-center">
        <img
          src="~/assets/illustrations/budgetplans.svg"
          alt="Budget plan"
          width="100%"
          height="auto"
          class="max-w-[600px]"
        />
        <div class="absolute max-w-lg p-16 sm:p-8">
          <h4 class="wv-h5 wv-bold wv-kondolar">
            สำรวจการใช้<br />
            งบประมาณ
          </h4>
          <p class="wv-b3">
            เพื่อ ‘เมืองน่าอยู่ สำหรับทุกคน’<br />
            กทม. ใช้งบประมาณส่วนนี้อย่างไร ?
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-wv-cream-30 mx-auto py-[10px] flex mt-[60px] flex-col max-w-[761px] items-center gap-4 text-center mb-10 px-4 rounded-[5px]"
    >
      <p class="wv-b5 font-bold">Disclaimer</p>
      <p class="wv-b6 font-bold">
        งบที่ใช้ตามแผนงานพัฒนา 9 ด้าน (ดี) ไม่ใช่งบทั้งหมดของกรุงเทพฯ
      </p>
      <p class="wv-b7">
        แต่เป็นงบประมาณส่วนสำคัญที่เกี่ยวข้องกับการให้บริการ ประชาชน
        และประชาชนมีส่วนร่วมได้มากที่สุด ข้อมูลในส่วนนี้
        เป็นข้อมูลงบประมาณตามแผนงานพัฒนา 9 ด้าน (ดี)
        ที่ระบุในข้อบัญญัติงบประมาณรายจ่ายกรุงเทพมหานคร
        ไม่ใช่งบประมาณรายจ่ายที่เกิดขึ้นจริง
      </p>
    </div>
    <div class="flex flex-col space-y-[20px]">
      <YearlyBudgetVue />
      <BudgetUsage />
      <BudgetExplorer />
    </div>
    <div class="mt-8">
      <button class="border border-black px-[20px] py-[10px] rounded-[5px]">
        <span class="wv-b6">ดาวน์โหลดข้อมูลงบประมาณรายจ่าย</span
        ><span class="wv-b7 opacity-50 ml-2">ตามแผนนโยบาย 9 ด้าน (ดี)</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import BudgetExplorer from "~/components/budget/charts/BudgetExplorer.vue";
import BudgetUsage from "~/components/budget/charts/BudgetUsage.vue";
import YearlyBudgetVue from "~/components/budget/charts/YearlyBudget.vue";

export default Vue.extend({
  name: "BudgetPlans",
  components: {
    BoxContainer,
    YearlyBudgetVue,
    BudgetUsage,
    BudgetExplorer,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss"></style>
