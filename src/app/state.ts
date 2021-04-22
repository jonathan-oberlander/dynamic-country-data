import { createContext } from "react";

// a global context can be useful later on...
// types
export type State = {
  coord: number[];
  city: string;
};
type AppContext = { dispatch: (v: any) => void; state: State };
type Actions = { type: "setGeo"; payload: { here: number[]; city: string } };

// init
export const initialState = {
  coord: [] as number[],
  city: "",
};

// reducer, typescript will infer the action types, super handy :)
export const GlobalContext = createContext<AppContext>({} as AppContext);
export function appReducer(state: State, action: Actions) {
  switch (action.type) {
    case "setGeo":
      return {
        ...state,
        coord: action.payload.here,
        city: action.payload.city,
      };
    default:
      throw new Error();
  }
}
