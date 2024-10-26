<template>
  <div
    id="SurveyMainCard"
    :class="type === BudgetingType.BKK ? 'bg-wv-green' : 'bg-wv-yellow'"
    class="px-3 py-4 rounded"
  >
    <NuxtLink :to="{ path: `/${type}` }" class="relative">
      <div class="flex justify-between">
        <p class="wv-h6 font-bold hidden lg:block" v-html="data.title" />
        <p class="wv-h6 font-bold lg:hidden" v-html="data.title_mb" />
        <i class="el-icon-right ml-2 text-5xl" />
      </div>
      <p class="wv-b4 my-2" v-html="data.des" />
      <ul
        v-for="(list, index) in data.bullet"
        :key="index"
        class="list-disc wv-b6 opacity-60 list-inside ml-3"
      >
        <li>{{ list }}</li>
      </ul>
    </NuxtLink>
  </div>
</template>
<script>
import { BudgetingType } from "../commonType";

export default {
  props: ["data", "type"],
  data() {
    return {
      BudgetingType,
    };
  },
};
</script>
