import { NamedSet } from "zustand/middleware";
import {
  getAllCountries,
  getCountryByName,
  getCurrentCityName,
} from "../api/api";
import { Store } from "./store";

export const setLanguageFilter =
  (set: NamedSet<Store>) => (languageFilter: string | "none") =>
    set((state) => ({
      ...state,
      languageFilter,
    }));

export const setGeo = (set: NamedSet<Store>) => () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let coord: number[] = [
        position.coords.latitude,
        position.coords.longitude,
      ];

      (async () => {
        const cityName = await getCurrentCityName(coord);
        set((state) => ({
          ...state,
          coord,
          cityName,
        }));
      })();
    },

    (error) => {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
};

export const setSearch = (set: NamedSet<Store>) => (search: string) =>
  set((state) => ({
    ...state,
    search,
  }));

export const closeCountryModal = (set: NamedSet<Store>) => () =>
  set((state) => ({
    ...state,
    openCountryModal: false,
  }));

export const fetchCountry =
  (set: NamedSet<Store>) => async (countryName: string) => {
    try {
      const fullcountry = await getCountryByName(countryName, {
        full: true,
      });

      set((state) => ({
        ...state,
        selectedCountry: fullcountry[0],
        openCountryModal: true,
      }));
    } catch (e) {}
  };

export const fetchAllCountries = (set: NamedSet<Store>) => async () => {
  try {
    const allCountries = await getAllCountries();

    set((state) => ({
      ...state,
      allCountries,
    }));
  } catch (e) {}
};
