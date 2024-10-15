import { parse as papaParse, ParseResult } from "papaparse";

export interface BudgetRow {
  budgetYear: number;
  planProjName: string;
  flag: string;
  os: string;
  outputProj: string;
  outputProjName: string;
  amount: number;
  outputNo: string;
  outputName: string;
  outputName1: string;
  purposeProj: string;
  subStrategy: string;
  strategy: string;
  planStrategy: string;
  side: string;
  integration: boolean;
  fundGrpName: string;
  county: string;
  nameOrganization: string;
}
export interface CommunityRow {
  budget_year: number;
  district: string;
  community: string;
  project_name: string;
  amount: string | number;
  procurement_list: string;
}

const BUDGET_SHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxZIXP5NcbvMFDxvSJJYmiYBzttiw1Lq4QmRnxinmo2egj49nGytUDgWJbMytBVmH14dCDmkUVy1DZ/pub?gid=1915709666&single=true&output=csv";

const COMMUNITY_SHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxZIXP5NcbvMFDxvSJJYmiYBzttiw1Lq4QmRnxinmo2egj49nGytUDgWJbMytBVmH14dCDmkUVy1DZ/pub?gid=453189989&single=true&output=csv";
interface CSV_ROW {
  budget_year: string;
  plan_proj_name: string;
  flag: string;
  O_S: string;
  "output/proj": string;
  output_proj_name: string;
  amount: string;
  output_no: string;
  output_name: string;
  output_name1: string;
  purpose_proj: string;
  sub_strategy: string;
  strategy: string;
  plan_strategy: string;
  side: string;
  integration: string;
  fund_grp_name: string;
  county: string;
  name_organization: string;
}

let cached: BudgetRow[] | undefined;
let cachedCommu: CommunityRow[] | undefined;

/**
 * fetchDataSource fetches and cleans data from Google Sheets
 * @returns all cleaned rows available
 */

export const fetchCommunitySheet = async (): Promise<CommunityRow[]> => {
  if (cachedCommu) {
    return Promise.resolve(cachedCommu);
  }
  const communityText = await (await fetch(COMMUNITY_SHEET)).text();
  const community = await parse<CommunityRow>(communityText);

  const mapped = community.data.map(
    (row): CommunityRow => ({
      budget_year: Number(row.budget_year),
      district: row.district,
      community: row.community,
      project_name: row.project_name,
      amount: formatAmount(row.amount as string),
      procurement_list: row.procurement_list,
    })
  );
  cachedCommu = mapped;
  return mapped;
};

export const fetchDataSource = async (): Promise<BudgetRow[]> => {
  if (cached) {
    return Promise.resolve(cached);
  }

  const budgetText = await (await fetch(BUDGET_SHEET)).text();
  const budget = await parse<CSV_ROW>(budgetText);

  if (budget.errors && budget.errors.length > 0) {
    return Promise.reject(budget.errors);
  }

  const mapped = budget.data.map(
    (row): BudgetRow => ({
      budgetYear: Number(row.budget_year),
      planProjName: row.plan_proj_name,
      flag: row.flag,
      os: row.O_S,
      outputProj: row["output/proj"],
      outputProjName: row.plan_proj_name,
      amount: formatAmount(row.amount),
      outputNo: row.output_no,
      outputName: row.output_name,
      outputName1: row.output_name1,
      purposeProj: row.purpose_proj,
      subStrategy: row.sub_strategy,
      strategy: row.strategy,
      planStrategy: row.plan_strategy,
      side: row.side,
      integration: isIntegration(row.integration),
      fundGrpName: row.fund_grp_name,
      county: row.county,
      nameOrganization: row.name_organization,
    })
  );
  cached = mapped;
  return mapped;
};

const formatAmount = (amount: string) => {
  return Number(amount.replace(/,/g, "").split(".")[0]) || 0;
};

const isIntegration = (rawValue: string): boolean => {
  return rawValue !== "-" && rawValue !== "";
};

function parse<T>(text: string) {
  return new Promise<ParseResult<T>>((resolve, reject) => {
    papaParse<T>(text, {
      download: false,
      complete: resolve,
      error: reject,
      header: true,
    });
  });
}
