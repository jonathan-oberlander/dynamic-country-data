import styled from "styled-components";
import { Country } from "../app/types";
import { Caption, Small, Title } from "./typography";

function shortFormat(val: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 6,
  }).format(val);
}

const funcFromOperator = (op: string) => {
  console.log(op);
  return {
    "+": (x: number, y: number) => x + y,
    "-": (x: number, y: number) => x - y,
  }[op];
};

export const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  const {
    capital,
    flag,
    name,
    currencies,
    languages,
    population,
    timezones,
    latlng,
  } = country;

  return (
    <Card>
      <CardHead>
        <Flag src={flag} alt={`${name}'s national flag.`} />
        <CountryName>{name}</CountryName>
        {currencies.map((c, i) => (
          <Currency key={c.name}>{c.symbol}</Currency>
        ))}
        <Caption>
          {timezones.map((utc, i) => (
            <span key={utc + i}>{utc}</span>
          ))}
        </Caption>
      </CardHead>
      <Caption>Capital: {capital}</Caption>
      <Caption>
        <span>Languages: </span>
        {languages.map((l) => (
          <span key={l.iso639_1}>{l.name}, </span>
        ))}
      </Caption>
      <SmallData>{shortFormat(population)}</SmallData>
      <SmallData>{JSON.stringify(latlng)}</SmallData>
    </Card>
  );
};

// const CardCountry = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const CardHead = styled.div`
  display: flex;
`;

const CountryName = styled(Title)`
  color: ${({ theme }) => theme.color.brand};
`;

const SmallData = styled(Small)`
  color: ${({ theme }) => theme.color.accent1};
`;

const Currency = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.currency};
  font-size: 9px;
  border-radius: 50%;
`;

export const Flag = styled.img`
  width: 56px;
  height: 40px;
  margin: 4px 26px 20px 0;
  background-color: ${({ theme }) => theme.color.shade};
`;

export const Card = styled.div`
  height: 148px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
