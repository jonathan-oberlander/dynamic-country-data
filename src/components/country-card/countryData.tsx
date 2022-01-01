import { FC } from "react";
import { Infos, Info, SmallData } from "./countryCard.style";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Plane } from "../../assets/plane.svg";

export const CountryData: FC<{
  population: string | number;
  distanceInfo: string;
}> = ({ population, distanceInfo }) => (
  <Infos>
    <Info>
      <User />
      <SmallData>{population}</SmallData>
    </Info>
    <Info>
      <Plane />
      <SmallData>
        <span>{distanceInfo}</span>
      </SmallData>
    </Info>
  </Infos>
);
