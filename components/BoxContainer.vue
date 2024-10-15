<template>
  <div class="container m-auto py-6 sm:py-14 flex">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BoxContainer",
});
</script>
