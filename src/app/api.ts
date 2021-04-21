import axios from "axios";
import { Country } from "./types";

const httpClient = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
  timeout: 8000,
});

export const getCountryByName = async (country: string) => {
  const response = await httpClient.get("/name/" + country);
  return response.data as Country[];
};

export const getAllCountries = async () => {
  const response = await httpClient.get("/all");
  return response.data as Country[];
};
