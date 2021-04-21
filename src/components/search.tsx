import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllCountries } from "../app/api";
import { $search } from "../app/store";
import { ReactComponent as Magnifier } from "../assets/search.svg";
import { ReactComponent as Close } from "../assets/close.svg";

export const Search = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllCountries();
  }, []);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    $search.next(val);
  };

  const onClick = () => {
    setSearch("");
    $search.next("");
  };

  return (
    <Field>
      <Magnifier />
      <Input
        placeholder="Search by country..."
        type="text"
        value={search.toUpperCase()}
        onInput={onInput}
      />
      <Close onClick={onClick} />
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
