import styled from "styled-components";
import { Button } from "../SharedComponents";
import { withTransition } from "../../utils/withTransition";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontVeryBig);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }
`;

function StartPage() {
  return (
    <Root>
      <h1>Games Recommendations</h1>
      <p>
        We Suggest you some games that we think are Relevant According to a few
        quick questions
      </p>
      <Button
        whileHover={{ scale: 1.3, rotate: -10, boxShadow: "0 0 15px white" }}
        href="/choose-age"
      >
        Start
      </Button>
    </Root>
  );
}

export default withTransition(StartPage);
