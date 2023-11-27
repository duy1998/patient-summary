import PatientSummary from "src/ui/patient_summary/PatientSummary";
import { DataState } from "../common/DataState";

export interface PatientInfo {
  uuid: string;
  display: string;
  age: number;
  gender: string;
  allergy: string;
  insurance: boolean;
  vital: {
    height: string;
    weight: string;
    allergies: string[];
    chronicDisease: string;
  };
}

export interface MedicalRecord {
  uuid: string;
  startDatetime: string;
  location: {
    specialty: string;
  };
  diagnosis: {
    visitReason?: string;
    treatmentPlan?: string;
    diagnosis?: string;
    creatorName?: string;
  };
}

export interface PatientSummaryData {
  patientInfo: PatientInfo | null;
  medicalRecords: MedicalRecord[] | null;
  selectedResultTabs: string | null;
  results: Map<string, MedicalRecord[]> | null;
  drugOrders: {
    visitDrugOrders: [];
  };
  labOrders: [];
  procedureOrders: [];
  imagingDiagnosisOrders: [];
}

export interface PatientSummaryState {
  patientSummaryData: DataState<PatientSummaryData> | null;
}
