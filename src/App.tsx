import { useEffect, useReducer } from "react";
import { appReducer, GlobalContext, initialState } from "./app/state";
import { Body } from "./components/body/body";
import { LanguageFilter } from "./components/language-filter/language-filter";
import { Search } from "./components/search/search";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let here: number[] = [
          position.coords.latitude,
          position.coords.longitude,
        ];
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
        <LanguageFilter />
      </Body>
    </GlobalContext.Provider>
  );
}

export default App;
