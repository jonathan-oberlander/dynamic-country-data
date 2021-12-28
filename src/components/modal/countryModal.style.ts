import styled from "styled-components";

export const CountryModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0 auto;
  height: 100vh;
  padding: 30px;

  .content {
    width: 50%;
    z-index: 1000;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.l};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
