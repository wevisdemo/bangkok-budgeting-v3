import { GetterTree, ActionTree, MutationTree } from "vuex";
import {
  BudgetRow,
  CommunityRow,
  fetchCommunitySheet,
  fetchDataSource,
} from "~/data/fetch-data-source";
import { Filters, getBudgetItems } from "~/data/get-budget-items";
import {
  getChartData,
  getChartDataGroupByOrganizations,
} from "~/data/get-chart-data";
import _ from "lodash";

/* This data store is a wrapper to Node.js-based data layer functions. */

export interface DataState {
  budgetRows?: BudgetRow[];
  commuRows?: CommunityRow[];
}

export const state = (): DataState => ({
  budgetRows: undefined,
  commuRows: undefined,
});

export type RootState = ReturnType<typeof state>;

type GroupedProject = {
  budget_year: number;
  district: string;
  community: string;
  project_name: string;
  project_objective: string;
  procurement_list: string[];
};

function formatData(data: CommunityRow[] | undefined) {
  const grouped: Record<string, GroupedProject> = {};

  data?.forEach((item) => {
    // สร้าง key สำหรับ group
    const key = `${item.budget_year}-${item.district}-${item.community}-${item.project_name}-${item.project_objective}`;

    // ถ้ายังไม่มี group นี้ ให้สร้างใหม่
    if (!grouped[key]) {
      grouped[key] = {
        budget_year: item.budget_year,
        district: item.district,
        community: item.community,
        project_name: item.project_name,
        project_objective: item.project_objective,
        procurement_list: [],
      };
    }

    // เพิ่มรายการ procurement_list เข้า array
    grouped[key].procurement_list.push(item.procurement_list);
  });

  // แปลงกลับเป็น array
  return Object.values(grouped);
}

export const getters: GetterTree<RootState, RootState> = {
  getBudgetItems: (state) => (filters?: Filters) => {
    return getBudgetItems(state.budgetRows!, filters);
  },

  getChartData: (state) => () => {
    return getChartData(state.budgetRows!);
  },

  getChartDataGroupByOrganizations: (state) => (year: number) => {
    return getChartDataGroupByOrganizations(state.budgetRows!, year);
  },

  getCommunity: (state) => () => {
    return formatData(state.commuRows);
  },
};

export const mutations: MutationTree<RootState> = {
  setBudgetRows: (state, payload) => (state.budgetRows = payload),
  setCommuRows: (state, payload) => (state.commuRows = payload),
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const budgetRows = await fetchDataSource();
    const commuRows = await fetchCommunitySheet();

    await commit("setBudgetRows", budgetRows);
    await commit("setCommuRows", commuRows);
  },
};
