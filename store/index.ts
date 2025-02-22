import { GetterTree, ActionTree, MutationTree } from "vuex";

interface SelectedVoteDropdownProps {
  district_name?: string;
  project_type?: string;
  project_id?: string;
}
export interface SueveyData {
  userId?: string;
  policy?: string;
  sub_policy?: string;
  district: string;
  idea?: string;
}

export interface State {
  chartData: any;
  organizeData: any;
  currentImage: number | null;
  strategyChoice: string;
  chartSelected: string;
  isCookieSet: boolean;
  selectedVoteDropdown: SelectedVoteDropdownProps;
  isModalDetails: any;
  subTitleModal: string;
  selectYearOrganize: object;
  selectYearStrategy: object;
  selectKeywordStrategy: object;
  selectedSurvey?: SueveyData;
}

export const state = (): State => ({
  chartData: [],
  organizeData: [],
  currentImage: null,
  strategyChoice: "",
  chartSelected: "",
  isCookieSet: false,
  isModalDetails: [],
  subTitleModal: "ตามแผนงานพัฒนา 9 ด้าน(ดี)",
  selectedVoteDropdown: {
    district_name: "",
    project_type: "",
    project_id: "",
  },
  selectYearOrganize: { label: "ทุกปี", value: "" },
  selectYearStrategy: { label: "ทุกปี", value: "" },
  selectKeywordStrategy: { label: "ทุกปี", value: "" },
  selectedSurvey: {
    district: "กรุณาเลือกเขต",
  },
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentImage: (state) => state.currentImage,
};

export const mutations: MutationTree<RootState> = {
  setSurvey: (state, payload) => (state.selectedSurvey = payload),
  setCookieState: (state, payload) => (state.isCookieSet = payload),
  setCurrentImage: (state, newImage: number) => (state.currentImage = newImage),
  setSelectedVoteDropdown: (state, vote: SelectedVoteDropdownProps) =>
    (state.selectedVoteDropdown = vote),
  setStrategyChoice: (state, newStrategy: string) =>
    (state.strategyChoice = newStrategy),
  setChartSelected: (state, chartSelected: string) =>
    (state.chartSelected = chartSelected),
  setChartData: (state, chartData) => (state.chartData = chartData),
  setOrganizeData: (state, organizeData) => (state.organizeData = organizeData),
  setIsModalDetails: (state, isModalDetails) =>
    (state.isModalDetails = isModalDetails),
  setSubTitleModal: (state, subTitleModal) =>
    (state.subTitleModal = subTitleModal),
  setSelectYearOrganize: (state, selectYearOrganize) =>
    (state.selectYearOrganize = selectYearOrganize),
  setSelectYearStrategy: (state, selectYearStrategy) =>
    (state.selectYearStrategy = selectYearStrategy),
  setSelectKeywordStrategy: (state, selectKeywordStrategy) =>
    (state.selectKeywordStrategy = selectKeywordStrategy),
};

export const actions: ActionTree<RootState, RootState> = {
  updataSurvey({ commit }, payload) {
    commit("setSurvey", payload);
  },
  updateStrategy({ commit, state }, payload) {
    state.strategyChoice === payload
      ? commit("setStrategyChoice", "")
      : commit("setStrategyChoice", payload);
  },
  updateChartSelected({ commit }, payload) {
    commit("setChartSelected", payload);
  },
  updateChartData({ commit }, payload) {
    commit("setChartData", payload);
  },
  updateIsModalDetails({ commit }, payload) {
    commit("setIsModalDetails", payload);
  },
  updateSubTitleModal({ commit }, payload) {
    commit("setSubTitleModal", payload);
  },
  updateOrganizeData({ commit }, payload) {
    commit("setOrganizeData", payload);
  },
  updateSelectYearOrganize({ commit }, payload) {
    commit("setSelectYearOrganize", payload);
  },
  updateSelectYearStrategy({ commit }, payload) {
    commit("setSelectYearStrategy", payload);
  },
  updateSelectKeywordStrategy({ commit }, payload) {
    commit("setSelectKeywordStrategy", payload);
  },

  async nuxtServerInit({ dispatch }) {
    await dispatch("data/nuxtServerInit", null, { root: true });
  },
};
