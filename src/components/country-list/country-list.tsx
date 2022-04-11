import { ListContainer } from "./country-list.style";
import { CountryCard } from "../country-card/countryCard";
import { useCountriesList } from "../../app/rtk/hooks";

export const CountryList: React.FC = () => {
  const { countries, geocode } = useCountriesList();

  return countries && geocode ? (
    <ListContainer>
      {countries.map((country) => (
        <div key={country?.name}>
          <CountryCard country={country} geocode={geocode} />
        </div>
      ))}
    </ListContainer>
  ) : null;
};
