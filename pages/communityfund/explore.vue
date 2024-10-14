<template>
  <div class="container mx-auto min-h-[90vh] px-2 lg:px-8">
    <div id="nav" class="flex justify-between my-5">
      <NuxtLink :to="{ path: '/communityfund', hash: `#${topic}` }">
        <div class="flex items-center font-bold">
          <i class="el-icon-back mr-1" />
          สรุปภาพรวม
        </div>
      </NuxtLink>
    </div>
    <div
      id="header"
      class="flex wv-kondolar lg:justify-between text-center lg:text-left items-center flex-col lg:flex-row"
    >
      <div class="wv-black wv-h5">
        สำรวจการใช้งบ<br />โครงการ<br />
        ชุมชนเข้มแข็งฯ
      </div>
      <p class="text-red-500 mt-2 max-w-[270px] mx-auto wv-b7">
        *เนื่องด้วยข้อจำกัดในการรวบรวมและเปิดเผยข้อมูลโครงการชุมชนเข้มแข็งฯ
        <b
          >เว็บไซต์นี้จึงแสดงเฉพาะรายละเอียดโครงการฯ ของชุมชนจาก 5
          เขตที่มีชุดข้อมูล'</b
        >
      </p>
      <div class="flex wv-b5 items-center mt-3 lg:mt-0">
        <div
          v-for="item in toppics"
          :key="item.id"
          class="px-[14px] hover:border-black cursor-pointer text-center whitespace-nowrap py-[5px] border border-wv-gray-4 min-w-[120px]"
          :class="
            topic === item.value ? 'bg-wv-gray-4 text-black' : 'text-gray-400'
          "
          @click="chooseTopic(item.value)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <SurveyByYears v-if="topic === 'YearlyBudget'" />
    <SurveyByKeyword v-if="topic === 'KeyWordBudget'" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SurveyByKeyword from "~/components/community/expore/SurveyByKeyword.vue";
import SurveyByYears from "~/components/community/expore/SurveyByYears.vue";
import SurveyByOrganize from "~/components/expore/SurveyByOrganize.vue";

export default {
  components: { SurveyByYears, SurveyByOrganize, SurveyByKeyword },

  data() {
    return {
      toppics: [
        { name: "รายปี", value: "YearlyBudget" },
        { name: "ค้นด้วยคีย์เวิร์ด", value: "KeyWordBudget" },
      ],
      topic: {},
    };
  },
  mounted() {
    this.fetchdata();
    this.topic = this.$route.query.select || "YearlyBudget";
  },
  methods: {
    ...mapActions({
      updateChartData: "updateChartData",
      updateOrganizeData: "updateOrganizeData",
    }),
    fetchdata() {
      const chartResponse = this.$store.getters["data/getChartData"]();
      this.updateChartData(chartResponse);
    },
    chooseTopic(topicValue) {
      this.topic = topicValue;
      this.$router.push({ query: { select: topicValue } });
    },
  },
};
</script>
