<template>
  <div class="flex overflow-x-auto space-x-1">
    <div v-for="(item, index) in data" :key="index" class="h-[255px]">
      <div
        class="wv-b6 font-bold items-center flex justify-center w-[190px] h-[55px] text-center p-[10px] rounded-t-md"
        :class="type === BudgetingType.BKK ? 'bg-wv-green' : 'bg-wv-yellow'"
        v-html="item.topic"
      />
      <div class="text-center border border-gray-300 border-t-0 rounded-b-md">
        <p class="py-5 wv-b4">{{ item.header }}</p>
        <div class="border-t-black border-t w-[120px] mx-auto">
          <p class="hidden">.</p>
        </div>
        <div class="w-[160px] mx-auto">
          <p class="pt-5 wv-b3 font-bold">{{ item.budget }}</p>
        </div>
        <div class="my-3">
          <div>
            <NuxtLink
              :to="{
                path: item.path,
                query: item.query,
              }"
              class="bg-wv-gray-20 items-center w-fit mx-auto rounded-full py-1 px-3 wv-b6 flex space-x-1 cursor-pointer"
            >
              ดูข้อมูล
              <div class="w-[15px] pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>
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
