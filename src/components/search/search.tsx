import { useEffect, useState } from "react";
import { getAllCountries } from "../../app/api";
import { $fetching, $search, useObservable } from "../../app/stream";
import { ReactComponent as Magnifier } from "../../assets/search.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { Small } from "../styled/typography";
import { Input, Field } from "./search.style";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const fetching = useObservable($fetching);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    $search.next(val);
  };

  const onClick = () => {
    setSearch("");
    $search.next("");
  };

  return (
    <Field>
      <Magnifier viewBox="2 0 21 21" />
      <Input
        placeholder="Search by country..."
        type="text"
        value={search.toUpperCase()}
        onInput={onInput}
      />
      {fetching && <Small>loading...</Small>}
      <Close viewBox="0 0 17 17" onClick={onClick} />
    </Field>
  );
};
