import { PatientInfo } from "./patient_summary.state";
// actions.ts

import { fetchData } from "../../services/rest_api";

export const FETCH_MEDICAL_RECORDS_REQUEST = "FETCH_MEDICAL_RECORDS_REQUEST";
export const FETCH_MEDICAL_RECORDS_SUCCESS = "FETCH_MEDICAL_RECORDS_SUCCESS";
export const FETCH_MEDICAL_RECORDS_FAILURE = "FETCH_MEDICAL_RECORDS_FAILURE";

export const FETCH_RESULTS_REQUEST = "FETCH_RESULTS_REQUEST";
export const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";
export const FETCH_RESULTS_FAILURE = "FETCH_RESULTS_FAILURE";

export const CHANGE_RESULT_TAB = "CHANGE_RESULT_TAB";

function createMedicalRecordData(
  id: any,
  date: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, date, name, calories, fat, carbs, protein };
}

function createResultData(
  date: string,
  type: string,
  name: string,
  ref: string,
  result: number,
  unit: string
) {
  return { date, type, name, ref, result, unit };
}

const fakePatientInfo = {
  pid: "123456",
  fullName: "Nguyễn Thu Hà",
  age: 20,
  gender: "Nam",
  allergy: "Dị ứng",
  chronicDiseases: "Bệnh mãn tính",
  insurance: "Có",
  height: "60cm",
  weigh: "12kg",
  symptom: "Gặp vấn đề khó nghe",
};

const fakeMedicalRecordData = [
  createMedicalRecordData(
    1,
    "09:15 31/10/2023",
    "Frozen yoghurt",
    159,
    6.0,
    24,
    4.0
  ),
  createMedicalRecordData(
    2,
    "09:15 31/10/2023",
    "Ice cream sandwichsdasdasd asd as das das d asd asd asdasd asa",
    237,
    9.0,
    37,
    4.3
  ),
  createMedicalRecordData(3, "09:15 31/10/2023", "Eclair", 262, 16.0, 24, 6.0),
  createMedicalRecordData(4, "09:15 31/10/2023", "Cupcake", 305, 3.7, 67, 4.3),
  createMedicalRecordData(
    5,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    6,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    7,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    8,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    9,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    10,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    11,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    12,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    13,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    14,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    15,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    16,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    17,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    18,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    19,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
  createMedicalRecordData(
    20,
    "09:15 31/10/2023",
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  ),
];

const fakeResultData = [
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
  createResultData(
    "09:15 31/10/2023",
    "Hóa sinh",
    "Định lượng CRP",
    "<5",
    55.2,
    "mg/L"
  ),
];

export const fetchMedicalRecordsAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: FETCH_MEDICAL_RECORDS_REQUEST,
    });

    try {
      const response = await fetchData();
      dispatch({
        type: FETCH_MEDICAL_RECORDS_SUCCESS,
        payload: {
          medicalRecords: fakeMedicalRecordData,
          patientInfo: fakePatientInfo,
        },
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_MEDICAL_RECORDS_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchResultsAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: FETCH_RESULTS_REQUEST,
    });

    try {
      const response = await fetchData();

      dispatch({
        type: FETCH_RESULTS_SUCCESS,
        payload: {
          RESULT_TAB_1: fakeResultData,
          RESULT_TAB_2: fakeResultData,
          RESULT_TAB_3: fakeResultData,
          RESULT_TAB_4: fakeResultData,
        },
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_RESULTS_FAILURE,
        payload: error.message,
      });
    }
  };

export const changeResultTabAction = (tabId: string) => ({
  type: CHANGE_RESULT_TAB,
  payload: tabId,
});
