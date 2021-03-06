import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  selected: {
    transition: {},
  },
};
const gVariants = {
  selected: {
    rotateZ: [0, -20, 0, -20, 0],
    transition: {
      rotateZ: {
        times: [0, 0.1, 0.5, 0.6, 1],
        delay: 2,
      },
    },
  },
};

const pathVariants = {
  selected: {
    x: [0, -40, 0, -40, 0],
    transition: {
      x: {
        times: [0, 0.1, 0.5, 0.6, 1],
        delay: 2,
      },
    },
  },
};

const ActionIcon = React.forwardRef((props, ref) => (
  <motion.svg
    id="Capa_1"
    enableBackground="new 0 0 512 512"
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    style={props.style}
    variants={svgVariants}
  >
    <motion.g variants={gVariants}>
      <path
        d="m75 151c-8.291 0-15 6.709-15 15v10.386c0 15.293-8.906 29.473-22.705 36.094-4.248 2.036-7.28 5.962-8.203 10.576l-27.627 138.12c-.967 4.79-1.465 9.756-1.465 14.824 0 41.353 33.647 75 75 75 35.624 0 66.562-25.327 73.535-60.22l5.956-29.78h40.509c24.814 0 45-20.186 45-45v-15h106c8.291 0 15-6.709 15-15v-120-15zm135 165c0 8.276-6.724 15-15 15h-34.506l6-30h43.506z"
        fill="#e62e77"
      />
      <path
        d="m37.295 212.479c-4.248 2.036-7.28 5.962-8.203 10.576l-27.627 138.121c-.967 4.79-1.465 9.756-1.465 14.824 0 41.353 33.647 75 75 75 35.624 0 66.562-25.327 73.535-60.22l5.956-29.78h40.509c24.814 0 45-20.186 45-45v-15h106c8.291 0 15-6.709 15-15v-120h-301v10.386c0 15.293-8.906 29.472-22.705 36.093zm129.199 88.521h43.506v15c0 8.276-6.724 15-15 15h-34.506z"
        fill="#cc0050"
      />
      <path
        d="m72.543 222.027c-4.493 5.198-9.474 9.981-15.385 13.7l-26.279 131.381c-.586 2.871-.879 5.86-.879 8.892 0 24.814 20.186 45 45 45 21.387 0 39.932-15.176 44.121-36.108l19.341-96.711c-29.102-13.53-52.512-36.984-65.919-66.154z"
        fill="#51489a"
      />
      <motion.path
        variants={pathVariants}
        d="m467 121c-8.291 0-15-6.709-15-15v-30c0-8.291 6.709-15 15-15s15 6.709 15 15v30c0 8.291-6.709 15-15 15z"
        fill="#51489a"
      />
      <circle cx="90" cy="316" fill="#39326c" r="15" />
      <motion.path
        variants={pathVariants}
        d="m497 91h-302c-41.353 0-75 33.647-75 75s33.647 75 75 75h302c8.291 0 15-6.709 15-15v-60-60c0-8.291-6.709-15-15-15z"
        fill="#ff6b6b"
      />
      <motion.path
        variants={pathVariants}
        d="m195 241h302c8.291 0 15-6.709 15-15v-60h-392c0 41.353 33.647 75 75 75z"
        fill="#e62e77"
      />
    </motion.g>
  </motion.svg>
));

export default ActionIcon;
