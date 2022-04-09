import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
import { LanguageFilter } from "./components/language-filter/languageFilter";
import { CountryModalCard } from "./components/modal/countryModal";
import { SearchBar } from "./components/search-bar/searchBar";
import { useOpenCountryModal } from "./app/rtk/selectors";
import { Link, Route, Switch } from "wouter";
import { AppTitle } from "./components/styled/typography";
import StatTable from "./components/table/table";
import styled from "styled-components";

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

function Navigation() {
  return (
    <Wrapper>
      <Navi>
        <AppTitle>World Countries Data</AppTitle>
        <div>
          <Link href="/">Home</Link>
          <span className="separator">|</span>
          <Link href="/stat">Table</Link>
        </div>
      </Navi>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  position: relative;
  width: 640px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
`;

const Navi = styled.nav`
  font-family: Lato;
  width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #f0f2f5;
  border-radius: 3px;

  .separator {
    margin: 0 10px;
  }

  a,
  a:visited {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
