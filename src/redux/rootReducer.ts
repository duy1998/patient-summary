import { DataState } from './patient_summary/patient_summary.state';
import { combineReducers } from 'redux';
import dataReducer from './patient_summary/patient_summary.reducer';

export interface RootState {
    patientSummaryReducer: DataState;
}

const rootReducer = combineReducers({
    patientSummaryReducer: dataReducer
  });
  
  export default rootReducer;
