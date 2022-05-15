import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Game = ({ name, releaseDate, image, id }) => {
  // Load Details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{releaseDate}</p>
      <img src={image} alt="" />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  img {
    display: block;
    width: 100%;
    height: 309px;
    object-fit: cover;
  }
`;

export default Game;
