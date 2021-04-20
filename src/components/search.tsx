import { useState } from "react";
import styled from "styled-components";

export const Search = () => {
  const [search, setSearch] = useState<string>("");

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Field>
      <Input value={search.toUpperCase()} type="text" onInput={onInput} />
      <Reset />
    </Field>
  );
};

const Reset = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
`;

const Input = styled.input`
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: Lato;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  width: auto;
  outline: none;
  &:focus {
    border: none;
  }
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0);
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.color.neutral};
  margin-top: ${({ theme }) => theme.spacing.xxl2};
  margin-bottom: ${({ theme }) => theme.spacing.xxl2};
`;
