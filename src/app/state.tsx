import { createContext, FC, useContext, useMemo, useReducer } from "react";
import { Country } from "./types";

export type State = {
  coord: number[];
  city: string;
  countryInModal: Country | undefined;
  openCountryModal: boolean;
};

export const initialState: State = {
  coord: [] as number[],
  city: "",
  countryInModal: undefined,
  openCountryModal: false,
};

type Store = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Action =
  | { type: "setGeo"; payload: { here: number[]; city: string } }
  | { type: "setCountry"; payload: Country }
  | { type: "closeCountryModal" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setGeo":
      return {
        ...state,
        coord: action.payload.here,
        city: action.payload.city,
      };
    case "setCountry":
      return {
        ...state,
        countryInModal: action.payload,
        openCountryModal: true,
      };
    case "closeCountryModal":
      return {
        ...state,
        openCountryModal: false,
      };
    default:
      return {
        ...initialState,
      };
  }
};

export const GlobalContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

export const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
