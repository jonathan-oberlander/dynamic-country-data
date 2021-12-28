import { FC } from "react";
import { Country } from "../../app/types";
import { Caption } from "../styled/typography";
import {
  CardBody,
  Capital,
  CapitalName,
  Languages,
  LanguagesName,
} from "./country-card.style";

export const CountryInfo: FC<{ country: Country }> = ({ country }) => {
  const { capital, languages } = country;

  return (
    <CardBody>
      <div>
        <Capital>Capital:</Capital>
        <CapitalName>{capital}</CapitalName>
      </div>
      <div className="languages">
        <Caption>
          <Languages>Languages:</Languages>
          {languages.slice(0, 3).map((l, i) => (
            <LanguagesName key={l.iso639_1 + i}>
              {l.name}
              {i !== languages.length - 1 && <span>, </span>}
            </LanguagesName>
          ))}
        </Caption>
      </div>
    </CardBody>
  );
};
