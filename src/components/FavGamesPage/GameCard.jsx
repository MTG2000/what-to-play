import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  width: 256px;
  height: 368px;
  background-color: black;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  border-radius: 15px;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: inherit;
  }

  h6 {
    height: 20%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fontSmall);
  }
`;

const cardVariants = {
  init: {
    scale: 1,
    boxShadow: "0 0 10px 0px #00ffff",
  },
  selected: {
    scale: 0.9,
    boxShadow: "0px 0px 12px 12px #4caf50",
    rotateX: 20,
    rotateY: -30,
    color: "#4caf50",
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 0 16px 5px #00ffff",
  },
  clicking: {
    scale: 1.02,
    boxShadow: "0 0 20px 15px #00ffff",
  },
};

function GameCard({ id, title, img, onClick, isSelected }) {
  return (
    <Root
      as={motion.div}
      variants={cardVariants}
      initial="init"
      animate={isSelected ? "selected" : "init"}
      whileHover={isSelected ? "selected" : "hover"}
      whileTap="clicking"
      onClick={() => onClick(id, !isSelected)}
      className={`${isSelected ? "selected" : ""}`}
    >
      <img src={img} alt={title} />
      <h6>{title.replaceAll("-", " ")}</h6>
    </Root>
  );
}

export default GameCard;
