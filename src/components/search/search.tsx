import { useFetching$, useSearch$ } from "../../app/stream";
import { ReactComponent as Magnifier } from "../../assets/search.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { Input, Field } from "./search.style";
import { ReactComponent as Loader } from "../../assets/loader.svg";
import styled from "styled-components";

export const Search = () => {
  const { value, handleNext } = useSearch$();
  const { value: fetching } = useFetching$();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    handleNext(val);
  };

  const onClick = () => {
    handleNext("");
  };

  return (
    <Field>
      <Magnifier viewBox="2 0 21 21" />
      <Input
        placeholder="Search by country..."
        type="text"
        value={value?.toUpperCase()}
        onInput={onInput}
      />
      {fetching ? (
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
