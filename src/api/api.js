import jsonData from "./data.json";

export function getAllInGenre(genre) {
  return jsonData.allGames.filter((game) => game.genre.includes(genre));
}

export function getRecommended(genre, favGames, age) {
  let tagPoints = {};
  for (const i of favGames) {
    const game = jsonData.allGames[i];
    game.genre.forEach((g) => {
      if (tagPoints[g]) tagPoints[g] += 1;
      else tagPoints[g] = 1;
    });

    game.tags.forEach((g) => {
      if (tagPoints[g]) tagPoints[g] += 1;
      else tagPoints[g] = 1;
    });
  }

  let filteredGames = [];
  for (let i = 0; i < jsonData.allGames.length; i++) {
    const game = jsonData.allGames[i];
    if (!game.genre.includes(genre)) continue;
    let res = { rating: 0, idx: i };

    game.genre.forEach((g) => {
      if (tagPoints[g]) res.rating += tagPoints[g];
    });

    game.tags.forEach((g) => {
      if (tagPoints[g]) res.rating += tagPoints[g];
    });
    filteredGames.push(res);
  }

  filteredGames.sort((g1, g2) => {
    if (g1.rating === g2.rating) return 0;
    if (g1.rating > g2.rating) return -1;
    return 1;
  });

  console.log(filteredGames);
}
