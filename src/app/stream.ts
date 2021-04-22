import { getAllCountries, getCountryByName } from "./api";
import { Country } from "./types";
import { BehaviorSubject, Observable, timer } from "rxjs";
import {
  debounceTime,
  delayWhen,
  distinctUntilChanged,
  retryWhen,
  switchMap,
  tap,
} from "rxjs/operators";
import { useEffect, useState } from "react";

// ---------------------------------------------------------------------
// search data stream
// retry on error
// typehead to display the coutries dynamically
export const $list = new BehaviorSubject<Country[]>([]);
export const $fetching = new BehaviorSubject<boolean>(false);
export const $search = new BehaviorSubject<string>("");
$search
  .pipe(
    distinctUntilChanged(),
    debounceTime(330),
    tap(() => $fetching.next(true)),
    switchMap((s: string) =>
      s.length > 0 ? getCountryByName(s) : getAllCountries()
    ),
    retryWhen(
      // TODO: implement error handling
      (errors) => errors.pipe(delayWhen(() => timer(2000)))
    )
  )
  .subscribe({
    next: (list: Country[]) => {
      $fetching.next(false);
      $list.next(list);
    },
  });

// ---------------------------------------------------------------------
// hook to provide the obeservable stream to a react component
export const useObservable = <T>(observable: Observable<T>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};
