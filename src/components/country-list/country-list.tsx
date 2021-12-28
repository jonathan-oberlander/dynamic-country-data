import { getCountryByName } from "../../app/api";
import { CountryCard } from "../country-card/country-card";
import { useGlobalContext } from "../../app/state";
import { useList$ } from "../../app/stream";

export const CountryList: React.FC = () => {
  const { dispatch } = useGlobalContext();
  const { value: countryList } = useList$();

  const onClick = async (name: string) => {
    const country = await getCountryByName(name, { full: true });
    dispatch({ type: "setCountry", payload: country[0] });
  };

  return countryList && countryList.length > 0 ? (
    <div>
      {countryList.map((country) => (
        <div key={country.name} onClick={() => onClick(country.name)}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  ) : null;
};
