import { FC, useState } from "react";
import { CountryData } from "./countryData";
import { CountryHead } from "./countryHead";
import { CountryInfo } from "./countryInfo";
import { Country } from "../../app/api/types";
import { Card } from "./countryCard.style";
import { useStore } from "../../app/store/store";

export const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { dispatch } = useStore();

  const onClick = () => dispatch({ type: "setCountry", payload: country });

  return (
    <Card loaded={loaded} onClick={onClick}>
      <CountryHead country={country} setLoaded={setLoaded} />
      <CountryInfo country={country} />
      <CountryData country={country} />
    </Card>
  );
};
