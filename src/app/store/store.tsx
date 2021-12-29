import create from "zustand";
import { Country } from "../api/types";
import { devtools } from "zustand/middleware";
import {
  closeCountryModal,
  fetchAllCountries,
  fetchCountry,
  setGeo,
  setSearch,
  setLanguageFilter,
} from "./actions";

export type Store = {
  coord: number[];
  cityName: string;
  search: string;
  languageFilter: string | "none";
  allCountries: Country[] | undefined;
  selectedCountry: Country | undefined;
  openCountryModal: boolean;
  setGeo(): void;
  setSearch(search: string): void;
  setLanguageFilter(languageFilter: string | "none"): void;
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
      languageFilter: "none",
      allCountries: undefined,
      selectedCountry: undefined,
      openCountryModal: false,
      setGeo: setGeo(set),
      setSearch: setSearch(set),
      closeCountryModal: closeCountryModal(set),
      fetchCountry: fetchCountry(set),
      fetchAllCountries: fetchAllCountries(set),
      setLanguageFilter: setLanguageFilter(set),
    }),
    { name: "globalStore" }
  )
);
