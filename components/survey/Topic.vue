<template>
  <div class="flex flex-col">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8">
      <h5 class="wv-h5 wv-bold text-center wv-kondolar">
        เลือก 1 นโยบาย<br />
        ที่คุณสนใจที่สุด
      </h5>
    </div>
    <div class="wv-b7 opacity-50 mb-4 flex items-center w-fit mx-auto">
      <svg
        class="mr-2"
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M4.60355 0.534386C4.40829 0.339124 4.09171 0.339124 3.89645 0.534386L0.714466 3.71637C0.519204 3.91163 0.519204 4.22821 0.714466 4.42347C0.909728 4.61874 1.22631 4.61874 1.42157 4.42347L4.25 1.59505L7.07843 4.42347C7.27369 4.61874 7.59027 4.61874 7.78553 4.42347C7.9808 4.22821 7.9808 3.91163 7.78553 3.71637L4.60355 0.534386ZM4.75 8.88794L4.75 0.887939L3.75 0.887939L3.75 8.88794L4.75 8.88794Z"
          fill="black"
        />
      </svg>
      กดเลือกปัญหาที่สนใจ
    </div>
    <div class="">
      <button
        v-for="item in surveyData()"
        :key="item.no"
        class="rounded-[5px] font-bold w-full my-1 flex items-center text-start px-[10px] py-[6px] hover:bg-black hover:text-white"
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
    <p class="wv-b5 mt-2 opacity-50">Step 1/2</p>
    <button
      @click="() => nextPage()"
      :class="[selectedSurvey?.policy ? `opacity-100` : `opacity-20`]"
      :disabled="!selectedSurvey?.policy"
      class="wv-b5 opacity-50 mx-auto mt-3 border-black border rounded-[5px] flex items-center justify-center h-[40px] px-3"
    >
      <span class="mr-2">ไปต่อ</span>

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
