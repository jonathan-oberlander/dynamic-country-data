import { useEffect } from "react";
import { useFetchAllCountries, useGeoLocation } from "./app/store/selectors";
import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";

function App() {
  const fetchAllCountries = useFetchAllCountries();
  const askForGeolocation = useGeoLocation();

  useEffect(() => {
    fetchAllCountries();
    askForGeolocation();
  }, []);

  return (
    <Body>
      <SearchBar />
      <LanguageFilter />
      <CountryList />
      <CountryModalCard />
    </Body>
  );
}

export default App;
