import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import AgePage from "./components/AgePage/AgePage";
import { AnimatePresence } from "framer-motion";
import GenrePage from "./components/GenrePage/GenrePage";
import FavGamesPage from "./components/FavGamesPage/FavGamesPage";
import FavImagePage from "./components/FavImagePage/FavImagePage";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import RecommendationsPage from "./components/RecommendationsPage/RecommendationsPage";
import Progress from "./components/SharedComponents/Progress/Progress";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Progress />
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.key}>
          <Route path="/choose-age">
            <AgePage />
          </Route>
          <Route path="/choose-genre">
            <GenrePage />
          </Route>
          <Route path="/choose-favourite-games">
            <FavGamesPage />
          </Route>
          <Route path="/choose-favourite-image">
            <FavImagePage />
          </Route>
          <Route path="/loading-page">
            <LoadingPage />
          </Route>
          <Route path="/recommendations-page">
            <RecommendationsPage />
          </Route>
          <Route exact path="/">
            <StartPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
