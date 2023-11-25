// api.ts

import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API endpoint

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async (): Promise<AxiosResponse<any[]>> => {
  return api.get('/posts');
};
