<template>
  <div v-if="commuData">
    <el-popover
      ref="commu"
      class="w-full"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div class="relative">
        <img
          src="~/assets/images/searchIcon.svg"
          class="absolute top-0 left-0 ml-2"
        />
        <input
          v-model="inputData"
          type="text"
          class="border-b border-b-black w-full min-w-[90vw] wv-b5 mb-3 pl-8"
          :placeholder="`ค้นหาจาก ${searchBy.length} ชุมชน`"
        />
        <button @click="handleSelectedData('clear')">ทุกชุมชน</button>
        <div class="overflow-scroll max-h-[250px]" id="listCommu">
          <div v-for="(item, index) in searchBy" :key="index">
            <button @click="handleSelectedData(item.community)">
              {{ item.community }}
            </button>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:commu
      ><span v-if="filterData.community">{{ filterData.community }}</span
      ><span v-else>ทุกเขต ({{ searchBy.length }} ชุมชน)</span>
    </el-button>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["filterData", "commuData", "handleFilterData"],
  data() {
    return {
      inputData: "",
      searchBy: [],
      isOpen: false,
    };
  },

  methods: {
    handleFormat(key) {
      return _.uniqBy(
        this.commuData.filter((d) => d.community.toString().includes(key)),
        "community"
      );
    },

    handleSelectedData(commu) {
      if (commu === "clear") {
        this.handleFilterData({
          ...this.filterData,
          community: "",
        });
        this.inputData = "";
      } else if (commu) {
        this.inputData = commu;
        this.handleFilterData({
          ...this.filterData,
          district: this.commuData.filter((y) => y.community === commu)[0]
            .district,
          community: commu,
        });
        this.searchBy = this.handleFormat(commu);
      }
      this.isOpen = false;
    },
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.inputData = newValue.community;
      },
    },
    inputData: {
      handler(newValue) {
        this.searchBy = this.handleFormat(newValue);
      },
    },
    commuData: {
      immediate: true,
      deep: false,
      handler() {
        this.searchBy = _.uniqBy(this.commuData, "community");
      },
    },
  },
};
</script>
<style lang=""></style>
