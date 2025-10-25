<template>
  <div v-if="originData" class="relative">
    <div
      class="flex absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 space-x-2 mr-5"
    >
      <button v-if="!isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="w-[20px] h-[20px]"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
      </button>
      <button v-if="isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="w-[20px] h-[20px] cursor-pointer z-20"
        >
          <path
            fill="currentColor"
            d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
          ></path>
        </svg>
      </button>
    </div>
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
          :placeholder="`ค้นหาจาก ${searchBy?.length} ชุมชน`"
        />

        <div class="overflow-auto max-h-[250px]" id="listCommu">
          <button @click="handleSelectedData('clear')">ทุกชุมชน</button>
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
      ><span v-else
        >ทุกชุมชน ({{ searchBy?.length.toLocaleString() }} ชุมชน)</span
      >
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
      deep: true,
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
    isOpen: {
      handler(newValue) {
        if (newValue === false) {
          this.searchBy = _.uniqBy(this.filterDistrict, "community");
          if (this.searchBy.length === 0) this.handleSelectedData("clear");
        }
        this.inputData = "";
      },
    },
    inputData: {
      handler(newValue) {
        if (newValue) {
          this.searchBy = _.uniqBy(this.filterDistrict, "community")?.filter(
            (s) => s.community.toString().includes(newValue)
          );
        } else {
          if (this.filterData.district) {
            this.filterDistrict = this.originData.filter(
              (d) => d.district === this.filterData.district
            );
            this.searchBy = _.uniqBy(this.filterDistrict, "community");
          } else {
            this.searchBy = _.uniqBy(this.originData, "community");
          }
        }
      },
    },
  },
};
</script>
<style lang=""></style>
