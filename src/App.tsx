import { useGeoLocation } from "./app/hooks/useGeolocation";
import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { SearchBar } from "./components/search-bar/searchBar";

function App() {
  useGeoLocation();

  return (
    <Body>
      <SearchBar />
      <CountryList />
    </Body>
  );
}

export default App;
