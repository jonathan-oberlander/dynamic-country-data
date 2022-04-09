import { FC, useState } from "react";
import { CountryData } from "./countryData";
import { CountryHead } from "./countryHead";
import { CountryInfo } from "./countryInfo";
import { Country, Geocode } from "../../app/rtk/query/types";
import { Card } from "./countryCard.style";
import { shortFormat } from "../../app/utils/utils";
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "../../app/rtk/slice/coreSlice";
import { useGetDistance } from "../../app/rtk/hooks";

export const CountryCard: FC<{ country: Country; geocode: Geocode }> = ({
  country,
  geocode,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { distanceInfo } = useGetDistance(country.latlng, geocode);
  const dispatch = useDispatch();

  const onClick = () => dispatch(setSelectedCountry(country.name));

  return (
    <Card loaded={loaded} onClick={onClick}>
      <CountryHead country={country} setLoaded={setLoaded} />
      <CountryInfo capital={country.capital} languages={country.languages} />
      <CountryData
        population={shortFormat(country.population)}
        distanceInfo={distanceInfo}
      />
    </Card>
  );
};
