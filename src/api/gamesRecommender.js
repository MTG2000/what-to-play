import jsonData from "./data.json";

class RecommenderSystem {
  _genre = "";
  _favGames = [];
  _favImg = [];
  points = {};

  init() {
    this._genre = "";
    this._favGames = [];
    this._favImg = [];
    this.points = {};
  }

  set genre(v) {
    this._genre = v;
  }

  get genre() {
    return this._genre;
  }

  set favGames(v) {
    this._favGames = v;
  }

  set favImg(v) {
    this._favImg = v;
  }

  processData() {
    this.points = {};
    for (const i of this._favGames) {
      const game = jsonData.allGames.find((g) => g.id === i);
      game.genre.forEach((g) => {
        if (this.points[g]) this.points[g] += 1;
        else this.points[g] = 1;
      });

      game.tags.forEach((g) => {
        if (this.points[g]) this.points[g] += 1;
        else this.points[g] = 1;
      });
    }

    for (const g of this._favImg) {
      if (this.points[g]) this.points[g] += 1;
      else this.points[g] = 1;
    }

    let filteredGames = [];
    for (let i = 0; i < jsonData.allGames.length; i++) {
      const game = jsonData.allGames[i];
      if (!game.genre.includes(this._genre) || this._favGames.includes(game.id))
        continue;
      let res = { rating: 0, idx: i };

      game.genre.forEach((g) => {
        if (this.points[g]) res.rating += this.points[g];
      });

      game.tags.forEach((g) => {
        if (this.points[g]) res.rating += this.points[g];
      });

      filteredGames.push(res);
    }

    filteredGames.sort((g1, g2) => {
      if (g1.rating === g2.rating) return 0;
      if (g1.rating > g2.rating) return -1;
      return 1;
    });
    sessionStorage.setItem(
      "filter-games",
      JSON.stringify(filteredGames.slice(0, 4))
    );
  }

  getResult() {
    return JSON.parse(sessionStorage.getItem("filter-games"));
  }
}

const RecommendationSys = new RecommenderSystem();
export default RecommendationSys;
