import styled from "styled-components";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import { getGamesByIdxs } from "../../api/api";
import RecommendationSys from "../../api/gamesRecommender";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
  .card {
    margin: 0 30px 40px;
  }
`;

function GamesList({ selectedGames, onClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      getGamesByIdxs(
        RecommendationSys.getResult()
          .slice(0, 4)
          .map((g) => g.idx)
      )
    );
  }, []);

  return (
    <Root>
      {data.map((game) => (
        <div className="card" key={game.id}>
          <GameCard game={game} onClick={onClick} />
        </div>
      ))}
    </Root>
  );
}

export default GamesList;
