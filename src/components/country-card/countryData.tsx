import { FC } from "react";
import { Infos, Info, SmallData } from "./countryCard.style";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Plane } from "../../assets/plane.svg";
import { Country } from "../../app/api/types";
import { useCurrentGeoLocation } from "../../app/store/selectors";

export const CountryData: FC<{ country: Country }> = ({ country }) => {
  const {
    cityName,
    getDistance,
    population: formatedPopulation,
  } = useCurrentGeoLocation(country.population, country.latlng);

  const distance = getDistance();
  const distanceToDistance =
    distance !== "NaN km" && `${distance} from ${cityName}.`;

  return (
    <Infos>
      <Info>
        <User />
        <SmallData>{formatedPopulation}</SmallData>
      </Info>
      <Info>
        <Plane />
        <SmallData>
          <span>{distanceToDistance}</span>
        </SmallData>
      </Info>
    </Infos>
  );
};
