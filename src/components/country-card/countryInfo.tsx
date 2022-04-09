import { FC } from "react";
import { Language } from "../../app/rtk/query/types";
import { Caption } from "../styled/typography";
import {
  CardBody,
  Capital,
  CapitalName,
  Languages,
  LanguagesName,
} from "./countryCard.style";

export const CountryInfo: FC<{ capital: string; languages: Language[] }> = ({
  capital,
  languages,
}) => (
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
