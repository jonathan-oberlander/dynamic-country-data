import { ListContainer } from "./country-list.style";
import { CountryCard } from "../country-card/countryCard";
import { useSelectCountryByName } from "../../app/store/store";

export const CountryList: React.FC = () => {
  const countryList = useSelectCountryByName();

  return countryList ? (
    <ListContainer>
      {countryList.map((country) => (
        <div key={country.name}>
          <CountryCard country={country} />
        </div>
      ))}
    </ListContainer>
  ) : null;
};
