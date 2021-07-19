import React from "react";
import { motion } from "framer-motion";

const ghostVariants = {
  selected: {
    y: [0, -6, 0, -6, 0, -6, 0],
    transition: {
      duration: 2,
      type: "linear",
      delay: 2,
    },
  },
};

const eyesVariants = {
  selected: {
    fill: ["#3e3d42", "#ff0000", "#3e3d42", "#ff0000", "#3e3d42"],
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

const HorrorIcon = React.forwardRef((props, ref) => (
  <motion.svg
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    style={props.style}
    variants={ghostVariants}
  >
    <g>
      <g>
        <g fill="#d8d7da">
          <path d="m487.95 381.5c-22.87 8.24-50.37 13.04-79.95 13.04a261.608 261.608 0 0 1 -32-1.93v-224.61a152 152 0 0 0 -304 0v136l1.73 94.49c13.19 55.01 100.51 97.51 206.27 97.51 34.63 0 67.28-4.56 96-12.62 66.56-18.67 112-56.17 112-99.38 0-.84-.02-1.67-.05-2.5zm-311-104.18a92.077 92.077 0 0 1 -.95-13.32c0-26.51 10.75-48 24-48s24 21.49 24 48a92.077 92.077 0 0 1 -.95 13.32z" />
          <path d="m73.73 398.49c13.19 55.01 100.51 97.51 206.27 97.51" />
          <path d="m312 304h-48a40 40 0 0 0 -40 40v24a32 32 0 0 0 32 32 32 32 0 0 0 32-32v-4a12 12 0 0 1 12-12h12z" />
          <path d="m120 352h-12a12 12 0 0 0 -12 12v4a32 32 0 0 1 -64 0v-24a40 40 0 0 1 40-40h48z" />
        </g>
        <motion.ellipse
          variants={eyesVariants}
          cx="264"
          cy="168"
          fill="#3e3d42"
          rx="24"
          ry="48"
        />
        <motion.ellipse
          variants={eyesVariants}
          cx="144"
          cy="168"
          fill="#3e3d42"
          rx="24"
          ry="48"
        />
        <path
          d="m224 264a92.077 92.077 0 0 1 -.95 13.32h-46.1a92.077 92.077 0 0 1 -.95-13.32c0-26.51 10.75-48 24-48s24 21.49 24 48z"
          fill="#50206c"
        />
        <path
          d="m223.05 277.32c-2.87 20.03-12.11 34.68-23.05 34.68s-20.18-14.65-23.05-34.68z"
          fill="#ff5023"
        />
      </g>
      <g>
        <path d="m495.95 381.21a8.007 8.007 0 0 0 -10.71-7.24c-22.82 8.22-49.53 12.57-77.24 12.57-8.1 0-16.14-.37-24-1.11v-217.43a159.99 159.99 0 0 0 -160-160c-88.22 0-160 71.78-160 160v128.68a48.069 48.069 0 0 0 -40 47.32v24a40.04 40.04 0 0 0 40 40 41.29 41.29 0 0 0 4.17-.22c4.85 13.67 13.89 26.66 26.62 38.43.84.77 1.69 1.53 2.55 2.29q3.9 3.42 8.21 6.7c.96.72 1.93 1.44 2.92 2.16q2.955 2.145 6.11 4.21a198.975 198.975 0 0 0 24.13 13.52c39.08 18.64 89.26 28.91 141.29 28.91 34.59 0 67.62-4.35 98.16-12.92 72.69-20.39 117.84-61.42 117.84-107.08 0-.94-.02-1.86-.05-2.79zm-44.24 55.64c-18.86 16.4-45.79 29.83-77.87 38.83-28.73 8.06-61.17 12.32-93.84 12.32-49.69 0-97.43-9.71-134.41-27.35-32.39-15.44-54.17-35.74-62.16-57.7a40.185 40.185 0 0 0 8.86-6.66 39.766 39.766 0 0 0 11.71-28.29v-4a4 4 0 0 1 4-4h12a8 8 0 0 0 0-16h-12a20.02 20.02 0 0 0 -20 20v4a24 24 0 0 1 -48 0v-24a32.03 32.03 0 0 1 32-32h48a8 8 0 0 0 0-16h-40v-128c0-79.4 64.6-144 144-144a144.012 144.012 0 0 1 144 144v224.61a8 8 0 0 0 7.02 7.94 270.469 270.469 0 0 0 32.98 1.99 254.616 254.616 0 0 0 71.27-9.79c-2.58 15.46-11.98 30.56-27.56 44.1z" />
        <path d="m264 312h48a8 8 0 0 0 0-16h-48a48.055 48.055 0 0 0 -48 48v24a40 40 0 0 0 80 0v-4a4 4 0 0 1 4-4h12a8 8 0 0 0 0-16h-12a20.023 20.023 0 0 0 -20 20v4a24 24 0 0 1 -48 0v-24a32.036 32.036 0 0 1 32-32z" />
        <path d="m264 224c18.243 0 32-24.075 32-56s-13.757-56-32-56-32 24.075-32 56 13.757 56 32 56zm0-96c6.523 0 16 15.583 16 40s-9.477 40-16 40-16-15.583-16-40 9.477-40 16-40z" />
        <path d="m144 112c-18.243 0-32 24.075-32 56s13.757 56 32 56 32-24.075 32-56-13.757-56-32-56zm0 96c-6.523 0-16-15.583-16-40s9.477-40 16-40 16 15.583 16 40-9.477 40-16 40z" />
        <path d="m200 208c-18.24 0-32 24.07-32 56s13.76 56 32 56 32-24.07 32-56-13.76-56-32-56zm0 96c-4.69 0-10.9-8.05-14.03-21.65a43.23 43.23 0 0 1 28.06 0c-3.13 13.6-9.34 21.65-14.03 21.65zm15.97-37.78a58.743 58.743 0 0 0 -31.94 0q-.03-1.1-.03-2.22c0-24.42 9.48-40 16-40s16 15.58 16 40q0 1.125-.03 2.22z" />
      </g>
    </g>
  </motion.svg>
));

export default HorrorIcon;
