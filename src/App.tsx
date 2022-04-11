import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";
import { useOpenCountryModal } from "./app/rtk/selectors";
import { Route, Switch } from "wouter";
import StatTable from "./components/table/table";
import { Navigation } from "./components/navigation/navigation";

function Stat() {
  return (
    <Body>
      <StatTable />
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
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/stat" component={Stat} />
      </Switch>
    </div>
  );
}

export default App;
