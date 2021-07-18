import styled from "styled-components";
import { motion } from "framer-motion";
import ActionIcon from "../../assets/icons/ActionIcon";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SessionStorage } from "../../utils/SessionStorage";

const __padding = 150;
const __width = 50;
const __vw = window.innerWidth;
const __vh = window.innerHeight;

const icons = [
  { x: __padding, y: __padding },
  { x: __vw - __padding - __width + __width / 2, y: __padding },
  { x: __padding, y: __vh - __padding - __width },
  {
    x: __vw - __padding - __width + __width / 2,
    y: __vh - __padding - __width,
  },
];

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontVeryBig);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  button {
    margin-top: 30px;
  }

  .icon {
    --padding: 130px;
    --width: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
    background: #2196f3;
    cursor: pointer;
    /* clip-path: circle(var(--width) at var(--x) var(--y)); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .icon.icon1 {
    --x: ${icons[0].x}px;
    --y: ${icons[0].y}px;
  }
  .icon.icon2 {
    --x: ${icons[1].x}px;
    --y: ${icons[1].y}px;
  }
  .icon.icon3 {
    --x: ${icons[2].x}px;
    --y: ${icons[2].y}px;
  }
  .icon.icon4 {
    --x: ${icons[3].x}px;
    --y: ${icons[3].y}px;
  }
`;

const btnVariants = {
  init: {
    clipPath: "circle(0 at var(--x) var(--y))",
  },
  rest: {
    clipPath: "circle(60px at var(--x) var(--y))",
    zIndex: 1,
    transition: {
      zIndex: { delay: 1 },
    },
  },

  selected: {
    clipPath: "circle(2000px at var(--x) var(--y))",
    transition: {
      duration: 1,
    },
    zIndex: 3,
  },

  hover: {
    clipPath: "circle(70px at var(--x) var(--y))",
  },
};
const btnContentVariants = {
  init: (props) => ({
    x: `calc(${icons[props].x}px - 50%)`,
    y: `calc(${icons[props].y}px - 50%)`,
  }),
  rest: (props) => ({
    x: `calc(${icons[props].x}px - 50%)`,
    y: `calc(${icons[props].y}px - 50%)`,
  }),
  selected: {
    x: `calc(${__vw / 2}px - 50%)`,
    y: `calc(${__vh / 2}px - 50%)`,
    scale: 3,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const genres = [
  { title: "Action", icon: ActionIcon },
  { title: "Adventure", icon: ActionIcon },
  { title: "Puzzles", icon: ActionIcon },
  { title: "Sports", icon: ActionIcon },
];

function GenrePage() {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const history = useHistory();

  const handleClick = (idx) => {
    setSelectedIdx(idx);
    setTimeout(() => {
      SessionStorage.set("genre", genres[idx].title.toLowerCase());
      history.push("/choose-favourite-games");
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0, transition: { type: "spring" } }}
      exit={{ opacity: 0, y: "-100vh", transition: { ease: "easeInOut" } }}
    >
      <Root>
        <h1>What is your Favourite Genre</h1>
        {genres.map((g, i) => (
          <motion.div
            key={i}
            variants={btnVariants}
            initial="init"
            animate={selectedIdx === i ? "selected" : "rest"}
            whileHover={selectedIdx === i ? "selected" : "hover"}
            className={`icon icon${i + 1}`}
            onClick={() => handleClick(i)}
          >
            <motion.div
              variants={btnContentVariants}
              custom={i}
              className="content"
            >
              <g.icon style={{ width: 60, height: 60, marginBottom: 0 }} />{" "}
              <span>{g.title}</span>{" "}
            </motion.div>
          </motion.div>
        ))}
      </Root>
    </motion.div>
  );
}

export default GenrePage;
