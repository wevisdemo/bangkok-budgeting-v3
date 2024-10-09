<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream pb-10">
      <Landing />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "~/components/landing/Landing.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    Landing,
  },
});
</script>
