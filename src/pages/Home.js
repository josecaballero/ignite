import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling & Animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // OJO: SI NO PONEMOS EL ARRAY DEPENDENCY VACÍO, SE EJECUTA SIN PARAR. SI QUEREMOS QUE SE EJECUTE CADA VEZ QUE CAMBIE EL ESTADO DE ALGO SE PONE AHÍ DICHO ELEMENTO.

  // Get the data back
  // const games = useSelector((state) => state.games);
  /* Extraemos lo que queremos de games  */
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => {
                return (
                  <Game
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    releaseDate={game.released}
                    image={game.background_image}
                  />
                );
              })}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                releaseDate={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                releaseDate={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                releaseDate={game.released}
                image={game.background_image}
              />
            );
          })}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  /*   min-height: 80vh;
 */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Home;
