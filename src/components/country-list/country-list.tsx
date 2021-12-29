import { ListContainer } from "./country-list.style";
import { CountryCard } from "../country-card/countryCard";
import { useSelectCountry } from "../../app/store/selectors";

export const CountryList: React.FC = () => {
  const countryList = useSelectCountry();

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
