import create from "zustand";
import { Country } from "../api/types";
import shallow from "zustand/shallow";
import { devtools, redux } from "zustand/middleware";

export type Store = {
  coord: number[];
  city: string;
  search: string;
  allCountries: Country[] | undefined;
  countryInModal: Country | undefined;
  openCountryModal: boolean;
};

export const initialState: Store = {
  coord: [] as number[],
  city: "",
  search: "",
  allCountries: undefined,
  countryInModal: undefined,
  openCountryModal: false,
};

type Action =
  | { type: "setGeo"; payload: { here: number[]; city: string } }
  | { type: "setCountry"; payload: Country }
  | { type: "closeCountryModal" }
  | { type: "setSearch"; payload: string }
  | { type: "setAllCountries"; payload: Country[] };

const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case "setGeo":
      return {
        ...state,
        coord: action.payload.here,
        city: action.payload.city,
      };
    case "setCountry":
      return {
        ...state,
        countryInModal: action.payload,
        openCountryModal: true,
      };
    case "closeCountryModal":
      return {
        ...state,
        openCountryModal: false,
      };
    case "setAllCountries":
      return {
        ...state,
        allCountries: action.payload,
      };
    case "setSearch":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return {
        ...initialState,
      };
  }
};

export const useStore = create(
  devtools(redux(reducer, initialState), { name: "globalStore" })
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
    ({ openCountryModal, countryInModal, dispatch }) => ({
      openCountryModal,
      countryInModal,
      dispatch,
    }),
    shallow
  );

export const useSearchBar = () =>
  useStore(
    ({ dispatch, search, allCountries }) => ({
      dispatch,
      search,
      allCountries,
    }),
    shallow
  );
