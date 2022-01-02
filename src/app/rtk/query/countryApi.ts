import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../../api/types";

const fields = [
  "alpha2Code",
  "capital",
  "flag",
  "name",
  "currencies",
  "languages",
  "population",
  "latlng",
];

export const countryApi = createApi({
  reducerPath: "countryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v2",
  }),
  tagTypes: ["Countries"],
  endpoints: (build) => ({
    getAllCountries: build.query<Country[], void>({
      query: () => ({
        url: "/all",
        method: "get",
        params: {
          fields: fields.toString(),
        },
      }),
    }),
    getCountryByName: build.query<
      Country | undefined,
      { name: string; full: boolean }
    >({
      query: ({ name, full }) => ({
        url: `/name/${name}`,
        method: "get",
        params: {
          fields: full ? undefined : fields.toString(),
        },
        providesTags: () => [{ type: "Countries", name }],
      }),
      transformResponse: (baseQueryReturnValue: Country[], _, { name }) => {
        return baseQueryReturnValue.find((c) => c.name === name);
      },
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = countryApi;
