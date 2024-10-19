<template>
  <div
    id="byYears"
    class="mx-auto lg:w-full flex min-h-screen flex-col lg:flex-row justify-center relative"
  >
    <div class="fixed w-full bottom-0">
      <div
        id="scrollTopTop"
        @click="scrollToTop"
        class="absolute flex items-center cursor-pointer bottom-0 left-[50%] translate-x-[-50%] bg-white text-wv-gray-1 py-[8px] px-[12px] z-30 rounded-[5px]"
      >
        <img src="~/assets/images/scrollTop.svg" class="mr-2" />
        กลับไปด้านบน
      </div>
    </div>
    <ModalProject
      v-if="isProjectDialog"
      :handleProject="handleProjectDialog"
      :project="selectedProject"
    />
    <div class="flex-1 pt-5 relative h-fit">
      <BkkMap class="my-5 mx-auto w-full md:w-fit" />
      <div
        :style="{
          opacity: filterData.district ? '100%' : '0%',
        }"
        id="tooltip"
        class="absolute text-center w-[75px] md:w-auto wv-b7 top-0 left-0 bg-white card py-[3px] px-[8px] rounded-[5px]"
      >
        <p>เขต{{ filterData.district }}</p>

        <p class="opacity-50" v-if="filterData.community">
          {{ filterData.community }}
        </p>
        <p v-else class="opacity-50">({{ originData.length }} ชุมชน)</p>
        <p class="font-bold">{{ convertMillion(maxFilterData()) }} บาท</p>
      </div>
    </div>
    <div
      class="lg:max-w-[685px] flex-1 flex flex-col justify-between card p-[15px] md:p-[30px]"
    >
      <!-- ------------ -->
      <div id="filter" class="flex space-y-1 flex-col">
        <FilterByYear
          :yearData="yearData"
          :handleFilterData="handleFilterYear"
          :filterData="filterData"
        />
        <FilterByDistrict
          :filterData="filterData"
          :districtData="districtData"
          :handleFilterData="handleFilterData"
        />
        <FilterByComnunity
          :filterData="filterData"
          :commuData="originData"
          :handleFilterData="handleFilterData"
        />
        <!-- ------------- -->
      </div>
      <div class="my-3 flex">
        <div class="fle-1">
          <p class="wv-b3 font-bold">
            พบ {{ originData.length.toLocaleString("en-US", {}) }} รายการ
          </p>
          <p class="wv-b5">
            ใช้งบรวม <b>{{ convertMillion(maxFilterData()) }} ล้านบาท</b>
          </p>
          <p class="wv-b6 opacity-50">
            ({{ ((maxFilterData() / maxCommu()) * 100).toFixed(0) }} %
            ของงบทั้งหมด)
          </p>
        </div>
        <div class="flex-1 flex justify-end">
          <button class="wv-b7 opacity-50 underline">ดาวน์โหลดข้อมูล</button>
        </div>
      </div>
      <div class="flex justify-between mt-5">
        <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
        <div
          class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer mb-4"
        >
          <p class="">เรียงตาม</p>
          <el-select
            v-model="selectedFilter"
            placeholder="Select"
            class="sortInput"
            size="mini"
          >
            <el-option
              v-for="(item, key) in filterList"
              :key="key"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div
        v-for="(item, key) in originData"
        :key="key"
        :id="`card-${key + 1}`"
        class="borderCard my-[5px] flex hover:border-black hover:border-[2px] border-[2px] border-transparent cursor-pointer"
        @click="() => handleProjectDialog(item)"
      >
        <div class="wv-h8 text-gray-300">
          {{ key + 1 }}
        </div>
        <div class="ml-5 flex flex-col flex-1">
          <div class="flex justify-between">
            <div class="max-w-[200px]">
              <p class="wv-b4 font-bold">{{ item.project_name }}</p>
              <p class="wv-b6 opacity-50">
                <span>เขต {{ item.district }}</span
                ><span>ชุมชน {{ item.community }}</span>
              </p>
            </div>
            <div class="flex text-end">
              <div v-if="isMillion">
                <span class="wv-b6 font-bold">
                  {{ item.amount.toLocaleString("en-US", {}) }}<br />
                </span>
                <span class="wv-b6">บาท</span>
              </div>
              <div v-else class="wv-b6 font-bold">
                {{ ((item.amount / maxValue) * 100).toFixed(2) }} %
              </div>
              <div class="ml-2 mt-[3px]">
                <img src="~/assets/images/list-button.svg" />
              </div>
            </div>
          </div>

          <div class="h-[10px] w-full bg-wv-gray-4 flex mt-2">
            <div
              class="h-[10px] bg-wv-yellow-70"
              :style="{ width: drawChart(item) }"
            ></div>
          </div>
        </div>
      </div>
      <div
        @click="scrollToTop"
        class="flex items-center my-5 cursor-pointer bottom-0 bg-white text-wv-gray-1 py-[8px] px-[12px] rounded-[5px]"
        id="scrollTopBottom"
      >
        <img src="~/assets/images/scrollTop.svg" class="mr-2" />
        กลับไปด้านบน
      </div>
      <ShareLabel />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import ToggleUnit from "~/components/budget/charts/ToggleUnit.vue";
import DropDownYearList from "~/components/budget/charts/DropDownYearList.vue";
import ShareLabel from "../../budget/ShareLabel.vue";
import FilterByYear from "../filter/FilterByYear.vue";
import FilterByDistrict from "../filter/FilterByDistrict.vue";
import FilterByComnunity from "../filter/FilterByComnunity.vue";
import ModalProject from "./ModalProject.vue";
import { convertMillion, orderByStrategy } from "~/components/budget/utils";
import BkkMap from "../BkkMap.vue";
import { mapingColorDistrict, mapingDistrict } from "../filter/MapingDistrict";
import * as d3 from "d3";

