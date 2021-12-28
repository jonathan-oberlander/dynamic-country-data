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
  const { openCountryModal, countryInModal, dispatch } = useCountryModal();
  const closeModal = () => dispatch({ type: "closeCountryModal" });

  return openCountryModal && countryInModal ? (
    <Modal>
      <CountryModal onClick={closeModal}>
        <div className="content">{JSON.stringify(countryInModal, null, 3)}</div>
      </CountryModal>
    </Modal>
  ) : null;
};
