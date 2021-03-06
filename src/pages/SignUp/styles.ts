import styled from "styled-components";
import { shade } from "polished";
import signUpBackground from "../../assets/sign-up-background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  a {
    display: block;
    margin-top: 24px;
    color: #f4ede8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }

  > a {
    display: block;
    margin-top: 24px;
    color: #f4ede8;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
