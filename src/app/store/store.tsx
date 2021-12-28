import create from "zustand";
import { Country } from "../api/types";
import { devtools } from "zustand/middleware";
import {
  closeCountryModal,
  fetchAllCountries,
  fetchCountry,
  setGeo,
  setSearch,
} from "./actions";

export type Store = {
  coord: number[];
  cityName: string;
  search: string;
  allCountries: Country[] | undefined;
  selectedCountry: Country | undefined;
  openCountryModal: boolean;
  setGeo(): void;
  setSearch(search: string): void;
  closeCountryModal(): void;
  fetchCountry(countryName: string): void;
  fetchAllCountries(): void;
};

export const useStore = create<Store>(
  devtools(
    (set) => ({
      coord: [] as number[],
      cityName: "",
      search: "",
      allCountries: undefined,
      selectedCountry: undefined,
      openCountryModal: false,
      setGeo: setGeo(set),
      setSearch: setSearch(set),
      closeCountryModal: closeCountryModal(set),
      fetchCountry: fetchCountry(set),
      fetchAllCountries: fetchAllCountries(set),
    }),
    { name: "globalStore" }
  )
);
