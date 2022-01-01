import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  search: string;
  languageFilter: string | "none";
  openCountryModal: boolean;
  selectedCountry: string;
}

export const initialState: State = {
  search: "",
  languageFilter: "none",
  openCountryModal: false,
  selectedCountry: "",
};

export const coreSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLanguageFilter: (state, action: PayloadAction<string | "none">) => {
      state.languageFilter = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSelectedCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload;
      state.openCountryModal = true;
    },
    setCountryModal: (state, action: PayloadAction<boolean>) => {
      state.openCountryModal = action.payload;
    },
  },
});

export const {
  setLanguageFilter,
  setCountryModal,
  setSearch,
  setSelectedCountry,
} = coreSlice.actions;

export default coreSlice.reducer;
