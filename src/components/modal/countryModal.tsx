import ReactDOM from "react-dom";
import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { modalRoot } from "../../index";
import { useGetCountryByNameQuery } from "../../app/rtk/query/countryApi";
import { setCountryModal } from "../../app/rtk/slice/coreSlice";
import { Country } from "../../app/api/types";
import { CountryModal } from "./countryModal.style";
import { useSelectedCountry } from "../../app/rtk/selectors";

export const Modal: FC = ({ children }) => {
  const divRef = useRef(document.createElement("div"));

  useEffect(() => {
    modalRoot?.appendChild(divRef.current);
  }, []);

  return ReactDOM.createPortal(children, divRef.current);
};

export const CountryModalCard = () => {
  const selectedCountry = useSelectedCountry();
  const dispatch = useDispatch();
  const { data: country, isFetching } = useGetCountryByNameQuery({
    name: selectedCountry,
    full: true,
  });

  const onClick = () => {
    dispatch(setCountryModal(false));
  };

  return (
    <Modal>
      <CountryModal onClick={onClick}>
        {!isFetching && country ? (
          <MapView country={country} />
        ) : (
          <div className="content">Loading...</div>
        )}
      </CountryModal>
    </Modal>
  );
};

const MapView: FC<{ country: Country }> = ({ country }) => {
  const { latlng } = country;
  return (
    <div className="content">
      <MapContainer
        center={[latlng[0], latlng[1]]}
        zoom={5}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latlng[0], latlng[1]]}>
          <Popup>{country.name}</Popup>
        </Marker>
      </MapContainer>
      <pre>{JSON.stringify(country, null, 3)}</pre>
    </div>
  );
};
