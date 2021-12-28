import { getAllCountries, getCountryByName } from "./api";
import { Country } from "./types";
import { BehaviorSubject, timer } from "rxjs";
import {
  debounceTime,
  delayWhen,
  distinctUntilChanged,
  retryWhen,
  switchMap,
  tap,
} from "rxjs/operators";
import { useEffect, useState } from "react";

export const $list = new BehaviorSubject<Country[]>([]);
export const $fetching = new BehaviorSubject<boolean>(false);
export const $search = new BehaviorSubject<string>("");

$search
  .pipe(
    distinctUntilChanged(),
    debounceTime(330),
    tap(() => $fetching.next(true)),
    switchMap((s: string) =>
      s.length > 0 ? getCountryByName(s, { full: false }) : getAllCountries()
    ),
    retryWhen((errors) => errors.pipe(delayWhen(() => timer(2000))))
  )
  .subscribe({
    next: (list: Country[]) => {
      $fetching.next(false);
      $list.next(list);
    },
  });

export const useBehaviorSubject = <T>($bs: BehaviorSubject<T>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = $bs.subscribe(setState);
    return () => sub.unsubscribe();
  }, [$bs]);

  const handleNext = (value: T) => {
    $bs.next(value);
  };

  return { value: state, handleNext };
};

export const useSearch$ = () => useBehaviorSubject($search);
export const useFetching$ = () => useBehaviorSubject($fetching);
export const useList$ = () => useBehaviorSubject($list);
