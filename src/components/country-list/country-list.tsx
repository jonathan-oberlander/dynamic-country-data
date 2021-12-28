import { getCountryByName } from "../../app/api";
import { Country } from "../../app/types";
import { CountryCard } from "../country-card/country-card";
import { CountryModalCard } from "../modal/modal";
import { useGlobalContext } from "../../app/state";

export const CountryList: React.FC<{ list: Country[] | undefined }> = ({
  list,
}) => {
  const { dispatch } = useGlobalContext();

  const onClick = async (name: string) => {
    const country = await getCountryByName(name);
    dispatch({ type: "setCountry", payload: country[0] });
  };

  if (list && list.length > 0) {
    return (
      <>
        {list?.map((country) => (
          <div key={country.name} onClick={() => onClick(country.name)}>
            <CountryCard country={country} />
          </div>
        ))}
        <CountryModalCard />
      </>
    );
  }

  return null;
};
