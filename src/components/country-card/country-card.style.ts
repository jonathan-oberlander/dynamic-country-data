import styled from "styled-components";
import { device } from "../styled/theme";
import { Caption, Small, Title } from "../styled/typography";

export const Card = styled.div`
  height: 148px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media ${device.mobileL} {
    width: 640px;
    height: 124px;
    padding-right: ${({ theme }) => theme.spacing.xl};

    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const CardHead = styled.div`
  display: flex;
  height: 40px;
`;

export const Flag = styled.img`
  width: 56px;
  height: 40px;
  border-radius: 2.4px;
  background-color: ${({ theme }) => theme.color.shade};
  object-fit: cover;

  @media ${device.mobileL} {
    width: 140px;
    height: 100px;
    border-radius: 6px;
  }
`;

export const CountryTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 26px;

  @media ${device.mobileL} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacing.xxs};
  }
`;

export const CountryMain = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`;

export const CountryName = styled(Title)`
  font-size: 20px;
  font-weight: 600;
  height: 32px;
  color: ${({ theme }) => theme.color.brand};
`;

export const Currency = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.xs};
  min-width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.currency};
  font-size: 10px;
  font-family: Lato;
  border-radius: 8px;
  padding: 2px 5px;
`;

export const CapitalTime = styled(Caption)`
  margin-top: 2px;
  color: ${({ theme }) => theme.fontColor.secondary};
`;

export const Capital = styled(Caption)`
  margin: 0 4px 0 0;
`;
export const CapitalName = styled(Caption)``;

export const Languages = styled(Caption)`
  margin: 0 4px 0 0;
`;
export const LanguagesName = styled(Caption)``;

export const CardBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  .languages {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
  }

  @media ${device.mobileL} {
    padding-left: 166px;
    margin-top: -7px;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media ${device.mobileL} {
    padding-left: 166px;
    margin-top: 0;
  }
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.m};
`;

export const SmallData = styled(Small)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.accent2};
  margin-left: ${({ theme }) => theme.spacing.xxs};
`;
