import { FC, useState } from "react";
import { CountryData } from "./countryData";
import { CountryHead } from "./countryHead";
import { CountryInfo } from "./countryInfo";
import { Country } from "../../app/api/types";
import { Card } from "./countryCard.style";

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
