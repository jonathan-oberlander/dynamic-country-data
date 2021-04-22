import styled from "styled-components";
import { device } from "../styled/theme";

export const Field = styled.div`
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

  @media ${device.mobileL} {
    width: 640px;
  }
`;

export const Input = styled.input`
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
