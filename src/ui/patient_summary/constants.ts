export const RESULT_TAB_1 = "RESULT_TAB_1";
export const RESULT_TAB_2 = "RESULT_TAB_2";
export const RESULT_TAB_3 = "RESULT_TAB_3";
export const RESULT_TAB_4 = "RESULT_TAB_4";

export const resultTabs = [
  { id: RESULT_TAB_1, title: "Xét nghiệm" },
  { id: RESULT_TAB_2, title: "Chẩn đoán hình ảnh" },
  { id: RESULT_TAB_3, title: "Cận lâm sàn" },
  { id: RESULT_TAB_4, title: "Danh sách thuốc" },
];

export const vitalSignsData = [
  {
    title: "Huyết áp (mmmHg)",
    color: "#eb9d20",
    primaryVital: { max: 90, min: 165, value: 120 },
    secondVital: { max: 90, min: 165, value: 120 },
  },
  {
    title: "Mạch",
    color: "#30d022",
    primaryVital: { max: 90, min: 165, value: 120 },
  },
  {
    title: "SpO2",
    color: "#1da1f2",
    primaryVital: { max: 90, min: 165, value: 120 },
  },
  {
    title: "Nhịp thở",
    color: "#df1df2",
    primaryVital: { max: 90, min: 165, value: 120 },
  },
  {
    title: "Nhiệt độ",
    color: "#9aafbb",
    primaryVital: { max: 90, min: 165, value: 120 },
  },
];
