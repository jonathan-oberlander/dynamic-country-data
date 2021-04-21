import styled from "styled-components";

export const Body: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  margin: ${({ theme }) => theme.spacing.m};
`;