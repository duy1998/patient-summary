import { combineReducers } from "redux";
import dataReducer from "./patient_summary/patient_summary.reducer";
import { PatientSummaryState } from "./patient_summary/patient_summary.state";

export interface RootState {
  patientSummaryReducer: PatientSummaryState;
}

const rootReducer = combineReducers({
  patientSummaryReducer: dataReducer,
});

export default rootReducer;
