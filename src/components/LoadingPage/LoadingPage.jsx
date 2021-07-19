import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import { useState } from "react";
import { Button } from "../SharedComponents";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 10vh;
  padding-bottom: 120px;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontNormal);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  li {
    font-size: var(--fontSmall);
    text-align: left;
    margin-bottom: 15px;
  }

  button {
    margin-top: 60px;
  }
`;

function LoadingPage() {
  return (
    <Root>
      <h1>Loading</h1>
    </Root>
  );
}

export default withTransition(LoadingPage);