export default {
  components: {
    ModalProject,
    ToggleUnit,
    DropDownYearList,
    ShareLabel,
    FilterByYear,
    FilterByDistrict,
    FilterByComnunity,
    BkkMap,
  },
  data() {
    return {
      originData: [],
      maxValue: 200000,
      isMillion: true,
      isProjectDialog: false,
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      filterData: {
        year: "",
        district: "",
        community: "",
      },
      yearData: [],
      commuData: [],
      districtData: [],
      selectedProject: {},
      commuData: [],
      yearGroup: [],
    };
  },
  methods: {
    orderByStrategy,
    convertMillion,
    maxFilterData() {
      return _.sumBy(this.originData, "amount");
    },
    maxCommu() {
      return _.sumBy(this.commuData, "amount");
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    handleFilterYear(year) {
      this.origin = this.yearGroup[year];
      this.filterData = { year };
      this.mapColorMapping();
    },

    handleFilterData({ district, community }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
      };
      this.originData = this.formatData();
      this.commuData = this.formatData();
      if (district && community) {
        this.originData = this.originData.filter(
          (o) => o.community === community && o.district === district
        );
      } else if (district) {
        this.originData = this.originData.filter(
          (o) => o.district === district
        );
      } else if (community) {
        this.originData = this.originData.filter(
          (o) => o.community === community
        );
      }

      d3.selectAll(".pathBKK").each(function (d) {
        const districtId = mapingDistrict(d3.select(this).attr("id"));
        d3.select(this)
          .style("opacity", () => {
            if (!district) return "100%";
            return district !== districtId ? "20%" : "100%";
          })
          .style("stroke", () => (district !== districtId ? "" : "black"));
      });
    },
    selectFilter(label) {
      if (label === "งบมากไปน้อย") {
        return (this.originData = orderByStrategy(
          this.originData,
          "amount",
          "desc"
        ));
      }
      if (label === "งบน้อยไปมาก") {
        return (this.originData = orderByStrategy(
          this.originData,
          "amount",
          "asc"
        ));
      }
      if (label === "ตัวอักษร") {
        return (this.originData = orderByStrategy(
          this.originData,
          "project_name",
          "asc"
        ));
      }
    },
    drawChart(item) {
      const divide = this.maxValue;
      return `${(item.amount / divide) * 100}%`;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    handleProjectDialog(project) {
      this.isProjectDialog = !this.isProjectDialog;
      this.selectedProject = project;
    },
    setToolTip(elem) {
      const bkkDistrictsSquare = document.querySelector(".bkkDistrictsSquare");
      const originWidth =
        d3.select(".bkkDistrictsSquare").node().getBoundingClientRect().width /
        1.5;

      const x =
        elem.getBoundingClientRect().x -
        bkkDistrictsSquare.getBoundingClientRect().x;
      const calX = x > originWidth ? x - 50 : x;
      const y =
        elem.getBoundingClientRect().y -
        bkkDistrictsSquare.getBoundingClientRect().y;
      d3.select("#tooltip").style(
        "transform",
        "translate(" + calX + "px" + "," + y + "px" + ")"
      );
    },

    mapColorMapping() {
      const groupDistrict = _.chain(this.originData)
        .groupBy("district")
        .mapValues((s) => _.sumBy(s, "amount"))
        .value();

      const selectedDistrict = (district, elem) => {
        this.handleFilterData({ district });
        this.setToolTip(elem);
      };

      d3.selectAll(".pathBKK").each(function (_, key) {
        const district = mapingDistrict(key);
        d3.select(this)
          .attr("fill", mapingColorDistrict(groupDistrict[district]))
          .style("cursor", groupDistrict[district] && "pointer");
        d3.select(this).on(
          "click",
          () => groupDistrict[district] && selectedDistrict(district, this)
        );
      });
    },

    handleScroll() {
      const elem = document.querySelector("#topic-pointer");
      if (elem) {
        const pointerTop = elem.getBoundingClientRect().top;
        const bottombutton = document.querySelector("#scrollTopBottom");
        if (
          bottombutton.getBoundingClientRect().top > window.innerHeight &&
          pointerTop < 0
        ) {
          document.querySelector("#scrollTopTop").style.opacity = "1";
          document.querySelector("#scrollTopBottom").style.opacity = "0";
        } else {
          document.querySelector("#scrollTopTop").style.opacity = "0";
          document.querySelector("#scrollTopBottom").style.opacity = "1";
        }
      }
    },
    formatData() {
      return orderByStrategy(
        Object.values(this.yearGroup)[0],
        "amount",
        "desc"
      );
    },
  },
  mounted() {
    mapingColorDistrict,
      mapingDistrict,
      (document.querySelector("#scrollTopTop").style.opacity = "0");
    document.querySelector("#scrollTopBottom").style.opacity = "0";
    this.commuData = this.$store.getters["data/getCommunity"]();
    this.yearGroup = _.groupBy(this.commuData, "budget_year");
    this.originData = this.formatData();
    this.yearData = Object.keys(this.yearGroup);
    this.commuData = Object.values(this.yearGroup)[0];
    this.districtData = _.uniqBy(
      Object.values(this.yearGroup)[0]?.map((d) => d.district)
    );
    this.filterData = { year: this.yearData[0] };
    this.mapColorMapping();
  },
  watch: {
    selectedFilter: {
      handler(newValue) {
        this.selectFilter(newValue);
      },
    },
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.borderCard {
  background: #ffffff;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
.el-button:focus,
.el-button:hover {
  color: unset;
  border-color: unset;
  background-color: unset;
}
.card {
  box-shadow: 0px 0px 45px 0px #0000001a;
}
</style>
