<template>
  <div>
    <slot></slot>
    <div v-if="isOpen" class="fixed inset-0 z-[50]">
      <div
        class="fixed inset-0 bg-wv-gray-4 bg-opacity-70 z-40"
        @click="handleModal"
      />
      <div
        class="lg:w-[850px] overflow-auto inset-0 lg:h-[600px] px-3 md:px-12 py-8 bg-white absolute z-50 lg:top-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:left-[50%]"
      >
        <ModalProject
          v-if="isProjectDialog"
          :handleProject="handleProjectDialog"
          :project="selectedProject"
        />
        <div class="fixed w-[25px] md:w-[50px] z-50 top-0 right-0 m-5">
          <img
            src="~/assets/images/cancel.svg"
            class="cursor-pointer"
            @click="handleModal"
          />
        </div>
        <div class="flex justify-between flex-col h-auto lg:h-full">
          <div class="mb-4">
            <!-- ------- header -->
            <div class="wv-b5 flex space-x-2 items-center justify-center">
              <p>ปีงบประมาณ</p>
              <el-select
                v-model="selectFilter"
                placeholder="Select"
                class="ml-2 w-[150px] wv-b4 font-bold"
              >
                <el-option
                  v-for="(item, index) in yearList"
                  :key="index"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <span>มี </span>
              <span class="font-bold">{{ filterYears?.total }}</span>
              <span class="hidden md:block"
                >รายการ ({{ sumAllBudget() }} ล้านบาท)</span
              >
            </div>
            <div class="md:hidden mx-auto text-center mt-3">
              รายการ ({{ sumAllBudget() }} ล้านบาท)
            </div>
            <p class="wv-b6 text-center my-2">
              ตามโครงการที่มีคีย์เวิร์ด <b>“ท่องเที่ยว”</b> <br />ในเขต
              <b>“ทุกเขต”</b> ชุมชน
              <b>“ทุกชุมชน”</b>
            </p>
            <div
              class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer"
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
            <!-- ------- header -->
            <div class="flex flex-col">
              <div
                v-for="(item, id) in paginate(currentPage)"
                :key="id"
                @click="() => handleProjectDialog(item)"
                class="flex justify-between hover:bg-wv-gray-4 border-b border-b-wv-gray-4 cursor-pointer py-[15px] flex-1"
              >
                <div class="max-w-[200px]">
                  <p class="wv-b4 font-bold">{{ item.project_name }}</p>
                  <p class="wv-b6 opacity-50">
                    <span><b>เขต</b> {{ item.district }} </span
                    ><span><b>ชุมชน</b> {{ item.community }}</span>
                  </p>
                </div>
                <div class="flex text-end">
                  <span class="wv-b6 font-bold">
                    {{ item.amount.toLocaleString("en-US", {}) }}<br />
                  </span>
                  <span class="wv-b6">บาท</span>
                  <div class="ml-2 mt-[3px]">
                    <img src="~/assets/images/list-button.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination
            class="mx-auto"
            :pager-count="perPage"
            layout="prev, pager, next"
            :total="filterYears?.total"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
import { convertMillion } from "../../budget/utils";
import { communityFilterBy } from "../../budget/charts/filterBy";
import DropDownYearList from "../../budget/charts/DropDownYearList.vue";
import ModalProject from "./ModalProject.vue";

export default {
  props: {
    handleModal: {
      type: Function,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    page: {
      type: String,
    },
    commuData: {
      type: Array,
    },
  },
  components: {
    DropDownYearList,
    ModalProject,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      filterYears: [],
      isProjectDialog: false,
      selectedProject: {},
      selectFilter: "",
      yearList: [],
    };
  },

  computed: {
    ...mapState([
      "isModalDetails",
      "selectYearOrganize",
      "selectYearStrategy",
      "selectKeywordStrategy",
    ]),
  },
  methods: {
    convertMillion,
    communityFilterBy,
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSelectYearOrganize: "updateSelectYearOrganize",
      updateSelectYearStrategy: "updateSelectYearStrategy",
      updateSelectKeywordStrategy: "updateSelectKeywordStrategy",
    }),
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleProjectDialog(project) {
      this.isProjectDialog = !this.isProjectDialog;
      this.selectedProject = project;
    },
    handleProject() {
      this.isProject = false;
    },
    fetchByYear(year) {
      const response = this.$store.getters["data/getBudgetItems"]({
        budgetYear: year,
      });
      this.updateIsModalDetails(response);
    },
    paginate(pageNumber) {
      return this.filterYears?.items?.slice(
        (pageNumber - 1) * this.perPage,
        pageNumber * this.perPage
      );
    },
    selectSort(label) {
      this.selectedFilter = label;
      const resultFilter = communityFilterBy(label, this.filterYears);
      this.filterYears = resultFilter;
    },
    isSelectedYear(year) {
      if (year === "ทุกปี") {
        this.filterYears = {
          items: this.commuData,
          total: this.commuData.length,
        };
      } else {
        const filterYear = this.commuData.filter((c) => c.budget_year == year);
        this.filterYears = { items: filterYear, total: filterYear.length };
      }
    },
    sumAllBudget() {
      return convertMillion(_.sumBy(this.filterYears.items, (a) => a.amount));
    },
  },
  watch: {
    isModalDetails(newValue) {
      this.filterYears = communityFilterBy(this.selectedFilter, newValue);
    },
    isOpen: {
      immediate: true,
      deep: false,
      handler(newValue) {
        if (newValue === false) {
          this.isProject = false;
        } else {
          const yearGroup = _.groupBy(this.commuData, "budget_year");
          const yearData = Object.keys(yearGroup);
          this.yearList = ["ทุกปี", ...yearData];
          this.selectFilter = this.yearList[0];
          this.filterYears = {
            items: this.commuData,
            total: this.commuData.length,
          };
        }
        this.isProjectDialog = false;
      },
    },
    selectFilter(newValue) {
      this.isSelectedYear(newValue);
    },
    selectedFilter(newValue) {
      this.selectSort(newValue);
    },
  },
};
</script>

<style lang="scss">
ul.el-pager {
  font-weight: 700;
  font-size: 14px;
  font-family: "IBM Plex Sans Thai";
  li {
    @apply rounded-[5px];
  }
  li.active {
    @apply bg-wv-gray-3 text-black;
  }
}
</style>
