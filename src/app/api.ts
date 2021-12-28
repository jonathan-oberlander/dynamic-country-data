import axios, { AxiosResponse } from "axios";
import { Country, Geocode } from "./types";

const httpClient = axios.create({
  baseURL: "https://restcountries.com/v2",
  timeout: 8000,
});

const fields = () => {
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

  return "/?fields=" + filter.map((f) => f);
};

export const getCountryByName = async (
  country: string,
  config: { full: boolean }
): Promise<Country[]> => {
  const response: AxiosResponse<Country[]> = await httpClient.get(
    "/name/" + country + (config.full ? "" : fields())
  );
  return response.data;
};

export const getAllCountries = async (): Promise<Country[]> => {
  const response: AxiosResponse<Country[]> = await httpClient.get(
    "/all" + fields()
  );
  return response.data;
};

export const getCurrentCityName = async (coord: number[]): Promise<string> => {
  const response: AxiosResponse<Geocode> = await axios.get(
    "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      coord[0] +
      "&longitude=" +
      coord[1] +
      "&localityLanguage=en"
  );
  return response.data.city;
};
