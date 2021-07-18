import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import AgePage from "./components/AgePage/AgePage";
import { AnimatePresence } from "framer-motion";
import GenrePage from "./components/GenrePage/GenrePage";
import FavGamesPage from "./components/FavGamesPage/FavGamesPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
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
          <Route exact path="/">
            <StartPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;