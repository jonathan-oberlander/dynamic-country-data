import { getAllCountries, getCountryByName } from "./api";
import { Country } from "./types";
import { BehaviorSubject, Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { createContext, useEffect, useState } from "react";

// search data stream
export const $list = new BehaviorSubject<Country[] | "pending" | "error">([]);
export const $search = new BehaviorSubject<string>("");
$search
  .pipe(
    distinctUntilChanged(),
    debounceTime(330),
    tap(() => $list.next("pending")),
    switchMap((s: string) =>
      s.length > 0 ? getCountryByName(s) : getAllCountries()
    )
  )
  .subscribe({
    next: (list: Country[]) => $list.next(list),
    error: () => $list.next("error"),
  });

// provide the data stream to a component
export const useObservable = <T>(observable: Observable<T>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

// global context
// global context

export type State = {
  position: number[];
};

export const initialState = {
  position: [] as number[],
};

type AppContext = { dispatch: (v: any) => void; state: State };

export const GlobalContext = createContext<AppContext>({} as AppContext);

type Actions = { type: "setGeo"; payload: number[] };

export function appReducer(state: State, action: Actions) {
  switch (action.type) {
    case "setGeo":
      return {
        ...state,
        position: action.payload,
      };
    default:
      throw new Error();
  }
}
