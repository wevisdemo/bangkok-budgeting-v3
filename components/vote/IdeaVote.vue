<template>
  <BoxContainer>
    <div id="vote-result" class="pt-5">
      <div class="text-center">
        <h5 class="wv-h5 wv-bold wv-kondolar">5 ประเด็น ที่ถูกโหวตมากที่สุด</h5>
        <div class="flex justify-center items-center my-3">
          <p class="wv-b5">ที่อยู่ใน</p>
          <div class="ml-2">
            <DistrictDropdown :type="2" @change="onChangeDistrict" />
          </div>
        </div>
        <p class="wv-b5">
          จำนวนครั้งที่โหวตทั้งหมด <strong>{{ totalVotes }}</strong> ครั้ง
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2 w-full my-4 max-w-[600px] m-auto">
      <template v-for="(vote, voteIndex) in formatData">
        <VoteProgress
          :key="`voteIndex-${voteIndex}`"
          :strategyVote="vote"
          :totalVotes="totalVotes"
        />
      </template>
    </div>

    <Transition name="slide-fade">
      <CookieWarning v-if="showCookieWarning" />
    </Transition>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VoteProgress from "./VoteProgress.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import CookieWarning from "~/components/CookieWarning.vue";
import _ from "lodash";

import type { District } from "~/components/DistrictDropdown.vue";
import type { ProjectVote } from "~/components/ProjectDropdown.vue";
import projectsData from "~/data/projects.json";

interface NocoDBResponseType {
  list: {
    count: string;
    strategy: string;
    idea: string;
  }[];
  pageInfo: {
    isFirstPage: boolean;
    isLastPage: boolean;
    page: number;
    pageSize: number;
    totalRows: number;
  };
}

interface IdeaVoteData {
  ideaVotes: ProjectVote[];
  projectResponseData: NocoDBResponseType;
  isAllDistrict: boolean;
  selected_district_name: string;
  voteIdeaComment: any;
  showCookieWarning: boolean;
  formatData: any;
  voter: any;
}

export default defineComponent({
  name: "IdeaVote",
  components: {
    VoteProgress,
    BoxContainer,
    DistrictDropdown,
    FormDialog,
    CookieWarning,
  },
  data(): IdeaVoteData {
    return {
      ideaVotes: projectsData.map((p) => ({
        ...p,
        vote_count: 0,
        progress: 0,
      })) as ProjectVote[],
      projectResponseData: {} as NocoDBResponseType,
      isAllDistrict: true,
      selected_district_name: "ทุกเขต",
      voteIdeaComment: "",
      showCookieWarning: false,
      formatData: [],
      voter: [],
    };
  },
  computed: {
    totalVotes(): number | undefined {
      if (!this.voter?.pageInfo) return 0;
      return this.formatData.length;
    },
  },
  async mounted() {
    this.projectResponseData = await this.getProjectData();
    this.voter = await this.getTotalVote();
    this.formatIdea(this.projectResponseData);
    console.log(this.formatData, "voter");
  },
  methods: {
    formatIdea(projectResponseData: any) {
      const groupBy = _.groupBy(projectResponseData.list, "sub_policy");
      const data = Object.values(groupBy).map((data) => ({
        count: data.length,
        sub_policy: data[0].sub_policy,
        idea: data[0].idea,
        policy: data[0].policy,
        district: data[0].district,
      }));
      this.formatData = _.orderBy(data, ["count"], ["desc"]).slice(0, 5);
    },
    async onChangeDistrict(district: District) {
      this.selected_district_name = district.th_name;
      this.projectResponseData = await this.getProjectData(district.th_name);
      this.formatIdea(this.projectResponseData);
    },
    async groubByTableRow(districtThName?: District["th_name"]) {
      try {
        if (districtThName === "ทุกเขต" || !districtThName) {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "Survey-2024"
          );
          return data;
        } else {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "Survey-2024",
            {
              where: `(district,eq,เขต${districtThName})`,
            }
          );
          return data;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },

    async getTotalVote(districtThName?: District["th_name"]) {
      try {
        if (districtThName === "ทุกเขต" || !districtThName) {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "User-Data-2024"
          );
          return data;
        } else {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "User-Data-2024",
            {
              where: `(district,eq,เขต${districtThName})`,
            }
          );
          return data;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async getProjectData(districtThName?: string) {
      const result: NocoDBResponseType = await this.groubByTableRow(
        districtThName
      );
      this.voter = await this.getTotalVote(districtThName);
      if (result?.list.length > 0) {
        this.ideaVotes.forEach((strategy, index) => {
          const _vouteCount = parseInt(result.list[index]?.count);
          strategy.vote_count = _vouteCount;
        });
      }
      return result;
    },
  },
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
