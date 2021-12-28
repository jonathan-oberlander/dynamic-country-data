import { useEffect } from "react";
import { getCurrentCityName } from "../api/api";
import { useStore } from "../store/store";

export const useGeoLocation = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let here: number[] = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        const fetchCity = async function () {
          const city = await getCurrentCityName(here);
          dispatch({ type: "setGeo", payload: { here, city } });
        };

        fetchCity();
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, [dispatch]);
};
