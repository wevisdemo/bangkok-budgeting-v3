import _ from "lodash";

export const borderFilter = (strategy: string) => {
  if (strategy === "การสร้างเมืองปลอดภัย") return "border-l-wv-safe";
  if (strategy === "การพัฒนาสิ่งแวดล้อมยั่งยืน")
    return "border-l-wv-environment";
  if (strategy === "การลดความเหลื่อมล้ำด้วยการบริหารเมือง")
    return "border-l-wv-equality";
  if (strategy === "การเชื่อมโยงเมืองที่มีความคล่องตัว")
    return "border-l-wv-connectivity";
  if (strategy === "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม")
    return "border-l-wv-democracy";
  if (strategy === "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ")
    return "border-l-wv-economic";
  if (strategy === "การสร้างความเป็นมืออาชีพในการบริหาร")
    return "border-l-wv-management";
  return "border-l-gray-600";
};
export const bgColorSet = (strategy: string) => {
  if (strategy === "strategy-1" || strategy === "เดินทางดี")
    return `bg-strategy-1`;
  if (strategy === "strategy-2" || strategy === "สิ่งแวดล้อมดี")
    return `bg-strategy-2`;
  if (strategy === "strategy-3" || strategy === "เศรษฐกิจดี")
    return `bg-strategy-3`;
  if (strategy === "strategy-4" || strategy === "ปลอดภัยดี")
    return `bg-strategy-4`;
  if (strategy === "strategy-5" || strategy === "สุขภาพดี")
    return `bg-strategy-5`;
  if (strategy === "strategy-6" || strategy === "สังคมดี")
    return `bg-strategy-6`;
  if (strategy === "strategy-7" || strategy === "โปร่งใสดี")
    return `bg-strategy-7`;
  if (strategy === "strategy-8" || strategy === "เรียนดี")
    return `bg-strategy-8`;
  if (strategy === "strategy-9" || strategy === "บริหารจัดการดี")
    return `bg-strategy-9`;
};
export const textColorSet = (strategy: string) => {
  if (strategy === "strategy-1") return `text-strategy-1`;
  if (strategy === "strategy-2") return `text-strategy-2`;
  if (strategy === "strategy-3") return `text-strategy-3`;
  if (strategy === "strategy-4") return `text-strategy-4`;
  if (strategy === "strategy-5") return `text-strategy-5`;
  if (strategy === "strategy-6") return `text-strategy-6`;
  if (strategy === "strategy-7") return `text-strategy-7`;
  if (strategy === "strategy-8") return `text-strategy-8`;
  if (strategy === "strategy-9") return `text-strategy-9`;
};

export const colorFilter = (strategy: string) => {
  if (strategy === "การสร้างเมืองปลอดภัย") return "bg-wv-safe";
  if (strategy === "การพัฒนาสิ่งแวดล้อมยั่งยืน") return "bg-wv-environment";
  if (strategy === "การลดความเหลื่อมล้ำด้วยการบริหารเมือง")
    return "bg-wv-equality";
  if (strategy === "การเชื่อมโยงเมืองที่มีความคล่องตัว")
    return "bg-wv-connectivity";
  if (strategy === "การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม")
    return "bg-wv-democracy";
  if (strategy === "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ")
    return "bg-wv-economic";
  if (strategy === "การสร้างความเป็นมืออาชีพในการบริหาร")
    return "bg-wv-management";
  return "bg-gray-600";
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
];

export const orderByStrategy = (
  data: any,
  spec: string,
  sorting: "desc" | "asc"
) => {
  return _.orderBy(data, [spec], [sorting]);
};
