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

    <div class="pt-5 relative h-fit lg:w-[480px]" id="topic-pointer">
      <div
        id="filter"
        class="flex space-y-1 flex-col lg:hidden"
        v-if="originData.length"
      >
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
          :originData="originData"
          :handleFilterData="handleFilterData"
        />
        <FilterByObjective
          :filterData="filterData"
          :originData="originData"
          :handleFilterData="handleObjectiveChange"
          :commuData="commuData"
        />
      </div>
      <div class="relative">
        <img
          src="~/assets/images/clickHere.svg"
          class="absolute top-[10%] left-0-0 m-5"
        />
        <div
          class="absolute wv-b7 bottom-0 right-0 m-5 flex flex-row space-x-1"
        >
          <p>1 โครงการ</p>
          <img src="~/assets/images/heatMap.svg" class="w-[80px]" />
          <p>{{ originData.length.toLocaleString() }} โครงการ</p>
        </div>

        <BkkMap class="my-5 mx-auto w-full md:w-fit" />
      </div>

      <div
        :style="{
          opacity: filterData.district ? '100%' : '0%',
        }"
        id="tooltip"
        class="absolute text-center w-[75px] md:w-auto wv-b7 top-0 left-0 bg-white card py-[3px] px-[8px] rounded-[5px] pointer-events-none"
      >
        <p>เขต{{ filterData.district }}</p>

        <p class="opacity-50" v-if="filterData.community">
          {{ filterData.community }}
        </p>
        <p v-else class="opacity-50">({{ commuData.length }} โครงการ)</p>
        <!-- <p class="font-bold">{{ convertMillion(maxFilterData()) }} บาท</p> -->
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="max-w-[685px] card mx-auto w-full p-[15px] md:p-[30px]">
        <!-- ------------ -->
        <div
          id="filter"
          class="hidden lg:flex space-y-1 flex-col relative"
          v-if="originData.length"
        >
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
            :originData="originData"
            :handleFilterData="handleFilterData"
          />
          <FilterByObjective
            :filterData="filterData"
            :originData="originData"
            :handleFilterData="handleObjectiveChange"
            :commuData="objectiveFilter"
          />
          <!-- ------------- -->
        </div>
        <div class="my-3 flex">
          <div class="fle-1">
            <p class="wv-b3 font-bold">
              พบ {{ commuData.length.toLocaleString("en-US", {}) }} โครงการ
            </p>
            <!-- <p class="wv-b5">
              ใช้งบรวม <b>{{ convertMillion(maxFilterData()) }} ล้านบาท</b>
            </p>
            <p class="wv-b6 opacity-50">
              ({{ ((maxFilterData() / maxCommu()) * 100).toFixed(0) }} %
              ของงบทั้งหมด) -->
            <!-- </p> -->
          </div>
          <div class="flex-1 flex justify-end">
            <a
              v-if="filterData.community"
              class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
              :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20A%20like%20'%25${filterData.year}%25')and%20B%20%3D%20'${filterData.district}'%20and%20C%20%3D%20'${filterData.community}'`"
              target="_blank"
            >
              <img
                src="~/assets/images/download.svg"
                class="w-3 h-3 mr-2"
              />ดาวน์โหลดข้อมูล</a
            >
            <a
              v-else-if="!filterData.community && filterData.district"
              class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
              :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20A%20like%20'%25${filterData.year}%25')and%20B%20%3D%20'${filterData.district}'`"
              target="_blank"
            >
              <img
                src="~/assets/images/download.svg"
                class="w-3 h-3 mr-2"
              />ดาวน์โหลดข้อมูล</a
            >
            <a
              v-else
              class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
              :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20A%20like%20'%25${filterData.year}%25')`"
              target="_blank"
            >
              <img
                src="~/assets/images/download.svg"
                class="w-3 h-3 mr-2"
              />ดาวน์โหลดข้อมูล</a
            >
          </div>
        </div>
        <!-- <div class="flex justify-between mt-5">
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
        </div> -->

        <div
          v-for="(item, key) in commuData.slice(0, this.sliceDivide)"
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
                <!-- <div v-if="isMillion">
                  <span class="wv-b6 font-bold">
                    {{ item.amount.toLocaleString("en-US", {}) }}<br />
                  </span>
                  <span class="wv-b6">บาท</span>
                </div>
                <div v-else class="wv-b6 font-bold">
                  {{ ((item.amount / maxValue) * 100).toFixed(2) }} %
                </div> -->
                <div class="ml-2 mt-[3px]">
                  <img src="~/assets/images/list-button.svg" />
                </div>
              </div>
            </div>

            <!-- <div class="h-[10px] w-full bg-wv-gray-4 flex mt-2">
              <div
                class="h-[10px] bg-wv-yellow-70"
                :style="{ width: drawChart(item) }"
              ></div>
            </div> -->
          </div>
        </div>
        <div
          class="flex mt-3 cursor-pointer items-center justify-center wv-b5 opacity-50"
          @click="seeMore"
          v-if="
            commuData.length - commuData.slice(0, this.sliceDivide).length > 0
          "
        >
          <p class="mr-1">
            ดูอีก
            {{ commuData.length - commuData.slice(0, this.sliceDivide).length }}
            รายการที่เหลือ
          </p>
          <p class="wv-b3">+</p>
        </div>
        <div
          @click="scrollToTop"
          class="flex items-center my-5 cursor-pointer bottom-0 bg-white text-wv-gray-1 py-[8px] px-[12px] rounded-[5px]"
          id="scrollTopBottom"
        >
          <img src="~/assets/images/scrollTop.svg" class="mr-2" />
          กลับไปด้านบน
        </div>
      </div>
      <ShareLabel />
    </div>
    <ModalProject
      v-if="isProjectDialog"
      :handleProject="handleProjectDialog"
      :project="selectedProject"
    />
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
import FilterByObjective from "../filter/FilterByObjective.vue";
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
    FilterByObjective,
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
        objectives: [],
      },
      yearData: [],
      commuData: [],
      districtData: [],
      selectedProject: {},
      yearGroup: [],
      prevDistrictClick: "",
      sliceDivide: 10,
      objectiveFilter: [],
    };
  },
  methods: {
    mapingColorDistrict,
    mapingDistrict,
    orderByStrategy,
    convertMillion,
    maxFilterData() {
      return _.sumBy(this.commuData, "amount");
    },
    maxCommu() {
      return _.sumBy(this.originData, "amount");
    },
    seeMore() {
      this.sliceDivide = this.sliceDivide + 10;
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    handleFilterYear(year) {
      this.originData = this.formatData(this.yearGroup[year]);
      this.commuData = this.originData;
      this.districtData = _.uniqBy(this.commuData?.map((d) => d.district));
      this.filterData = { year };
      this.mapColorMapping(this.commuData, true);
    },
    handleObjectiveChange({ district, community, objectives }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
        objectives,
      };

      if (community && district) {
        this.commuData = this.originData.filter(
          (o) => o.district === district && o.community === community
        );
        this.objectiveFilter = this.commuData;
      } else if (district) {
        this.commuData = this.originData.filter((o) => o.district === district);
        this.objectiveFilter = this.commuData;
      }
      if (objectives && objectives.length > 0) {
        this.commuData = this.commuData.filter((o) =>
          objectives.includes(o.project_objective)
        );
      }
      this.commuData = this.formatData(this.commuData);
    },

    handleFilterData({ district, community, objectives }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
        objectives,
      };

      if (community && district) {
        this.commuData = this.originData.filter(
          (o) => o.district === district && o.community === community
        );
        this.objectiveFilter = this.commuData;
      } else if (district) {
        this.commuData = this.originData.filter((o) => o.district === district);
        this.objectiveFilter = this.commuData;
      }

      d3.selectAll(".pathBKK").each(function (d) {
        const districtId = mapingDistrict(this.id);
        if (district) {
          d3.select(this)
            .style("opacity", () => {
              if (district === districtId) return "100%";
              return "20%";
            })
            .style("stroke", () => {
              if (district === districtId) return "black";
              return "#828282";
            });
        }
        if (districtId == district) {
          const isMobile = window.innerWidth <= 768;
          const bkkDistrictsSquare = document.querySelector(
            ".bkkDistrictsSquare"
          );
          const tooltipElement = document.querySelector("#tooltip");
          const elemRect = this.getBoundingClientRect();
          const squareRect = bkkDistrictsSquare.getBoundingClientRect();
          const tooltipRect = tooltipElement.getBoundingClientRect();
          let x =
            elemRect.x -
            squareRect.x -
            tooltipRect.width / 2 +
            elemRect.width / 2;
          let y =
            elemRect.y -
            squareRect.y -
            tooltipRect.height +
            (isMobile && squareRect.height - 60);

          const maxX = squareRect.width - tooltipRect.width;
          x = Math.max(0, Math.min(x, maxX));
          if (isMobile) {
            y = Math.max(0, y);
          }

          // Make tooltip visible and set position
          tooltipElement.style.opacity = "1";

          d3.select("#tooltip")
            .style("transform", `translate(${x}px, ${y}px)`)
            .style("visibility", "visible")
            .style("pointer-events", "none");
        }
      });
      this.mapColorMapping(this.origin);
    },
    // selectFilter(label) {
    //   if (label === "งบมากไปน้อย") {
    //     return (this.commuData = orderByStrategy(
    //       this.commuData,
    //       "amount",
    //       "desc"
    //     ));
    //   }
    //   if (label === "งบน้อยไปมาก") {
    //     return (this.commuData = orderByStrategy(
    //       this.commuData,
    //       "amount",
    //       "asc"
    //     ));
    //   }
    //   if (label === "ตัวอักษร") {
    //     return (this.commuData = orderByStrategy(
    //       this.commuData,
    //       "project_name",
    //       "asc"
    //     ));
    //   }
    // },
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
      const isMobile = window.innerWidth <= 768;
      const bkkDistrictsSquare = document.querySelector(".bkkDistrictsSquare");
      const tooltipElement = document.querySelector("#tooltip");

      const elemRect = elem.getBoundingClientRect();
      const squareRect = bkkDistrictsSquare.getBoundingClientRect();
      const tooltipRect = tooltipElement.getBoundingClientRect();

      let x =
        elemRect.x - squareRect.x - tooltipRect.width / 2 + elemRect.width / 2;
      let y =
        elemRect.y -
        squareRect.y -
        tooltipRect.height +
        (isMobile && squareRect.height - 60);

      const maxX = squareRect.width - tooltipRect.width;
      x = Math.max(0, Math.min(x, maxX));
      if (isMobile) {
        y = Math.max(0, y);
      }

      tooltipElement.style.opacity = "1";

      d3.select("#tooltip")
        .style("transform", `translate(${x}px, ${y}px)`)
        .style("visibility", "visible")
        .style("pointer-events", "none");
    },

    disableCheckBox() {
      this.$nextTick(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
          checkbox.checked = index === 0;
        });
      });
    },

    mapColorMapping(originData, deselect) {
      if (!originData) {
        console.warn("originData is undefined");
        return;
      }
      const groupDistrict = _.chain(originData)
        .groupBy("district")
        .mapValues((s) => s.length)
        .value();

      const deselectFunc = () => {
        this.handleFilterData({
          district: "",
          community: "",
          objectives: [],
        });
        this.commuData = this.originData;
        this.objectiveFilter = this.commuData;
        d3.selectAll(".pathBKK").each(function (d) {
          d3.select(this)
            .style("opacity", () => "100%")
            .style("stroke", () => "#828282");
        });
        this.prevDistrictClick = "";
      };

      if (deselect) {
        deselectFunc();
      }
      const selectedDistrict = (district, elem) => {
        this.disableCheckBox();
        if (
          !groupDistrict[district] ||
          this.prevDistrictClick == district ||
          deselect
        ) {
          deselectFunc();
        } else {
          this.prevDistrictClick = district;
          this.handleFilterData({ district });
        }

        this.setToolTip(elem);
      };

      d3.selectAll(".pathBKK").each(function (_) {
        const district = mapingDistrict(this.id);
        const commuDataLength = originData ? originData.length : 0;
        d3.select(this)
          .attr(
            "fill",
            mapingColorDistrict(groupDistrict[district], commuDataLength)
          )
          .style("cursor", "pointer");

        d3.select(this).on("click", () => selectedDistrict(district, this));
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
    formatData(data) {
      return orderByStrategy(data, "amount", "desc");
    },
  },
  mounted() {
    document.querySelector("#scrollTopTop").style.opacity = "0";
    document.querySelector("#scrollTopBottom").style.opacity = "0";
    this.commuData = this.$store.getters["data/getCommunity"]();
    this.yearGroup = _.groupBy(this.commuData, "budget_year");
    this.originData = this.formatData(Object.values(this.yearGroup)[0]);
    this.yearData = Object.keys(this.yearGroup);
    this.commuData = Object.values(this.yearGroup)[0];
    this.districtData = _.uniqBy(
      Object.values(this.yearGroup)[0]?.map((d) => d.district)
    );
    this.objectiveFilter = this.commuData;
    this.filterData = {
      year: this.yearData[0],
      district: this.$route.query.district,
      community: this.$route.query.community,
    };
    this.handleFilterData({
      district: this.filterData.district,
      community: this.filterData.community,
    });
    this.mapColorMapping(this.originData);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // watch: {
  //   selectedFilter: {
  //     handler(newValue) {
  //       console.log(newValue, "newValue");
  //     },
  //   },
  // },
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
#tooltip {
  position: absolute;
  z-index: 100;

  @media (max-width: 768px) {
    max-width: calc(100% - 20px);
    font-size: 12px;
    padding: 4px 6px;
  }
}
</style>
