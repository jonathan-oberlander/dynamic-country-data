import shallow from "zustand/shallow";
import { Store, useStore } from "./store";
import { getDistanceInKm, shortFormat } from "../utils/utils";
import { Country } from "../api/types";

const selectSetGeo = (state: Store) => state.setGeo;
const selectfetchAllCountries = (state: Store) => state.fetchAllCountries;
const selectFetchCountry = (state: Store) => state.fetchCountry;
const selectCountryGeolocation = (state: Store) =>
  state.selectedCountry?.latlng;

const selectAllLanguages = ({ allCountries }: Store) => {
  const allLanguageCount = allCountries?.reduce<Record<string, number>>(
    (a, c) => {
      c.languages.forEach(({ name }) => {
        if (!a.hasOwnProperty(name)) {
          a[name] = 1;
        } else {
          a[name]++;
        }
      });
      return a;
    },
    {}
  );

  const allLanguages = ["none", ...Object.keys(allLanguageCount ?? {}).sort()];

  return {
    allLanguageCount,
    allLanguages,
  };
};

const selectLanguageFilter = ({
  languageFilter,
  setLanguageFilter,
}: Store) => ({
  languageFilter,
  setLanguageFilter,
});

const selectCountry = ({ allCountries, search, languageFilter }: Store) => {
  const countryByLanguage = allCountries
    ?.map((c) =>
      languageFilter !== "none"
        ? c.languages.map((l) => l.name === languageFilter && c)
        : c
    )
    .flat()
    .filter(Boolean) as Country[];

  const reg = new RegExp("\\w*" + search + "\\w*", "gi");

  const countries =
    search.length > 0
      ? countryByLanguage?.filter((c) => reg.test(c.name))
      : countryByLanguage;

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
// export const useCurrentGeoLocation = (population: number, latlng: number[]) =>
//   useStore(() => selectCurrentGeolocation(population, latlng), shallow);

export const useGeoLocation = () => useStore(selectSetGeo);
export const useSelectCountry = () => useStore(selectCountry);
export const useCountryModal = () => useStore(selectCOuntryModal, shallow);
export const useSearchBar = () => useStore(selectSearchBar, shallow);
export const useFetchAllCountries = () => useStore(selectfetchAllCountries);
export const useFetchCountry = () => useStore(selectFetchCountry);
export const useCountryGeoLocation = () => useStore(selectCountryGeolocation);
export const useAllLanguages = () => useStore(selectAllLanguages);
export const useLanguageFilter = () => useStore(selectLanguageFilter);
