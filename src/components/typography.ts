import styled from "styled-components";

export const Title = styled.text`
  font-family: Lato;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
`;

export const Caption = styled.text`
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const Small = styled(Caption)`
  font-size: 10px;
`;

export const SmallBold = styled(Small)`
  font-weight: bold;
`;