import create from "zustand";
import { Country } from "../api/types";
import shallow from "zustand/shallow";
import { devtools } from "zustand/middleware";
import { getDistanceInKm, shortFormat } from "../utils/utils";
import {
  getAllCountries,
  getCountryByName,
  getCurrentCityName,
} from "../api/api";

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

      setGeo: () => {
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
      },

      setSearch: (search: string) =>
        set((state) => ({
          ...state,
          search,
        })),

      closeCountryModal: () =>
        set((state) => ({
          ...state,
          openCountryModal: false,
        })),

      fetchCountry: async (countryName: string) => {
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
      },

      fetchAllCountries: async () => {
        try {
          const allCountries = await getAllCountries();

          set((state) => ({
            ...state,
            allCountries,
          }));
        } catch (e) {}
      },
    }),
    { name: "globalStore" }
  )
);

export const useSelectCountryByName = () =>
  useStore(({ allCountries, search }) => {
    const reg = new RegExp("\\w*" + search + "\\w*", "gi");
    const countries =
      search.length > 0
        ? allCountries?.filter((c) => reg.test(c.name))
        : allCountries;
    return countries;
  });

export const useCountryModal = () =>
  useStore(
    ({ openCountryModal, selectedCountry, closeCountryModal }) => ({
      openCountryModal,
      selectedCountry,
      closeCountryModal,
    }),
    shallow
  );

export const useSearchBar = () =>
  useStore(
    ({ search, allCountries, setSearch }) => ({
      search,
      allCountries,
      setSearch,
    }),
    shallow
  );

export const useCurrentGeoLocation = (population: number, latlng: number[]) =>
  useStore(
    ({ coord, cityName }) => ({
      cityName,
      getDistance: () =>
        coord && latlng
          ? getDistanceInKm(latlng[0], coord[0], latlng[1], coord[1])
          : "",
      population: shortFormat(population),
    }),
    shallow
  );

export const useFetchAllCountries = () =>
  useStore((state) => state.fetchAllCountries);
export const useFetchCountry = () => useStore((state) => state.fetchCountry);
export const useGeoLocation = () => useStore((state) => state.setGeo);
