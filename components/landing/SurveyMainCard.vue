<template>
  <div
    id="SurveyMainCard"
    :class="type === BudgetingType.BKK ? 'bg-wv-green' : 'bg-wv-yellow'"
    class="px-3 py-4 rounded"
  >
    <NuxtLink :to="{ path: `/${type}` }">
      <p class="wv-h5 font-bold" v-html="data.title" />
      <p class="wv-b3 my-2" v-html="data.des" />
      <ul
        v-for="(list, index) in data.bullet"
        :key="index"
        class="list-disc wv-b5 opacity-60 list-inside ml-3"
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
