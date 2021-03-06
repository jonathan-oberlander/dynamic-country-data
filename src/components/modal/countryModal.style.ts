import styled from "styled-components";

export const CountryModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 90vh;
    z-index: 1000;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.l};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    overflow: scroll;
    box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
    }

    .map-container {
      margin-right: 20px;
      width: 40%;
      height: 30%;
    }
  }
`;
