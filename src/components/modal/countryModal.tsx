import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  useCountryGeoLocation,
  useCountryModal,
} from "../../app/store/selectors";
import { modalRoot } from "../../index";
import { CountryModal } from "./countryModal.style";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";

export const Modal: FC = ({ children }) => {
  const divRef = useRef(document.createElement("div"));

  useEffect(() => {
    modalRoot?.appendChild(divRef.current);
  }, []);

  return ReactDOM.createPortal(children, divRef.current);
};

export const CountryModalCard = () => {
  const { openCountryModal, selectedCountry, closeCountryModal } =
    useCountryModal();

  const go = useCountryGeoLocation();

  return openCountryModal && selectedCountry ? (
    <Modal>
      <CountryModal onClick={closeCountryModal}>
        {/* <pre className="content">
          {JSON.stringify(selectedCountry, null, 3)}
        </pre> */}

        {go && (
          <MapContainer
            center={[go[0], go[1]]}
            zoom={7}
            scrollWheelZoom={false}
            className="map-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[go[0], go[1]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </CountryModal>
    </Modal>
  ) : null;
};
