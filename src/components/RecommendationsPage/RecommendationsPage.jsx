import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import GamesList from "./GamesList";
import { useEffect } from "react";
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
    margin-bottom: 30px;
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

function RecommendationsPage() {
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("change-progress", { detail: 101 }));
  }, []);

  return (
    <Root>
      <h1> We Recommend These Games for you</h1>
      <GamesList />
      <Button href="/">Start Again</Button>
    </Root>
  );
}

export default withTransition(RecommendationsPage);
