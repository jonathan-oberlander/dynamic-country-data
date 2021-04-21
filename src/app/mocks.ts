import { Country } from "./types";

export const mockResponse: Country[] = [
  {
    name: "Algeria",
    topLevelDomain: [".dz"],
    alpha2Code: "DZ",
    alpha3Code: "DZA",
    callingCodes: ["213"],
    capital: "Algiers",
    altSpellings: ["DZ", "Dzayer", "Algérie"],
    region: "Africa",
    subregion: "Northern Africa",
    population: 40400000,
    latlng: [28.0, 3.0],
    demonym: "Algerian",
    area: 2381741.0,
    gini: 35.3,
    timezones: ["UTC+01:00"],
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    nativeName: "الجزائر",
    numericCode: "012",
    currencies: [{ code: "DZD", name: "Algerian dinar", symbol: "د.ج" }],
    languages: [
      {
        iso639_1: "ar",
        iso639_2: "ara",
        name: "Arabic",
        nativeName: "العربية",
      },
    ],
    translations: {
      de: "Algerien",
      es: "Argelia",
      fr: "Algérie",
      ja: "アルジェリア",
      it: "Algeria",
      br: "Argélia",
      pt: "Argélia",
      nl: "Algerije",
      hr: "Alžir",
      fa: "الجزایر",
    },
    flag: "https://restcountries.eu/data/dza.svg",
    regionalBlocs: [
      {
        acronym: "AU",
        name: "African Union",
        otherAcronyms: [],
        otherNames: [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika",
        ],
      },
      {
        acronym: "AL",
        name: "Arab League",
        otherAcronyms: [],
        otherNames: [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States",
        ],
      },
    ],
    cioc: "ALG",
  },
];
