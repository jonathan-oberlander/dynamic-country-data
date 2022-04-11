import { Link } from "wouter";
import { AppTitle } from "../styled/typography";
import styled from "styled-components";

export function Navigation() {
  return (
    <Wrapper>
      <Navi>
        <AppTitle>World Countries Data</AppTitle>
        <div>
          <Link href="/">Home</Link>
          <span className="separator">|</span>
          <Link href="/stat">Table</Link>
        </div>
      </Navi>
    </Wrapper>
  );
}

export const Wrapper = styled.section`
  position: relative;
  width: 640px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
`;

const Navi = styled.nav`
  font-family: Lato;
  width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #f0f2f5;
  border-radius: 3px;

  .separator {
    margin: 0 10px;
  }

  a,
  a:visited {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
