import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Country, Geocode } from "./query/types";
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

  const lang = (c: Country) =>
    languageFilter !== "none"
      ? c.languages.map((l) => l.name === languageFilter && c)
      : c;

  const findCountry = (c: Country) => {
    const reg = new RegExp("w*" + search + "w*", "gi");
    return reg.test(c.name);
  };

  const countryByLanguage = allCountries
    ?.flatMap(lang)
    .filter(Boolean) as Country[];

  const countries =
    search.length > 0
      ? countryByLanguage?.filter(findCountry)
      : countryByLanguage;

  return { countries, geocode };
};

export const useGetDistance = (latlng: number[], geocode: Geocode) => {
  let distance = "";

  if (latlng && geocode) {
    distance = getDistanceInKm(
      latlng[0],
      geocode.latitude,
      latlng[1],
      geocode.longitude
    );
  }

  const distanceInfo =
    distance && distance !== "NaN km"
      ? `${distance} from ${geocode.city}.`
      : "";

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
