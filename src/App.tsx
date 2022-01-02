import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";
import { useOpenCountryModal } from "./app/rtk/selectors";
import { Link, Route, Switch } from "wouter";
import { Title } from "./components/styled/typography";
import StatTable from "./components/table/table";

function Stat() {
  return (
    <Body>
      <Title>World countries statistics</Title>
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
      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/stat">Table</Link>
      </nav>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/stat" component={Stat} />
      </Switch>
    </div>
  );
}

export default App;
