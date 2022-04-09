import styled from "styled-components";

export const Body: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
  position: relative;
  width: 640px;
  margin: 0 auto;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
`;
