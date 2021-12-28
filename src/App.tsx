import { useEffect } from "react";
import { getCurrentCityName } from "./app/api";
import { useGlobalContext } from "./app/state";
import { Body } from "./components/body/body";
import { LanguageFilter } from "./components/language-filter/language-filter";
import { Search } from "./components/search/search";

function App() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let here: number[] = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        const fetchCity = async function () {
          const city = await getCurrentCityName(here);
          dispatch({ type: "setGeo", payload: { here, city } });
        };

        fetchCity();
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, [dispatch]);

  return (
    <Body>
      <Search />
      <LanguageFilter />
    </Body>
  );
}

export default App;
