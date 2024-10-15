<template>
  <div class="flex flex-col font-bold">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8">
      <h5 class="wv-h5 wv-bold text-center wv-kondolar">
        เลือก 1 นโยบาย ที่คุณสนใจที่สุด
      </h5>
    </div>
    <div class="">
      <button
        v-for="item in surveyData()"
        :key="item.no"
        class="rounded-[5px] w-full my-1 flex items-center text-start px-[10px] py-[6px] hover:bg-black hover:text-white"
        @click="() => selectTopic(item.problem, item.plan)"
        :class="
          selectedSurvey?.policy === item.problem
            ? `bg-black text-white`
            : `bg-wv-cream`
        "
      >
        {{ item.no }}. {{ item.problem }}
      </button>
    </div>
    <button
      @click="() => nextPage()"
      :class="[selectedSurvey?.policy ? `opacity-100` : `opacity-20`]"
      :disabled="!selectedSurvey?.policy"
      class="mx-auto mt-5 border-black border rounded-[5px] flex items-center justify-center h-[40px] w-[40px]"
    >
      <i class="el-icon-right text-2xl" />
    </button>
  </div>
</template>

<script>
import { surveyData } from "~/data/survey-data";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    setStepSurvey: {
      type: Function,
    },
  },
  computed: {
    ...mapState(["selectedSurvey"]),
  },
  methods: {
    ...mapActions({
      updataSurvey: "updataSurvey",
    }),
    surveyData,
    selectTopic(problem, plan) {
      this.updataSurvey({ policy: problem, plan: plan });
    },
    nextPage() {
      this.setStepSurvey("next");
    },
  },
};
</script>

<style lang="scss" scoped></style>
