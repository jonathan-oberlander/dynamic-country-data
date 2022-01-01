import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Country, Geocode } from "../api/types";
import { getDistanceInKm } from "../utils/utils";
import { useGetAllCountriesQuery } from "./query/countryApi";
import { useGetGeocodeQuery } from "./query/geocodeApi";
import { useCountryListGroup } from "./selectors";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCountriesList = () => {
  const { data: allCountries } = useGetAllCountriesQuery();
  const { data: geocode } = useGetGeocodeQuery();
  const { search, languageFilter } = useCountryListGroup();

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

  return { countries, geocode };
};

export const useGetDistance = (latlng: number[], geocode: Geocode) => {
  const distance =
    getDistanceInKm(
      latlng[0],
      geocode.latitude,
      latlng[1],
      geocode.longitude
    ) ?? "";

  const distanceInfo =
    distance !== "NaN km" ? `${distance} from ${geocode.city}.` : "";

  return { distanceInfo };
};

export const useAllLanguages = () => {
  const { data: allCountries } = useGetAllCountriesQuery();

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
