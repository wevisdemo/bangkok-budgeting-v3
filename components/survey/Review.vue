<template>
  <div class="flex flex-col font-bold items-center justify-center h-full">
    <div id="projectsDevelopment" class="mb-2 scroll-mt-8 mt-10">
      <div class="wv-h5">
        <h5 class="text-center wv-kondolar">ประเด็นที่คุณสนใจ</h5>
        <p>อยู่ในนโยบาย</p>
        <p :class="textColorSet(selectedSurvey.plan)">
          “{{ selectedSurvey.plan }}”
        </p>
      </div>
      <p class="wv-b3">{{ selectedSurvey.sub_policy }}</p>

      <img
        class="w-20 h-28 mx-auto"
        :src="`${$config.path.images}/strategies/${formatName(
          selectedSurvey.plan
        )}_hover.svg`"
      />
      <div class="flex flex-col">
        <button>ดูผลโหวต</button>
        <button @click="() => resetStep()">โหวตอีกรอบ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatName, textColorSet } from "../budget/utils";
export default {
  props: ["resetStep"],
  computed: {
    ...mapState(["selectedSurvey"]),
  },
  data() {
    return {
      reviewDate: [],
    };
  },
  async mounted() {
    console.log(this.selectedSurvey, "rowData");
  },

  methods: {
    textColorSet,
    formatName,
    async findTableViewRow(cookieId) {
      // const data = await this.$nocoDb.dbViewRow.list(
      //   "v1",
      //   "bangkok-budgeting",
      //   "Survey-2024",
      //   "data",
      //   { where: `(userId,eq,${cookieId})` }
      // );
      return "data";
    },
  },
};
</script>

<style lang="scss" scoped></style>
