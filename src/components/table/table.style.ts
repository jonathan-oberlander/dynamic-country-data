import styled from "styled-components";

export const Styles = styled.div`
  width: 640px;

  table {
    border-spacing: 0;
    width: 100%;
    /* border: 1px solid black; */

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    font-family: Lato;
    padding: 0.5rem;
  }
`;
