import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country, Geocode } from "../../api/types";

export const geoCodeApi = createApi({
  reducerPath: "geocodeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.bigdatacloud.net/data/reverse-geocode-client",
  }),
  endpoints: (build) => ({
    getGeocode: build.query<Geocode, Country["latlng"] | void>({
      query: (args) => ({
        url: "/",
        method: "get",
        params: {
          latitude: args ? args[0] : null,
          longitude: args ? args[1] : null,
        },
      }),
    }),
  }),
});

export const { useGetGeocodeQuery } = geoCodeApi;
