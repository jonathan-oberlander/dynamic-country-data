import shallow from "zustand/shallow";
import { Store, useStore } from "./store";
import { getDistanceInKm, shortFormat } from "../utils/utils";

const selectSetGeo = (state: Store) => state.setGeo;
const selectfetchAllCountries = (state: Store) => state.fetchAllCountries;
const selectFetchCountry = (state: Store) => state.fetchCountry;
const selectCOuntryGeolocation = (state: Store) =>
  state.selectedCountry?.latlng;

const selectCOuntryByName = ({ allCountries, search }: Store) => {
  const reg = new RegExp("\\w*" + search + "\\w*", "gi");
  const countries =
    search.length > 0
      ? allCountries?.filter((c) => reg.test(c.name))
      : allCountries;
  return countries;
};

const selectCOuntryModal = ({
  openCountryModal,
  selectedCountry,
  closeCountryModal,
}: Store) => ({
  openCountryModal,
  selectedCountry,
  closeCountryModal,
});

const selectSearchBar = ({ search, allCountries, setSearch }: Store) => ({
  search,
  allCountries,
  setSearch,
});

// TODO: CURRY THE SELECTOR ?
export const useCurrentGeoLocation = (population: number, latlng: number[]) =>
  useStore(
    ({ coord, cityName }: Store) => ({
      cityName,
      getDistance: () =>
        coord && latlng
          ? getDistanceInKm(latlng[0], coord[0], latlng[1], coord[1])
          : "",
      population: shortFormat(population),
    }),
    shallow
  );

export const useGeoLocation = () => useStore(selectSetGeo);
export const useSelectCountryByName = () => useStore(selectCOuntryByName);
export const useCountryModal = () => useStore(selectCOuntryModal, shallow);
export const useSearchBar = () => useStore(selectSearchBar, shallow);
// export const useCurrentGeoLocation = (population: number, latlng: number[]) =>
//   useStore(() => selectCurrentGeolocation(population, latlng), shallow);
export const useFetchAllCountries = () => useStore(selectfetchAllCountries);
export const useFetchCountry = () => useStore(selectFetchCountry);
export const useCountryGeoLocation = () => useStore(selectCOuntryGeolocation);
