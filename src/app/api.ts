import axios from "axios";
import { Country } from "./types";

const httpClient = axios.create({
  baseURL: "https://restcountries.com/v2",
  timeout: 8000,
});

export const getCountryByName = async (country: string) => {
  const response = await httpClient.get("/name/" + country);
  return response.data as Country[];
};

export const getAllCountries = async () => {
  const filter = [
    "alpha2Code",
    "capital",
    "flag",
    "name",
    "currencies",
    "languages",
    "population",
    "latlng",
  ];

  const fields = filter.map((f) => f);

  const response = await httpClient.get("/all/?fields=" + fields);
  return response.data as Country[];
};

export const getCurrentCityName = async (coord: number[]) => {
  const response = await axios.get(
    "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      coord[0] +
      "&longitude=" +
      coord[1] +
      "&localityLanguage=en"
  );
  return response.data.city as string;
};
