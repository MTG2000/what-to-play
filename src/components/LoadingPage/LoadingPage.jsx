import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import { useEffect } from "react";
import RecommendationSys from "../../api/gamesRecommender";
import { useHistory } from "react-router-dom";
import CpuIcon from "../../assets/icons/CpuIcon";

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
  const history = useHistory();

  useEffect(() => {
    RecommendationSys.processData();
    const timeout = setTimeout(() => {
      history.push("/recommendations-page");
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [history]);

  useEffect(() => {
    document.dispatchEvent(new CustomEvent("change-progress", { detail: 100 }));
  }, []);

  return (
    <Root>
      <h1>Processing...</h1>
      <CpuIcon
        style={{
          width: "50vw",
          maxWidth: 300,
          maxHeight: 300,
          marginTop: "var(--spaceNormal)",
        }}
      />
    </Root>
  );
}

export default withTransition(LoadingPage);
