import { FC, useState } from "react";
import { CountryData } from "./countryData";
import { CountryHead } from "./countryHead";
import { CountryInfo } from "./countryInfo";
import { Country } from "../../app/api/types";
import { Card } from "./countryCard.style";
import { useFetchCountry } from "../../app/store/store";

export const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const onClick = useFetchCountry();

  return (
    <Card loaded={loaded} onClick={() => onClick(country.name)}>
      <CountryHead country={country} setLoaded={setLoaded} />
      <CountryInfo country={country} />
      <CountryData country={country} />
    </Card>
  );
};
