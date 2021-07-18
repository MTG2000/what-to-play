import styled from "styled-components";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import { getAllInGenre } from "../../api/api";
import { SessionStorage } from "../../utils/SessionStorage";

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
    setData(getAllInGenre(SessionStorage.get("genre")));
  }, []);

  return (
    <Root>
      {data.map((game) => (
        <div className="card" key={game.id}>
          <GameCard
            id={game.id}
            title={game.title}
            img={game.img}
            onClick={onClick}
            isSelected={selectedGames.some((id) => id === game.id)}
          />
        </div>
      ))}
    </Root>
  );
}

export default GamesList;
