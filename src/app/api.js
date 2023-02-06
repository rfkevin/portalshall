import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: () => ({}),
});

export const createOrders = (data) => API.post(`/donations/createOrder`, data);

export const captureOrders = (orderID) => API.post(`/donations/${orderID}/capture`)
