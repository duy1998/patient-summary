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

export const BLOOD_PRESSURE_INDEX = 0;
export const PULSE_INDEX = 1;
export const SPO2_INDEX = 2;
export const RESPIPATORY_INDEX = 3;
export const TEMPERATURE_INDEX = 4;

export const vitalSignsData = [
  {
    title: "Huyết áp",
    color: "#eb9d20",
    primaryVital: { range: "", value: 0 },
  },
  {
    title: "Mạch",
    color: "#30d022",
    primaryVital: { range: "", value: 0 },
  },
  {
    title: "SpO2",
    color: "#1da1f2",
    primaryVital: { range: "", value: 0 },
  },
  {
    title: "Nhịp thở",
    color: "#df1df2",
    primaryVital: { range: "", value: 0 },
  },
  {
    title: "Nhiệt độ",
    color: "#9aafbb",
    primaryVital: { range: "", value: 0 },
  },
];
