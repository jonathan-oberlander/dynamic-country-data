import { FC, useState } from "react";
import { Country } from "../../app/types";
import { Card } from "./country-card.style";
import { CountryData } from "./countryData";
import { CountryHead } from "./countryHead";
import { CountryInfo } from "./countryInfo";

export const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Card loaded={loaded}>
      <CountryHead country={country} setLoaded={setLoaded} />
      <CountryInfo country={country} />
      <CountryData country={country} />
    </Card>
  );
};
