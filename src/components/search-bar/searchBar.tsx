import styled from "styled-components";
import { Input, Field } from "./searchBar.style";
import { ReactComponent as Magnifier } from "../../assets/search.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { useAppDispatch } from "../../app/rtk/hooks";
import { setSearch } from "../../app/rtk/slice/coreSlice";
import { useSearch } from "../../app/rtk/selectors";

export const SearchBar = () => {
  const search = useSearch();
  const dispatch = useAppDispatch();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    dispatch(setSearch(search));
  };

  const onClick = () => {
    dispatch(setSearch(""));
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

      <CloseButton>
        <Close viewBox="0 0 17 17" onClick={onClick} />
      </CloseButton>

      {/* {!allCountries ? (
        <Loader viewBox="0 0 42 42" />
      ) : (
        <CloseButton>
          <Close viewBox="0 0 17 17" onClick={onClick} />
        </CloseButton>
      )} */}
    </Field>
  );
};

const CloseButton = styled.div`
  cursor: pointer;
`;
