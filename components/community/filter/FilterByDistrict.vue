<template>
  <div v-if="districtData" class="relative">
    <div
      class="flex absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 space-x-2 mr-5"
    >
      <button v-if="!isOpen" @click="handleDialog">
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
      <button v-if="isOpen" @click="handleDialog">
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
      ref="district"
      class="w-full relative filterSelect"
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
          :placeholder="`ค้นหาจาก ${districtData?.length} เขต`"
        />
        <div
          class="overflow-auto max-w-[500px] max-h-[250px]"
          id="listDistrict"
        >
          <button @click="handleSelectedData('clear')">ทุกชุมชน</button>
          <div v-for="(item, index) in searchBy" :key="index">
            <button @click="handleSelectedData(item)">{{ item }}</button>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:district class="filterBtn wv-b6"
      ><span v-if="filterData.district">{{ filterData.district }}</span
      ><span v-else>ทุกเขต ({{ districtData?.length }} เขต)</span>
    </el-button>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  props: ["filterData", "districtData", "handleFilterData"],
  data() {
    return {
      inputData: "",
      searchBy: [],
      isOpen: false,
    };
  },

  methods: {
    handleDialog() {
      this.isOpen = !this.isOpen;
    },
    handleSelectedData(district) {
      if (district === "clear") {
        this.handleFilterData({ district: "", community: "" });
        d3.selectAll(".pathBKK").each(function (d) {
          d3.select(this)
            .style("opacity", () => "100%")
            .style("stroke", () => "#828282");
        });
        this.inputData = "";
      } else {
        this.inputData = district;
        this.handleFilterData({ district, community: "" });
      }
      this.isOpen = false;
    },
  },
  mounted() {
    this.handleSelectedData(this.filterData.district);
  },
  watch: {
    filterData: {
      handler(newValue) {
        this.inputData = newValue.district;
      },
    },
    isOpen: {
      handler(newValue) {
        if (newValue === false) {
          this.searchBy = this.districtData;
          if (this.searchBy.length === 0) this.handleSelectedData("clear");
        }
        this.inputData = "";
      },
    },
    inputData: {
      handler(newValue) {
        if (newValue) {
          this.searchBy = this.districtData?.filter((s) =>
            s.toString().includes(newValue)
          );
        } else {
          this.searchBy = this.districtData;
        }
      },
    },
    districtData: {
      immediate: true,
      deep: true,
      handler() {
        this.searchBy = this.districtData;
      },
    },
  },
};
</script>
