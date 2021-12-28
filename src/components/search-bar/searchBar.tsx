import styled from "styled-components";
import { Input, Field } from "./searchBar.style";
import { ReactComponent as Magnifier } from "../../assets/search.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Loader } from "../../assets/loader.svg";
import { useStore } from "../../app/store/store";

export const SearchBar = () => {
  const { dispatch, search, allCountries } = useStore();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    dispatch({ type: "setSearch", payload: val });
  };

  const onClick = () => {
    dispatch({ type: "setSearch", payload: "" });
  };

  return (
    <Field>
      <Magnifier viewBox="2 0 21 21" />
      <Input
        placeholder="Search by country..."
        type="text"
        value={search?.toUpperCase()}
        onInput={onInput}
      />

      {!allCountries ? (
        <Loader viewBox="0 0 42 42" />
      ) : (
        <CloseButton>
          <Close viewBox="0 0 17 17" onClick={onClick} />
        </CloseButton>
      )}
    </Field>
  );
};

const CloseButton = styled.div`
  cursor: pointer;
`;
