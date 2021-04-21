import { useEffect, useReducer } from "react";
import { appReducer, GlobalContext, initialState } from "./app/store";
import { Body } from "./components/body";
import { CountryList } from "./components/country-list";
import { Search } from "./components/search";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let here: number[] = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        console.log(here);
        dispatch({ type: "setGeo", payload: here });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);

  return (
    <GlobalContext.Provider value={{ dispatch, state }}>
      <Body>
        <Search />
        <CountryList />
      </Body>
    </GlobalContext.Provider>
  );
}

export default App;
