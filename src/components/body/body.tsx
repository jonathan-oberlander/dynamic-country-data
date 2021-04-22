import styled from "styled-components";

export const Body: React.FC = ({ children }) => {
  // const isBig = useMediaQuery(device.mobileL);

  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  height: 100vh;
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
`;
