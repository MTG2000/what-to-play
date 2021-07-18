import styled from "styled-components";
import { withTransition } from "../../utils/withTransition";
import { motion } from "framer-motion";
import RightArrowIcon from "../../assets/icons/RightArrow";
import { useState } from "react";
import { Button } from "../SharedComponents";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding-top: 20vh;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: var(--fontVeryBig);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  li {
    font-size: var(--fontSmall);
    text-align: left;
    margin-bottom: 15px;
  }

  button {
    margin-top: 30px;
  }
`;

const ages = ["5 - 13", "13 - 18", "18 - 23", "23 - OO"];

const liVariants = {
  init: { scale: 1.0 },
  selected: {
    scale: 1.3,
    originX: 0,
    color: "#ffc107",
    transition: { type: "spring", stiffness: 300 },
  },
  hover: {
    scale: 1.2,
    originX: 0,
    color: "#00ffff",
    transition: { type: "spring", stiffness: 300 },
  },
};

const liArrowVariants = {
  init: { x: -50, scale: 0.5, opacity: 0 },
  selected: {
    x: -8,
    scale: 1,
    opacity: 1,
    fill: "#ffc107",
  },
  hover: {
    x: -8,
    scale: 0.8,
    opacity: 1,
    fill: "#00ffff",
  },
};

const MotionRightArrowIcon = motion(RightArrowIcon);

function AgePage() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <Root>
      <h1>How Old Are You</h1>
      <ul>
        {ages.map((a, i) => (
          <motion.li
            variants={liVariants}
            initial="init"
            animate={selectedIdx === i ? "selected" : "init"}
            whileHover={selectedIdx === i ? "selected" : "hover"}
            key={i}
            onClick={() => setSelectedIdx(i)}
          >
            <MotionRightArrowIcon
              variants={liArrowVariants}
              style={{
                position: "absolute",
                top: 0,
                left: -30,
                width: 30,
                height: 30,
                marginInlineEnd: 30,
                verticalAlign: "middle",
              }}
            />{" "}
            {a}
          </motion.li>
        ))}
      </ul>
      {selectedIdx !== -1 && (
        <Button
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2, boxShadow: "0 0 15px white" }}
          href="/choose-genre"
        >
          Next
        </Button>
      )}
    </Root>
  );
}

export default withTransition(AgePage);
