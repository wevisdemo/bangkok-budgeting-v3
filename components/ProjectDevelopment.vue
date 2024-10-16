<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <div
      class="min-h-[80vh] rounded-[20px] bg-white px-4 py-6 sm:p-10 relative mx-auto w-full"
    >
      <div class="flex max-w-[700px] mx-auto wv-b5 font-bold">
        <button
          :class="
            voteTab === 1
              ? 'bg-wv-gray-20 text-black'
              : 'text-wv-gray-40 bg-white'
          "
          class="flex-1 border-wv-gray-20 py-2 border"
          @click="toggleVote(1)"
        >
          โหวตนโยบาย
        </button>
        <button
          :class="
            voteTab === 2
              ? ' bg-wv-gray-20 text-black'
              : ' text-wv-gray-40 bg-white'
          "
          class="flex-1 border-wv-gray-20 py-2 border"
          @click="toggleVote(2)"
        >
          ผลโหวตนโยบาย
        </button>
      </div>
      <div class="max-w-[500px] mx-auto">
        <div v-show="voteTab === 1" class="pt-5">
          <Topic :setStepSurvey="setStepSurvey" v-if="stepSurvey === 1" />
          <Projects :setStepSurvey="setStepSurvey" v-if="stepSurvey === 2" />
          <Review :resetStep="resetStep" v-if="stepSurvey === 3" />
        </div>
        <div v-show="voteTab === 2">
          <IdeaVote />
        </div>
      </div>
      <Transition name="slide-fade">
        <CookieWarning v-if="showCookieWarning" />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CookieWarning from "~/components/CookieWarning.vue";
import Topic from "~/components/survey/Topic.vue";
import Projects from "~/components/survey/Projects.vue";
import Review from "~/components/survey/Review.vue";
import { mapActions } from "vuex";
import IdeaVote from "./vote/IdeaVote.vue";

interface ProjectDevelopmentData {
  isVoted: boolean;
  showCookieWarning: any;
  stepSurvey: number;
  voteTab: number;
}

export default defineComponent({
  name: "ProjectDevelopment",
  components: {
    CookieWarning,
    Topic,
    Projects,
    Review,
    IdeaVote,
  },
  data(): ProjectDevelopmentData {
    return {
      isVoted: false,
      showCookieWarning: false,
      stepSurvey: 0,
      voteTab: 1,
    };
  },

  mounted() {
    this.stepSurvey = 1;
  },
  methods: {
    ...mapActions({
      updataSurvey: "updataSurvey",
    }),
    toggleVote(tab: number) {
      this.voteTab = tab;
      this.resetStep();
    },
    resetStep() {
      this.stepSurvey = 1;
      this.updataSurvey({});
    },
    setStepSurvey(direction: string) {
      const cookieVoted: string = this.$cookies.get("isVoted");
      if (cookieVoted === "false" || !cookieVoted) {
        this.showCookieWarning = true;
        setTimeout(() => {
          this.showCookieWarning = false;
        }, 2000);
      } else {
        if (direction === "next") this.stepSurvey++;
        if (direction === "prev") this.stepSurvey--;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.lottie-img {
  width: 300px;
  height: 300px;
}

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
