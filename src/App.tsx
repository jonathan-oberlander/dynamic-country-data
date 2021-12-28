import { useEffect } from "react";
import { getCurrentCityName } from "./app/api";
import { useGlobalContext } from "./app/state";
import { Body } from "./components/body/body";
import { CountryList } from "./components/country-list/country-list";
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
      <CountryList />
    </Body>
  );
}

export default App;
