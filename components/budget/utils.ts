import _ from "lodash";

export const borderFilter = (strategy: string) => {
  if (strategy === "strategy-1" || strategy === "เดินทางดี")
    return `border-strategy-1`;
  if (strategy === "strategy-2" || strategy === "ปลอดภัยดี")
    return `border-strategy-2`;
  if (strategy === "strategy-3" || strategy === "โปร่งใสดี")
    return `border-strategy-3`;
  if (strategy === "strategy-4" || strategy === "สิ่งแวดล้อมดี")
    return `border-strategy-4`;
  if (strategy === "strategy-5" || strategy === "สุขภาพดี")
    return `border-strategy-5`;
  if (strategy === "strategy-6" || strategy === "เรียนดี")
    return `border-strategy-6`;
  if (strategy === "strategy-7" || strategy === "เศรษฐกิจดี")
    return `border-strategy-7`;
  if (strategy === "strategy-8" || strategy === "สังคมดี")
    return `border-strategy-8`;
  if (strategy === "strategy-9" || strategy === "บริหารจัดการดี")
    return `border-strategy-9`;
  else return "border-gray-600";
};

export const formatName = (strategy: string) => {
  if (strategy === "strategy-1" || strategy === "เดินทางดี")
    return `strategy_1`;
  if (strategy === "strategy-2" || strategy === "ปลอดภัยดี")
    return `strategy_2`;
  if (strategy === "strategy-3" || strategy === "โปร่งใสดี")
    return `strategy_3`;
  if (strategy === "strategy-4" || strategy === "สิ่งแวดล้อมดี")
    return `strategy_4`;
  if (strategy === "strategy-5" || strategy === "สุขภาพดี") return `strategy_5`;
  if (strategy === "strategy-6" || strategy === "เรียนดี") return `strategy_6`;
  if (strategy === "strategy-7" || strategy === "เศรษฐกิจดี")
    return `strategy_7`;
  if (strategy === "strategy-8" || strategy === "สังคมดี") return `strategy_8`;
  if (strategy === "strategy-9" || strategy === "บริหารจัดการดี")
    return `strategy_9`;
};
export const bgColorSet = (strategy: string) => {
  if (strategy === "strategy-1" || strategy === "เดินทางดี")
    return `bg-strategy-1`;
  if (strategy === "strategy-2" || strategy === "ปลอดภัยดี")
    return `bg-strategy-2`;
  if (strategy === "strategy-3" || strategy === "โปร่งใสดี")
    return `bg-strategy-3`;
  if (strategy === "strategy-4" || strategy === "สิ่งแวดล้อมดี")
    return `bg-strategy-4`;
  if (strategy === "strategy-5" || strategy === "สุขภาพดี")
    return `bg-strategy-5`;
  if (strategy === "strategy-6" || strategy === "เรียนดี")
    return `bg-strategy-6`;
  if (strategy === "strategy-7" || strategy === "เศรษฐกิจดี")
    return `bg-strategy-7`;
  if (strategy === "strategy-8" || strategy === "สังคมดี")
    return `bg-strategy-8`;
  if (strategy === "strategy-9" || strategy === "บริหารจัดการดี")
    return `bg-strategy-9`;
  else return "bg-gray-600";
};
export const textColorSet = (strategy: string) => {
  if (strategy === "strategy-1" || strategy === "เดินทางดี")
    return `text-strategy-1`;
  if (strategy === "strategy-2" || strategy === "ปลอดภัยดี")
    return `text-strategy-2`;
  if (strategy === "strategy-3" || strategy === "โปร่งใสดี")
    return `text-strategy-3`;
  if (strategy === "strategy-4" || strategy === "สิ่งแวดล้อมดี")
    return `text-strategy-4`;
  if (strategy === "strategy-5" || strategy === "สุขภาพดี")
    return `text-strategy-5`;
  if (strategy === "strategy-6" || strategy === "เรียนดี")
    return `text-strategy-6`;
  if (strategy === "strategy-7" || strategy === "เศรษฐกิจดี")
    return `text-strategy-7`;
  if (strategy === "strategy-8" || strategy === "สังคมดี")
    return `text-strategy-8`;
  if (strategy === "strategy-9" || strategy === "บริหารจัดการดี")
    return `text-strategy-9`;
};

export const handleAddSelected = (selector: string, className: string) => {
  if (document.querySelectorAll(selector))
    [...(document.querySelectorAll(selector) as any)]?.map((elem) =>
      elem.classList.add(className)
    );
};

export const handleRemoveSelected = (selector: string, className: string) => {
  if (document.querySelectorAll(selector))
    [...(document.querySelectorAll(selector) as any)]?.map((elem) =>
      elem.classList.remove(className)
    );
};

export const convertMillion = (num: number, isDecimal = true) => {
  const numFormat = num / 1000000;
  return (
    numFormat.toLocaleString("en-US", {
      maximumFractionDigits: isDecimal ? 2 : 0,
      minimumFractionDigits: isDecimal ? 2 : 0,
    }) || ""
  );
};

export const strategyList = () => [
  "เดินทางดี",
  "สิ่งแวดล้อมดี",
  "เศรษฐกิจดี",
  "ปลอดภัยดี",
  "สุขภาพดี",
  "สังคมดี",
  "โปร่งใสดี",
  "เรียนดี",
  "บริหารจัดการดี",
  "N/A",
];

export const orderByStrategy = (
  data: any,
  spec: string,
  sorting: "desc" | "asc"
) => {
  return _.orderBy(data, [spec], [sorting]);
};
