<template>
  <div class="flex overflow-x-scroll space-x-1">
    <div v-for="(item, index) in data" :key="index">
      <div
        class="wv-b5 font-bold w-[190px] text-center p-[10px] rounded-t-md"
        :class="type === BudgetingType.BKK ? 'bg-wv-green' : 'bg-wv-yello'"
      >
        {{ item.topic }}
      </div>
      <div class="text-center border border-gray-300 border-t-0 rounded-b-md">
        <p class="py-5 wv-b4">{{ item.header }}</p>
        <div class="border-t-black border-t w-[120px] mx-auto">
          <p class="hidden">.</p>
        </div>
        <div class="w-[160px] mx-auto">
          <p class="pt-5 wv-b3 font-bold">{{ item.budget }} ล้านบาท</p>
        </div>
        <button
          class="my-3 bg-wv-gray-20 w-fit mx-auto rounded-full py-1 px-3 wv-b6"
        >
          ดูข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { BudgetingType } from "../commonType";
export default {
  data() {
    return {
      BudgetingType,
    };
  },
  props: ["data", "type"],
};
</script>
<style lang=""></style>
