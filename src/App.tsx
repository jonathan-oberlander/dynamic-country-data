import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";
import { useOpenCountryModal } from "./app/rtk/selectors";

function App() {
  const openCountryModal = useOpenCountryModal();

  return (
    <Body>
      <SearchBar />
      <LanguageFilter />
      <CountryList />
      {openCountryModal && <CountryModalCard />}
    </Body>
  );
}

export default App;
