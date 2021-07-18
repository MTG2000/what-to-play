import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import { motion } from "framer-motion";
const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontVeryBig);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  button {
    margin-top: 30px;
  }
`;

function FavGamesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0, transition: { type: "spring" } }}
      exit={{ opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <Root>
        {" "}
        <h1>Pick Your Most Favourite Games</h1>
      </Root>
    </motion.div>
  );
}

export default FavGamesPage;
