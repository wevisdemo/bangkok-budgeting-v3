const district = [
  {
    id: 1,
    district: "คลองเตย",
    community_sum: 39,
    total_fund: "7,800,000",
  },
  {
    id: 2,
    district: "คลองสาน",
    community_sum: 33,
    total_fund: "6,600,000",
  },
  {
    id: 3,
    district: "คลองสามวา",
    community_sum: 84,
    total_fund: "16,800,000",
  },
  {
    id: 4,
    district: "คันนายาว",
    community_sum: 41,
    total_fund: "8,200,000",
  },
  {
    id: 5,
    district: "จตุจักร",
    community_sum: 41,
    total_fund: "8,200,000",
  },
  {
    id: 6,
    district: "จอมทอง",
    community_sum: 48,
    total_fund: "9,600,000",
  },
  {
    id: 7,
    district: "ดอนเมือง",
    community_sum: 96,
    total_fund: "19,200,000",
  },
  {
    id: 8,
    district: "ดินแดง",
    community_sum: 23,
    total_fund: "4,600,000",
  },
  {
    id: 9,
    district: "ดุสิต",
    community_sum: 43,
    total_fund: "8,600,000",
  },
  {
    id: 10,
    district: "ตลิ่งชัน",
    community_sum: 43,
    total_fund: "8,600,000",
  },
  {
    id: 11,
    district: "ทวีวัฒนา",
    community_sum: 17,
    total_fund: "3,400,000",
  },
  {
    id: 12,
    district: "ทุ่งครุ",
    community_sum: 29,
    total_fund: "5,800,000",
  },
  {
    id: 13,
    district: "ธนบุรี",
    community_sum: 42,
    total_fund: "8,400,000",
  },
  {
    id: 14,
    district: "บางกอกน้อย",
    community_sum: 37,
    total_fund: "7,400,000",
  },
  {
    id: 15,
    district: "บางกอกใหญ่",
    community_sum: 30,
    total_fund: "6,000,000",
  },
  {
    id: 16,
    district: "บางกะปิ",
    community_sum: 27,
    total_fund: "5,400,000",
  },
  {
    id: 17,
    district: "บางขุนเทียน",
    community_sum: 51,
    total_fund: "10,200,000",
  },
  {
    id: 18,
    district: "บางเขน",
    community_sum: 74,
    total_fund: "14,800,000",
  },
  {
    id: 19,
    district: "บางคอแหลม",
    community_sum: 28,
    total_fund: "5,600,000",
  },
  {
    id: 20,
    district: "บางแค",
    community_sum: 47,
    total_fund: "9,400,000",
  },
  {
    id: 21,
    district: "บางซื่อ",
    community_sum: 50,
    total_fund: "10,000,000",
  },
  {
    id: 22,
    district: "บางนา",
    community_sum: 31,
    total_fund: "6,200,000",
  },
  {
    id: 23,
    district: "บางบอน",
    community_sum: 12,
    total_fund: "2,400,000",
  },
  {
    id: 24,
    district: "บางพลัด",
    community_sum: 48,
    total_fund: "9,600,000",
  },
  {
    id: 25,
    district: "บางรัก",
    community_sum: 15,
    total_fund: "3,000,000",
  },
  {
    id: 26,
    district: "บึงกุ่ม",
    community_sum: 37,
    total_fund: "7,400,000",
  },
  {
    id: 27,
    district: "ปทุมวัน",
    community_sum: 17,
    total_fund: "3,400,000",
  },
  {
    id: 28,
    district: "ประเวศ",
    community_sum: 45,
    total_fund: "9,000,000",
  },
  {
    id: 29,
    district: "ป้อมปราบศัตรูพ่าย",
    community_sum: 14,
    total_fund: "2,800,000",
  },
  {
    id: 30,
    district: "พญาไท",
    community_sum: 22,
    total_fund: "4,400,000",
  },
  {
    id: 31,
    district: "พระโขนง",
    community_sum: 44,
    total_fund: "8,800,000",
  },
  {
    id: 32,
    district: "พระนคร",
    community_sum: 19,
    total_fund: "3,800,000",
  },
  {
    id: 33,
    district: "ภาษีเจริญ",
    community_sum: 51,
    total_fund: "10,200,000",
  },
  {
    id: 34,
    district: "มีนบุรี",
    community_sum: 63,
    total_fund: "12,600,000",
  },
  {
    id: 35,
    district: "ยานนาวา",
    community_sum: 17,
    total_fund: "3,400,000",
  },
  {
    id: 36,
    district: "ราชเทวี",
    community_sum: 25,
    total_fund: "5,000,000",
  },
  {
    id: 37,
    district: "ราษฏร์บูรณะ",
    community_sum: 28,
    total_fund: "5,600,000",
  },
  {
    id: 38,
    district: "ลาดกระบัง",
    community_sum: 65,
    total_fund: "13,000,000",
  },
  {
    id: 39,
    district: "ลาดพร้าว",
    community_sum: 36,
    total_fund: "7,200,000",
  },
  {
    id: 40,
    district: "วังทองหลาง",
    community_sum: 19,
    total_fund: "3,800,000",
  },
  {
    id: 41,
    district: "วัฒนา",
    community_sum: 16,
    total_fund: "3,200,000",
  },
  {
    id: 42,
    district: "สวนหลวง",
    community_sum: 45,
    total_fund: "9,000,000",
  },
  {
    id: 43,
    district: "สะพานสูง",
    community_sum: 29,
    total_fund: "5,800,000",
  },
  {
    id: 44,
    district: "สัมพันธวงศ์",
    community_sum: 16,
    total_fund: "3,200,000",
  },
  {
    id: 45,
    district: "สาทร",
    community_sum: 24,
    total_fund: "4,800,000",
  },
  {
    id: 46,
    district: "สายไหม",
    community_sum: 79,
    total_fund: "15,800,000",
  },
  {
    id: 47,
    district: "หนองแขม",
    community_sum: 71,
    total_fund: "14,200,000",
  },
  {
    id: 48,
    district: "หนองจอก",
    community_sum: 99,
    total_fund: "19,800,000",
  },
  {
    id: 49,
    district: "หลักสี่",
    community_sum: 77,
    total_fund: "15,400,000",
  },
  {
    id: 50,
    district: "ห้วยขวาง",
    community_sum: 22,
    total_fund: "4,400,000",
  },
  {
    id: "",
    district: "",
    community_sum: "2,009",
    total_fund: "401,800,000",
  },
];

export const mapingDistrict = (id) => {
  return district.filter((d) => d.id == id)[0].district;
};

export const mapingColorDistrict = (volume) => {
  const million = 1000000;
  if (volume) {
    if (volume / million <= 1) return "#FFFCAF";
    if (volume / million <= 5) return "#FFF846";
    if (volume / million <= 10) return "#EFE602";
    if (volume / million <= 15) return "#D0C800";
    if (volume / million <= 20) return "#ACA500";
  }
  return "#E8E8E8";
};
