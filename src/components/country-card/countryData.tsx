import { FC } from "react";
import { useGlobalContext } from "../../app/store/state";
import { getDistanceInKm, shortFormat } from "../../app/utils/utils";
import { device } from "../styled/theme";
import { Infos, Info, SmallData } from "./country-card.style";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Plane } from "../../assets/plane.svg";
import { Country } from "../../app/api/types";
import { useMediaQuery } from "../../app/hooks/useMediaQuery";

const useCountryData = ({ population, latlng }: Country) => {
  const isBig = useMediaQuery(device.mobileL);
  const {
    state: { coord, city },
  } = useGlobalContext();

  const getDistance = () =>
    coord && latlng
      ? getDistanceInKm(latlng[0], coord[0], latlng[1], coord[1])
      : "";

  const distance = getDistance();

  return {
    distance:
      distance !== "NaN km" && isBig && city && `${distance} from ${city}.`,
    population: shortFormat(population),
  };
};

export const CountryData: FC<{ country: Country }> = ({ country }) => {
  const { population, distance } = useCountryData(country);

  return (
    <Infos>
      <Info>
        <User />
        <SmallData>{population}</SmallData>
      </Info>
      <Info>
        <Plane />
        <SmallData>
          <span>{distance}</span>
        </SmallData>
      </Info>
    </Infos>
  );
};
