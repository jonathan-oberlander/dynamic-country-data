import { Body } from "./components/body";
import { CountryList } from "./components/country-list";
import { Search } from "./components/search";

function App() {
  return (
    <Body>
      <Search />
      <CountryList />
    </Body>
  );
}

export default App;
