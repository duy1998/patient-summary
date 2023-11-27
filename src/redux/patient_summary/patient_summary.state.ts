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
    bloodPressureUnit: string;
    bloodPressure: string;
    bloodPressureNormalRange: string;
    pulse: string;
    pulseNormalRange: string;
    saturatedPeripheralOxygen: string;
    saturatedPeripheralOxygenNormalRange: string;
    temperatureUnit: string;
    temperature: string;
    temperatureNormalRange: string;
    respiratory: string;
    respiratoryNormalRange: string;
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
