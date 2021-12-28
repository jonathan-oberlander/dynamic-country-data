import { useEffect } from "react";
import { getAllCountries } from "../api/api";
import { useStore } from "../store/store";

export const useFetchAllCountries = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    (async () => {
      try {
        const countries = await getAllCountries();
        dispatch({ type: "setAllCountries", payload: countries });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);
};
