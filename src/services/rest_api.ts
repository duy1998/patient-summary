// api.ts

import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://patient-summary-poc.azurewebsites.net/api'; // Replace with your API endpoint

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async (): Promise<AxiosResponse<any[]>> => {
  return api.get('/patient/10821499456');
};
