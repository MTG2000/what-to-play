import styled from "styled-components";
import { motion } from "framer-motion";
import GamesList from "./GamesList";
import { useState, useEffect } from "react";
import { Button } from "../SharedComponents";
import { useHistory } from "react-router-dom";
import RecommendationSys from "../../api/gamesRecommender";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 10vh;
  padding-bottom: 150px;
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
  const [selectedGames, setSelectedGames] = useState([]);
  const history = useHistory();

  const handleClick = (curId, isAdd) => {
    if (isAdd) {
      setSelectedGames([...selectedGames, curId]);
    } else {
      setSelectedGames(selectedGames.filter((id) => id !== curId));
    }
  };

  const handleNext = () => {
    RecommendationSys.favGames = selectedGames;
    history.push("/choose-favourite-image");
  };

  useEffect(() => {
    document.title = "Your Favourite Games";
    document.dispatchEvent(new CustomEvent("change-progress", { detail: 60 }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0, transition: { type: "spring" } }}
      exit={{ opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <Root>
        {" "}
        <h1>
          Pick{" "}
          <span style={{ color: "#4caf50" }}>
            {Math.max(3 - selectedGames.length, 0)}
          </span>{" "}
          more of your Favourite Games
        </h1>
        <GamesList onClick={handleClick} selectedGames={selectedGames} />
        {selectedGames.length >= 3 && (
          <Button
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2, boxShadow: "0 0 15px white" }}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Root>
    </motion.div>
  );
}

export default FavGamesPage;
