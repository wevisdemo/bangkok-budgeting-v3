<template>
  <div class="w-full relative rounded border-2 border-white">
    <div
      class="flex flex-col z-20 h-full w-full relative py-2 px-2 border-[2px] rounded-[5px] border-wv-gray-20"
    >
      <div class="flex gap-1 items-center">
        <div class="flex-grow text-left max-w-[200px]">
          <p class="wv-b5 wv-bold">{{ strategyVote.sub_policy }}</p>
          <p class="wv-b6">({{ strategyVote.policy }})</p>
        </div>
        <p
          class="wv-b5 flex-1 text-end"
          v-if="strategyVote.count / totalVotes !== Infinity"
        >
          {{ ((strategyVote.count / totalVotes) * 100).toFixed() }}%
        </p>
        <p class="wv-b5 flex-1 text-end" v-else>0%</p>
      </div>
    </div>
    <div
      class="voteBar"
      :class="`top-0 left-0 z-10 absolute h-full ${
        strategyVote.progress === 100 ? `rounded` : `rounded-l`
      } ${bgColorSet(strategyVote.policy)}`"
      :style="`width: ${(strategyVote.count / totalVotes) * 100}%`"
    />
    <div class="top-0 left-0 right-0 z-0 absolute h-full" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { bgColorSet } from "~/components/budget/utils";
export default Vue.extend({
  name: "IdeaVote",
  props: {
    strategyVote: {
      type: Object,
      required: true,
    },
    totalVotes: {
      type: Number,
    },
  },

  methods: {
    bgColorSet,
  },
});
</script>

<style lang="scss">
.voteBar {
  transition: 0.3s;
}
</style>
