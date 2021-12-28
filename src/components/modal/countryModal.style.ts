import styled from "styled-components";

export const CountryModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.neutral};

  .content {
    width: 50%;
    z-index: 1000;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.l};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
    }
  }
`;
