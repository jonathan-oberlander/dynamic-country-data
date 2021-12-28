import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useCountryModal } from "../../app/store/store";
import { modalRoot } from "../../index";
import { CountryModal } from "./countryModal.style";

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

  return openCountryModal && selectedCountry ? (
    <Modal>
      <CountryModal onClick={closeCountryModal}>
        <pre className="content">
          {JSON.stringify(selectedCountry, null, 3)}
        </pre>
      </CountryModal>
    </Modal>
  ) : null;
};
