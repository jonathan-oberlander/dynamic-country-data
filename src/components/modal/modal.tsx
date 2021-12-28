import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../app/state";
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
  const { state, dispatch } = useGlobalContext();

  const closeModal = () => dispatch({ type: "closeCountryModal" });

  return state.openCountryModal && state.countryInModal ? (
    <Modal>
      <CountryModal onClick={closeModal}>
        <div className="content">
          {JSON.stringify(state.countryInModal, null, 3)}
        </div>
      </CountryModal>
    </Modal>
  ) : null;
};
