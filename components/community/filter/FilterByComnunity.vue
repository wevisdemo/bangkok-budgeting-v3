<template>
  <div v-if="originData">
    <el-popover
      ref="commu"
      class="w-full filterSelect"
      acement="bottom"
      trigger="click"
      v-model="isOpen"
    >
      <div class="relative md:w-[500px]">
        <img
          src="~/assets/images/searchIcon.svg"
          class="absolute top-0 left-0 ml-2"
        />
        <input
          v-model="inputData"
          type="text"
          class="border-b border-b-black w-full wv-b5 mb-3 pl-8"
          :placeholder="`ค้นหาจาก ${searchBy.length} ชุมชน`"
        />
        <button @click="handleSelectedData('clear')">ทุกชุมชน</button>
        <div class="overflow-auto max-h-[250px]" id="listCommu">
          <div v-for="(item, index) in searchBy" :key="index">
            <button @click="handleSelectedData(item.community)">
              {{ item.community }}
            </button>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:commu class="filterBtn wv-b6"
      ><span v-if="filterData.community">{{ filterData.community }}</span
      ><span v-else>ทุกชุมชน ({{ searchBy.length }} ชุมชน)</span>
    </el-button>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["filterData", "originData", "handleFilterData"],
  data() {
    return {
      inputData: "",
      searchBy: [],
      isOpen: false,
      filterDistrict: [],
    };
  },

  methods: {
    handleFormat(key) {
      return _.uniqBy(
        this.originData.filter((d) => d.community.toString().includes(key)),
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
        this.filterDistrict = this.originData.filter(
          (d) => d.district === this.filterData.district
        );
        this.searchBy = _.uniqBy(this.filterDistrict, "community");
      } else if (commu) {
        this.handleFilterData({
          ...this.filterData,
          district: this.originData.filter((y) => y.community === commu)[0]
            .district,
          community: commu,
        });
      }
      this.isOpen = false;
    },
  },
  mounted() {
    this.searchBy = _.uniqBy(this.originData, "community");
  },
  watch: {
    filterData: {
      immediate: true,
      deep: false,
      handler(newValue) {
        this.inputData = newValue.community;
        this.searchBy = _.uniqBy(this.originData, "community");
        if (newValue.district) {
          this.filterDistrict = this.originData.filter(
            (d) => d.district === newValue.district
          );
          this.searchBy = _.uniqBy(this.filterDistrict, "community");
        }
      },
    },
  },
};
</script>
<style lang=""></style>
