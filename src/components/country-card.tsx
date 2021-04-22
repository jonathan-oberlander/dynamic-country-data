import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../app/state";
import { Country } from "../app/types";
import { countryCapitalTime, getDistanceInKm, shortFormat } from "../app/utils";
import { Caption, Small, Title } from "./typography";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Plane } from "../assets/plane.svg";
import { device } from "../app/theme";

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

export const Card = styled.div`
  height: 148px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media ${device.mobileL} {
    height: 124px;
  }
`;

const CardHead = styled.div`
  display: flex;
  height: 40px;
  .country {
    width: 100%;
    margin-left: 26px;
    .title {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
    }
    .time {
      color: ${({ theme }) => theme.fontColor.secondary};
    }
  }
`;

const Currency = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.currency};
  font-size: 9px;
  border-radius: 50%;
`;

export const Flag = styled.img`
  width: 56px;
  height: 40px;
  border-radius: 1.6px;
  background-color: ${({ theme }) => theme.color.shade};
  object-fit: cover;

  @media ${device.mobileL} {
    width: 140px;
    height: 100px;
  }
`;

const CountryName = styled(Title)`
  line-height: 22px;
  color: ${({ theme }) => theme.color.brand};
`;

const CardBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  .languages {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
  }
`;

const Infos = styled.div`
  /* border: 1px solid black; */
`;

const Info = styled.span`
  margin-right: ${({ theme }) => theme.spacing.m};
`;

const SmallData = styled(Small)`
  color: ${({ theme }) => theme.color.accent1};
  margin-left: ${({ theme }) => theme.spacing.xxs};
`;
