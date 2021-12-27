import { Country } from "../../app/types";
import { CountryCard } from "../country-card/country-card";

export const CountryList: React.FC<{ list: Country[] | undefined }> = ({
  list,
}) => {
  // TODO: create the MockCard Component with skeleton text

  console.log({ list });

  if (list && list.length > 0) {
    return (
      <>
        {list?.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </>
    );
  }

  return <div />;
};
