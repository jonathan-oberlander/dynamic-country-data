import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../app/state";
import { Country } from "../../app/types";
import {
  countryCapitalTime,
  getDistanceInKm,
  shortFormat,
} from "../../app/utils";
import { Caption } from "../styled/typography";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Plane } from "../../assets/plane.svg";
import {
  Card,
  CardHead,
  Flag,
  CountryName,
  Currency,
  CardBody,
  Infos,
  Info,
  SmallData,
  Capital,
  CapitalName,
  CapitalTime,
  CountryMain,
  CountryTitle,
  Languages,
  LanguagesName,
} from "./country-card.style";
import { device } from "../styled/theme";

export const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  const {
    alpha2Code,
    capital,
    flag,
    name,
    currencies,
    languages,
    population,
    latlng,
  } = country;

  const { state } = useContext(GlobalContext);
  const isBig = useMediaQuery(device.mobileL);

  const distance = () => {
    return state.coord
      ? getDistanceInKm(latlng[0], state.coord[0], latlng[1], state.coord[1])
      : "";
  };

  return (
    <Card>
      <CardHead>
        <Flag src={flag} alt={`${name}'s national flag.`} />
        <CountryTitle>
          <CountryMain>
            <CountryName>{name}</CountryName>
            <Currency>{currencies[0].symbol}</Currency>
          </CountryMain>
          <CapitalTime>{countryCapitalTime(alpha2Code)}</CapitalTime>
        </CountryTitle>
      </CardHead>

      <CardBody>
        <div>
          <Capital>Capital:</Capital>
          <CapitalName>{capital}</CapitalName>
        </div>
        <div className="languages">
          <Caption>
            <Languages>Languages:</Languages>
            {languages.slice(0, 3).map((l, i) => (
              <LanguagesName key={l.iso639_1}>
                {l.name}
                {i !== languages.length - 1 && <span>, </span>}
              </LanguagesName>
            ))}
          </Caption>
        </div>
      </CardBody>

      <Infos>
        <Info>
          <User />
          <SmallData>{shortFormat(population)}</SmallData>
        </Info>
        <Info>
          <Plane />
          <SmallData>
            {distance()}
            {isBig && <span> from {state.city}.</span>}
          </SmallData>
        </Info>
      </Infos>
    </Card>
  );
};

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
