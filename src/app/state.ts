import { createContext } from "react";

// a global context can be useful later on...
// types
export type State = {
  coord: number[];
};
type AppContext = { dispatch: (v: any) => void; state: State };
type Actions = { type: "setGeo"; payload: number[] };

// init
export const initialState = {
  coord: [] as number[],
};

// reducer, typescript will infer the action types, super handy :)
export const GlobalContext = createContext<AppContext>({} as AppContext);
export function appReducer(state: State, action: Actions) {
  switch (action.type) {
    case "setGeo":
      return {
        ...state,
        coord: action.payload,
      };
    default:
      throw new Error();
  }
}
