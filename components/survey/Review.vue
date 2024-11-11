<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8 mt-10">
      <div class="wv-h5 wv-kondolar">
        <h5 class="text-center">ประเด็นที่คุณสนใจ</h5>
        <p class="font-bold">อยู่ในนโยบาย</p>
        <p :class="textColorSet(selectedSurvey.plan)" class="font-bold">
          “{{ selectedSurvey.plan }}”
        </p>
      </div>
      <p class="wv-b3">{{ selectedSurvey.sub_policy }}</p>

      <img
        class="w-20 h-28 mx-auto"
        :src="`${$config.path.base}images/strategies/${formatName(
          selectedSurvey.plan
        )}_hover.svg`"
      />
      <div class="flex flex-col mt-5 w-[120px] mx-auto wv-b5">
        <button
          @click="toggleVote(2)"
          class="border border-black flex items-center justify-between rounded-[5px] py-[5px] px-[10px] bg-wv-green"
        >
          ดูผลโหวต
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2359 4.85355C11.4311 4.65829 11.4311 4.34171 11.2359 4.14645L8.0539 0.964466C7.85863 0.769204 7.54205 0.769204 7.34679 0.964466C7.15153 1.15973 7.15153 1.47631 7.34679 1.67157L10.1752 4.5L7.34679 7.32843C7.15153 7.52369 7.15153 7.84027 7.34679 8.03553C7.54205 8.2308 7.85863 8.2308 8.0539 8.03553L11.2359 4.85355ZM0.882324 5H10.8823V4H0.882324V5Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          @click="() => resetStep()"
          class="border border-wv-gray-80 text-wv-gray-80 mt-2 flex items-center justify-between rounded-[5px] py-[5px] px-[10px]"
        >
          โหวตอีกรอบ
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.52877 3.9803C0.333508 4.17556 0.333508 4.49215 0.52877 4.68741L3.71075 7.86939C3.90601 8.06465 4.2226 8.06465 4.41786 7.86939C4.61312 7.67413 4.61312 7.35754 4.41786 7.16228L1.58943 4.33385L4.41786 1.50543C4.61312 1.31016 4.61312 0.993582 4.41786 0.798319C4.2226 0.603057 3.90601 0.603058 3.71075 0.798319L0.52877 3.9803ZM4.30076 10.166C4.02461 10.166 3.80076 10.3899 3.80076 10.666C3.80076 10.9422 4.02461 11.166 4.30076 11.166L4.30076 10.166ZM7.71624 3.83385L0.882324 3.83385L0.882324 4.83385L7.71624 4.83385L7.71624 3.83385ZM7.71624 10.166L4.30076 10.166L4.30076 11.166L7.71624 11.166L7.71624 10.166ZM10.3823 7.49993C10.3823 8.97237 9.18868 10.166 7.71624 10.166L7.71624 11.166C9.74096 11.166 11.3823 9.52466 11.3823 7.49993L10.3823 7.49993ZM7.71624 4.83385C9.18868 4.83385 10.3823 6.0275 10.3823 7.49993L11.3823 7.49993C11.3823 5.47521 9.74096 3.83385 7.71624 3.83385L7.71624 4.83385Z"
              fill="#6E6E6E"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatName, textColorSet } from "../budget/utils";
export default {
  props: ["resetStep", "toggleVote"],
  computed: {
    ...mapState(["selectedSurvey"]),
  },
  data() {
    return {
      reviewDate: [],
    };
  },
  methods: {
    formatName,
    textColorSet,
  },
};
</script>

<style lang="scss" scoped></style>
