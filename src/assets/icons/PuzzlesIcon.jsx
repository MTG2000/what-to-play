import React from "react";
import { motion } from "framer-motion";

const pieceVariants = {
  selected: {
    rotateZ: 360,
    x: 100,
    y: -98,
    transition: {
      rotateZ: {
        type: "linear",
        duration: 1,
        delay: 2,
      },
      delay: 3,
    },
  },
};

const PuzzlesIcon = React.forwardRef((props, ref) => (
  <motion.svg
    id="Capa_1"
    enableBackground="new 0 0 512 512"
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    style={props.style}
  >
    <g>
      <path
        d="m157 0c-30.376 0-55 24.624-55 55v135c0 8.284 6.716 15 15 15h50v22.5c0 20.711 16.789 37.5 37.5 37.5s37.5-16.789 37.5-37.5v-22.5h65l20-65v-75l-20-65z"
        fill="#00ec89"
      />
      <path
        d="m457 0h-150v65h-22.5c-20.711 0-37.5 16.789-37.5 37.5 0 20.711 16.789 37.5 37.5 37.5h22.5v65l65 20h75l65-20v-150c0-30.376-24.624-55-55-55z"
        fill="#ffb454"
      />
      <motion.path
        variants={pieceVariants}
        d="m55 512h135c8.284 0 15-6.716 15-15v-50h22.5c20.711 0 37.5-16.789 37.5-37.5 0-20.711-16.789-37.5-37.5-37.5h-22.5v-50c0-8.284-6.716-15-15-15h-35c-8.284 0-15 6.716-15 15v7.5c0 20.711-16.789 37.5-37.5 37.5-20.711 0-37.5-16.789-37.5-37.5v-7.5c0-8.284-6.716-15-15-15h-35c-8.284 0-15 6.716-15 15v135c0 30.376 24.624 55 55 55z"
        fill="#ff6378"
        style={{ zIndex: 2 }}
      />
      <path
        d="m372 182.5v22.5h-65v50c0 8.284 6.716 15 15 15h7.5c20.711 0 37.5 16.789 37.5 37.5 0 20.711-16.789 37.5-37.5 37.5h-7.5c-8.284 0-15 6.716-15 15v35c0 8.284 6.716 15 15 15h135c30.376 0 55-24.624 55-55v-150h-65v-22.5c0-20.711-16.789-37.5-37.5-37.5-20.711 0-37.5 16.789-37.5 37.5z"
        fill="#2ebeef"
      />
    </g>
  </motion.svg>
));

export default PuzzlesIcon;
