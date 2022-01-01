import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";
import { useOpenCountryModal } from "./app/rtk/selectors";
import { Route, Switch } from "wouter";
import { Title } from "./components/styled/typography";

function Stat() {
  return (
    <Body>
      <Title>World countries statistics</Title>
    </Body>
  );
}

function Home() {
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

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/stat" component={Stat} />
    </Switch>
  );
}

export default App;
