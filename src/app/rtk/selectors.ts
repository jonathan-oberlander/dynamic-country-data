import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";

export const coreSelector = (rootState: RootState) => rootState.core;

export const searchSelector = createSelector(
  coreSelector,
  (state) => state.search
);

export const languageFilterSelector = createSelector(
  coreSelector,
  (state) => state.languageFilter
);

export const openCountryModalSelector = createSelector(
  coreSelector,
  (state) => state.openCountryModal
);

export const selectedCountrySelector = createSelector(
  coreSelector,
  (state) => state.selectedCountry
);

export const selectCountryListGroup = createSelector(
  searchSelector,
  languageFilterSelector,
  (search, languageFilter) => ({
    search,
    languageFilter,
  })
);

export const useSearch = () => useAppSelector(searchSelector);
export const useLanguageFilter = () => useAppSelector(languageFilterSelector);
export const useOpenCountryModal = () =>
  useAppSelector(openCountryModalSelector);
export const useSelectedCountry = () => useAppSelector(selectedCountrySelector);
export const useCountryListGroup = () => useAppSelector(selectCountryListGroup);
