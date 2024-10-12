"use client";
import axios from "axios";

export const ServerApi = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ProviderAxios = ({ children }: { children: React.ReactNode }) => {
  return <div>loading...</div>;
};
