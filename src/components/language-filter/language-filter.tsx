import { useState } from "react";
import { $list, useObservable } from "../../app/stream";
import { Country } from "../../app/types";
import { CountryList } from "../country-list/country-list";

export const LanguageFilter = () => {
  // provide the observable stream
  // think about moving that in globa state somehow...
  const list = useObservable($list);
  const [lang, setLang] = useState("All");

  // put that in a selector...
  const filterList = (list: Country[] | undefined) =>
    (list &&
      lang !== "All" &&
      list.filter(
        (c) => c.languages.find((l) => l.name === lang) !== undefined
      )) ||
    list;

  const onChange = (event: any) => {
    setLang(event.target.value);
  };

  // try to render children instead of country list

  return (
    <>
      <select value={lang} onChange={onChange}>
        <option value="All">All</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>
      <CountryList list={filterList(list)} />
    </>
  );
};
