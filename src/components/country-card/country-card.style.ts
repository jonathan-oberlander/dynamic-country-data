import styled from "styled-components";
import { device } from "../styled/theme";
import { Small, Title } from "../styled/typography";

export const Card = styled.div`
  height: 148px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  /* @media ${device.mobileL} {
    height: 124px;
  } */
`;

export const CardHead = styled.div`
  display: flex;
  height: 40px;
  .country {
    width: 100%;
    margin-left: 26px;
    .title {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
    }
    .time {
      color: ${({ theme }) => theme.fontColor.secondary};
    }
  }
`;

export const Currency = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.s};
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.currency};
  font-size: 9px;
  border-radius: 50%;
`;

export const Flag = styled.img`
  width: 56px;
  height: 40px;
  border-radius: 1.6px;
  background-color: ${({ theme }) => theme.color.shade};
  object-fit: cover;

  /* @media ${device.mobileL} {
    width: 140px;
    height: 100px;
  } */
`;

export const CountryName = styled(Title)`
  line-height: 22px;
  color: ${({ theme }) => theme.color.brand};
`;

export const CardBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  .languages {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
  }
`;

export const Infos = styled.div`
  /* border: 1px solid black; */
`;

export const Info = styled.span`
  margin-right: ${({ theme }) => theme.spacing.m};
`;

export const SmallData = styled(Small)`
  color: ${({ theme }) => theme.color.accent1};
  margin-left: ${({ theme }) => theme.spacing.xxs};
`;
