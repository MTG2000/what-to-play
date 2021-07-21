import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog } from "../SharedComponents";

const Root = styled.div`
  width: 500px;
  height: 321px;
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

const DialogContent = styled.div`
  width: 100%;
  max-width: 600px;
  background: #15182c;
  border-radius: 20px;
  color: white;
  overflow: hidden;

  .img-container {
    width: 100%;
    position: relative;
    padding-top: 56.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .dialog-body {
    padding: 20px;
  }
  h6 {
    margin: 0;
    font-size: var(--fontNormal);
    text-transform: capitalize;
  }

  p {
    font-size: 16px;
    letter-spacing: 0.6px;
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

function GameCard({ game, onClick }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Root
        as={motion.div}
        variants={cardVariants}
        initial="init"
        animate={"init"}
        whileHover={"hover"}
        whileTap="clicking"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        <img src={game.img} alt={game.title} />
        <h6>{game.title.replaceAll("-", " ")}</h6>
      </Root>
      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <div className="img-container">
            <img src={game.img} alt={game.title} />
          </div>
          <div className="dialog-body">
            <h6>{game.title.replaceAll("-", " ")}</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              laboriosam culpa autem voluptatem porro perferendis vero
              doloremque, eos ipsam molestiae possimus temporibus nihil!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GameCard;
