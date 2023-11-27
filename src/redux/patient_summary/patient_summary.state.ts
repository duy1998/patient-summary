import { DataState } from "../common/DataState";

export interface PatientInfo {
  pid: string;
  fullName: string;
  age: number;
  gender: string;
  allergy: string;
  chronicDiseases: string;
  insurance: string;
  height: string;
  weigh: string;
  symptom: string;
}

export interface MedicalRecord {
  id: any;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface PatientSummaryState {
  patientInfo: DataState<PatientInfo> | null,
  medicalRecords: DataState<MedicalRecord[]> | null;
  selectedResultTabs: string | null;
  results: DataState<Map<string, MedicalRecord[]>> | null;
}
