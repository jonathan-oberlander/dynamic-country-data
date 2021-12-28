import { CountryCard } from "../country-card/countryCard";
import { useSelectCountryByName } from "../../app/store/store";

export const CountryList: React.FC = () => {
  const countryList = useSelectCountryByName();

  return countryList ? (
    <div>
      {countryList.map((country) => (
        <div key={country.name}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  ) : null;
};
