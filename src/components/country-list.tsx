import { $list, useObservable } from "../app/store";
import { Card, CountryCard } from "./country-card";
import { Title } from "./typography";

export const CountryList = () => {
  const list = useObservable($list);

  if (list === "error") {
    return <Title>Error</Title>;
  }

  if (list === "pending") {
    return <Title>Loading...</Title>;
  }

  if (list?.length) {
    return (
      <>
        {list?.map((country) => (
          <CountryCard key={country.alpha2Code} country={country} />
        ))}
      </>
    );
  }

  return <div />;
};
