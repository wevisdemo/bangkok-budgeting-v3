<template>
  <div class="flex flex-col font-bold">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8">
      <h5 class="wv-h5 wv-bold text-center wv-kondolar">
        เลือกอีก 1 ประเด็น<br />
        ที่คุณอยากแก้ไข
      </h5>
    </div>

    <button
      class="rounded-[5px] w-full my-1 flex items-center text-start px-[10px] py-[6px] hover:bg-black hover:text-white"
      v-for="(item, key) in subProblem"
      :key="key"
      @click="() => selectTopic(item.strategy)"
      :class="
        selectedSurvey?.sub_policy === item.strategy
          ? `bg-black text-white`
          : `bg-wv-cream`
      "
    >
      {{ item.no }}. {{ item.strategy }}
    </button>

    <div class="flex justify-center mt-5 items-center">
      <button
        @click="() => prevPage()"
        class="border-black border rounded-[5px] flex items-center justify-center h-[40px] w-[40px]"
      >
        <i class="el-icon-back text-2xl" />
      </button>
      <button
        class="border border-black rounded p-3 ml-2 wv-b6 font-bold"
        :class="selectedSurvey?.sub_policy ? `opacity-100` : `opacity-20`"
        :disabled="!selectedSurvey?.sub_policy"
        @click.stop="openDialog"
      >
        ส่งความคิดเห็น
      </button>
    </div>
    <FormDialog
      :selected="selected"
      :closeDialog="closeDialog"
      v-if="dialogOpen"
      :setStepSurvey="setStepSurvey"
    />
  </div>
</template>

<script>
import FormDialog from "~/components/FormDialog.vue";
import { surveyData } from "~/data/survey-data";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    FormDialog,
  },
  props: {
    setStepSurvey: {
      type: Function,
    },
  },
  computed: {
    ...mapState(["selectedSurvey"]),
  },
  data() {
    return {
      subProblem: [],
      projects: [],
      selected: [],
      dialogOpen: false,
      formData: {
        district: {},
        projects: [],
      },
    };
  },
  mounted() {
    this.subProblem = this.surveyData()?.filter(
      (item) => item.problem === this.selectedSurvey.policy
    )[0].subProblem;
    if (!this.subProblem)
      this.updataSurvey({ ...this.selectedSurvey, sub_policy: "" });
  },
  methods: {
    ...mapActions({
      updataSurvey: "updataSurvey",
    }),
    surveyData,
    selectTopic(strategy) {
      this.updataSurvey({ ...this.selectedSurvey, sub_policy: strategy });
    },
    prevPage() {
      this.setStepSurvey("prev");
    },
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
