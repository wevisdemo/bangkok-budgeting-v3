<template>
  <div
    class="border relative border-wv-gray-3 w-[150px] px-[10px] py-[5px] rounded-[5px] flex items-center cursor-pointer"
    @click="handleSelectedYear"
  >
    <p class="font-bold">
      <slot></slot>
    </p>
    <div
      v-if="isOpenYearSelected"
      id="yearSelected"
      class="absolute top-[120%] bg-white w-[150px] z-20 left-0 border border-wv-gray-3 py-[5px]"
    >
      <div
        v-for="item in yearList"
        :key="item.id"
        class="hover:bg-wv-gray-3 cursor-pointer px-[10px]"
        @click="() => isSelectedYear(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleSelectedYear: {
      type: Function,
    },
    isOpenYearSelected: {
      type: Boolean,
    },
    isSelectedYear: {
      type: Function,
    },
  },
  data() {
    return {
      yearList: [
        { label: "ทุกปี", value: "" },
        { label: "2568", value: 68 },
        { label: "2569", value: 69 },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
