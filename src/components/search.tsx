import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllCountries } from "../app/api";
import { $fetching, $search, useObservable } from "../app/stream";
import { ReactComponent as Magnifier } from "../assets/search.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { Small } from "./typography";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const fetching = useObservable($fetching);

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
      <Magnifier viewBox="0 0 20 20" />
      <Input
        placeholder="Search by country..."
        type="text"
        value={search.toUpperCase()}
        onInput={onInput}
      />
      {fetching && <Small>loading...</Small>}
      <Close viewBox="0 0 20 20" onClick={onClick} />
    </Field>
  );
};

const Input = styled.input`
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  width: 100%;
  color: ${({ theme }) => theme.fontColor.primary};
  caret-color: ${({ theme }) => theme.color.accent1};
  padding-left: ${({ theme }) => theme.spacing.s};
  padding-right: ${({ theme }) => theme.spacing.s};
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
