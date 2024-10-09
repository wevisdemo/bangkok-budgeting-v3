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
    return state.commuRows;
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
