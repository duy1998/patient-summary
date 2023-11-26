import { DataState } from "../common/DataState";

export interface MedicalRecord {
  id: any;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface PatientSummaryState {
  medicalRecords: DataState<MedicalRecord[]> | null;
  selectedResultTabs: string | null;
  results: DataState<Map<string, MedicalRecord[]>> | null;
}
