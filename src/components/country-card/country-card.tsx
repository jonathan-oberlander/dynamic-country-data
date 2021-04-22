import React, { useContext } from "react";
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
} from "./country-card.style";

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

  const distance = () => {
    return state.coord
      ? getDistanceInKm(latlng[0], state.coord[0], latlng[1], state.coord[1])
      : "";
  };

  return (
    <Card>
      <CardHead>
        <Flag src={flag} alt={`${name}'s national flag.`} />
        <div className="country">
          <div className="title">
            <CountryName>{name}</CountryName>
            <Currency>{currencies[0].symbol}</Currency>
          </div>
          <div className="time">
            <Caption>{countryCapitalTime(alpha2Code)}</Caption>
          </div>
        </div>
      </CardHead>

      <CardBody>
        <div>
          <Caption>Capital: {capital}</Caption>
        </div>
        <div className="languages">
          <Caption>
            <span>Languages: </span>
            {languages.slice(0, 3).map((l) => (
              <span key={l.iso639_1}>{l.name}, </span>
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
          <SmallData>{distance()}</SmallData>
        </Info>
      </Infos>
    </Card>
  );
};
