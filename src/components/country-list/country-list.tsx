import { Country } from "../../app/types";
import { CountryCard } from "../country-card/country-card";

export const CountryList: React.FC<{ list: Country[] | undefined }> = ({
  list,
}) => {
  // TODO: create the MockCard Component with skeleton text

  if (list) {
    return (
      <>
        {list?.map((country) => (
          <CountryCard key={country.alpha2Code} country={country} />
        ))}
      </>
    );
  }

  return <div />;
};
