import { getAllCountries, getCountryByName } from "./api";
import { Country } from "./types";
import { BehaviorSubject, Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators";
import { useEffect, useState } from "react";

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

export const useObservable = <T>(observable: Observable<T>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};
