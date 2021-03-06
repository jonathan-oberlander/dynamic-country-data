import { configureStore } from "@reduxjs/toolkit";
import coreReducer from "./slice/coreSlice";
import { geoCodeApi } from "./query/geocodeApi";
import { countryApi } from "./query/countryApi";

export const store = configureStore({
  reducer: {
    core: coreReducer,
    [geoCodeApi.reducerPath]: geoCodeApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      geoCodeApi.middleware,
      countryApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
