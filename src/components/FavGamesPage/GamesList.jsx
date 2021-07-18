import styled from "styled-components";
import data from "../../api/data.json";
import GameCard from "./GameCard";

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
  return (
    <Root>
      {data.allGames.map((game) => (
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
