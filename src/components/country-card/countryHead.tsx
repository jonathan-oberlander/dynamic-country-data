import { FC, Dispatch, SetStateAction } from "react";
import { Country } from "../../app/api/types";
import { countryCapitalTime } from "../../app/utils/utils";
import {
  CardHead,
  Flag,
  CountryTitle,
  CountryMain,
  CountryName,
  Currency,
  CapitalTime,
} from "./country-card.style";

export const CountryHead: FC<{
  country: Country;
  setLoaded: Dispatch<SetStateAction<boolean>>;
}> = ({ country, setLoaded }) => {
  const { alpha2Code, flag, name, currencies } = country;
  const onLoad = () => setLoaded(true);

  return (
    <CardHead>
      <Flag src={flag} alt={`${name}'s national flag.`} onLoad={onLoad} />
      <CountryTitle>
        <CountryMain>
          <CountryName>{name}</CountryName>
          <Currency>{currencies?.[0]?.symbol ?? ""}</Currency>
        </CountryMain>
        <CapitalTime>{countryCapitalTime(alpha2Code)}</CapitalTime>
      </CountryTitle>
    </CardHead>
  );
};
