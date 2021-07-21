import jsonData from "./data.json";

export function getAllInGenre(genre) {
  return jsonData.allGames.filter((game) => game.genre.includes(genre));
}

export function getGamesByIdxs(idxs) {
  let res = [];
  idxs.forEach((idx) => {
    res.push(jsonData.allGames[idx]);
  });
  return res;
}
