import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  animate: {
    originX: "center",
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      yoyo: 24 / 5,
    },
  },
};

const pinVariants = {
  init: {
    fill: "#ffd422",
  },
  animate: (props) => ({
    fill: ["#ffd422", "#09ecec", "#ffd422"],
    transition: {
      duration: 0.25,
      delay: 0.25 * props,
    },
  }),
};

const bgVariants = {
  init: {},
  animate: (props) => ({
    fill: "#34c9c9",
    transition: {
      delay: 0.25 * 24,
    },
  }),
};

const CpuIcon = React.forwardRef((props, ref) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512", ...props.style }}
    xmlSpace="preserve"
    className=""
    ref={ref}
    variants={svgVariants}
    initial="init"
    animate="animate"
  >
    <g>
      <motion.rect
        variants={bgVariants}
        xmlns="http://www.w3.org/2000/svg"
        x="58.54"
        y="58.54"
        width="394.93"
        height="394.93"
        fill="#3ee947"
        data-original="#57a4ff"
        className=""
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="202.41"
          y="182.41"
          width="147.17"
          height="147.17"
          fill="#21b645"
          data-original="#78b9eb"
          className=""
        />
        <rect
          x="407"
          y="141.67"
          width="33.5"
          height="33.5"
          fill="#21b645"
          data-original="#78b9eb"
          className=""
        />
        <rect
          x="407"
          y="198"
          width="33.5"
          height="33.5"
          fill="#21b645"
          data-original="#78b9eb"
          className=""
        />
      </g>
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="182.41"
        y="182.41"
        width="147.17"
        height="147.17"
        fill="#ffb655"
        data-original="#ffb655"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_0"
        x="453.46"
        y="84.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_1"
        x="453.46"
        y="147.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_2"
        x="453.46"
        y="210.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_3"
        x="453.46"
        y="273.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_4"
        x="453.46"
        y="336.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_5"
        x="453.46"
        y="399.83"
        width="51.04"
        height="27.333"
        fill="#ffe477"
        data-original="#ffe477"
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={24}
          x="7.5"
          y="84.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
        <motion.rect
          variants={pinVariants}
          custom={23}
          x="7.5"
          y="147.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
        <motion.rect
          variants={pinVariants}
          custom={22}
          x="7.5"
          y="210.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
        <motion.rect
          variants={pinVariants}
          custom={21}
          x="7.5"
          y="273.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
        <motion.rect
          variants={pinVariants}
          custom={20}
          x="7.5"
          y="336.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
        <motion.rect
          variants={pinVariants}
          custom={19}
          x="7.5"
          y="399.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_6"
        x="399.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_7"
        x="336.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_8"
        x="273.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_9"
        x="210.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_10"
        x="147.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_11"
        x="84.83"
        y="453.46"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_12"
        x="399.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_13"
        x="336.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_14"
        x="273.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_15"
        x="210.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_16"
        x="147.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        id="SVGCleanerId_17"
        x="84.83"
        y="7.5"
        width="27.333"
        height="51.04"
        fill="#ffd422"
        data-original="#ffd422"
        className=""
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="387"
          y="141.67"
          width="33.5"
          height="33.5"
          fill="#ff3f62"
          data-original="#ff3f62"
        />
        <rect
          x="387"
          y="198"
          width="33.5"
          height="33.5"
          fill="#ff3f62"
          data-original="#ff3f62"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={7}
          variants={pinVariants}
          id="SVGCleanerId_0_1_"
          x="453.46"
          y="84.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={8}
          variants={pinVariants}
          id="SVGCleanerId_1_1_"
          x="453.46"
          y="147.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={9}
          variants={pinVariants}
          id="SVGCleanerId_2_1_"
          x="453.46"
          y="210.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={10}
          variants={pinVariants}
          id="SVGCleanerId_3_1_"
          x="453.46"
          y="273.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={11}
          variants={pinVariants}
          id="SVGCleanerId_4_1_"
          x="453.46"
          y="336.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={12}
          variants={pinVariants}
          id="SVGCleanerId_5_1_"
          x="453.46"
          y="399.83"
          width="51.04"
          height="27.333"
          fill="#ffe477"
          data-original="#ffe477"
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={13}
          id="SVGCleanerId_6_1_"
          x="399.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={14}
          id="SVGCleanerId_7_1_"
          x="336.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={15}
          id="SVGCleanerId_8_1_"
          x="273.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={16}
          id="SVGCleanerId_9_1_"
          x="210.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={17}
          id="SVGCleanerId_10_1_"
          x="147.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={18}
          id="SVGCleanerId_11_1_"
          x="84.83"
          y="453.46"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={6}
          variants={pinVariants}
          id="SVGCleanerId_12_1_"
          x="399.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={5}
          variants={pinVariants}
          id="SVGCleanerId_13_1_"
          x="336.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={4}
          variants={pinVariants}
          id="SVGCleanerId_14_1_"
          x="273.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={3}
          variants={pinVariants}
          id="SVGCleanerId_15_1_"
          x="210.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={2}
          variants={pinVariants}
          id="SVGCleanerId_16_1_"
          x="147.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          custom={1}
          variants={pinVariants}
          id="SVGCleanerId_17_1_"
          x="84.83"
          y="7.5"
          width="27.333"
          height="51.04"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <motion.rect
        variants={bgVariants}
        xmlns="http://www.w3.org/2000/svg"
        x="58.54"
        y="58.54"
        width="60"
        height="394.93"
        fill="#1eb418"
        data-original="#006df0"
        className=""
      />
      <rect
        xmlns="http://www.w3.org/2000/svg"
        x="182.41"
        y="182.41"
        width="20"
        height="147.17"
        fill="#ff9811"
        data-original="#ff9811"
        className=""
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          variants={pinVariants}
          custom={22}
          x="7.5"
          y="210.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={23}
          x="7.5"
          y="147.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={24}
          x="7.5"
          y="84.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={19}
          x="7.5"
          y="399.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={21}
          x="7.5"
          y="273.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={20}
          x="7.5"
          y="336.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={9}
          x="453.44"
          y="210.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={8}
          x="453.44"
          y="147.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={7}
          x="453.44"
          y="84.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={12}
          x="453.44"
          y="399.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={10}
          x="453.44"
          y="273.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
        <motion.rect
          variants={pinVariants}
          custom={11}
          x="453.44"
          y="336.83"
          width="20"
          height="27.333"
          fill="#ffd422"
          data-original="#ffd422"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="387"
          y="141.67"
          width="20"
          height="33.5"
          fill="#c70024"
          data-original="#c70024"
          className=""
        />
        <rect
          x="387"
          y="198"
          width="20"
          height="33.5"
          fill="#c70024"
          data-original="#c70024"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="405.92"
          y="406"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="380.92"
          y="406"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="330.92"
          y="406"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="355.92"
          y="406"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="405.92"
          y="380.17"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="380.92"
          y="380.17"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="330.92"
          y="380.17"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="355.92"
          y="380.17"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="228"
          y="200"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="253"
          y="200"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <rect
          x="203"
          y="200"
          width="15"
          height="15"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <path
          d="M512,119.667V77.333h-51.04V51.04h-26.293V0h-42.334v51.04h-20.666V0h-42.334v51.04h-20.666V0   h-42.334v51.04h-20.667V0h-42.333v51.089l-20.667-0.007V0h-42.333v51.069l-20.667-0.007V0H77.333v51.048L51.04,51.04v26.293H0   v42.334h51.04v20.666H0v42.334h51.04v20.666H0v42.334h51.04v20.666H0v42.334h51.04v20.666H0v42.334h51.04v20.666H0v42.334h51.04   v26.243l26.293,0.003V512h42.333v-51.082l20.667,0.002V512h42.333v-51.074l20.667,0.002V512h42.333v-51.066l20.667,0.002V512   h42.334v-51.059l20.666,0.002V512h42.334v-51.051l20.666,0.002V512h42.334v-51.043l26.293,0.003v-26.293H512v-42.334h-51.04v-2.583   l-15-0.05v56.26H66.03V66.029h379.93V374.75l15,0.05v-3.133H512v-42.334h-51.04v-20.666H512v-42.334h-51.04v-20.666H512v-42.334   h-51.04v-20.666H512v-42.334h-51.04v-20.666C460.96,119.667,512,119.667,512,119.667z M460.964,92.333H497v12.334h-36.036V92.333z    M407.333,15h12.334v36.036h-12.334V15z M344.333,15h12.334v36.036h-12.334V15z M281.333,15h12.334v36.036h-12.334V15z M155.333,15   h12.333v36.036h-12.333L155.333,15L155.333,15z M92.333,15h12.333v36.036H92.333V15z M51.036,104.667H15V92.333h36.036V104.667z    M51.036,167.667H15v-12.334h36.036V167.667z M51.036,230.667H15v-12.334h36.036V230.667z M51.036,356.667H15v-12.334h36.036   V356.667z M51.036,419.667H15v-12.334h36.036V419.667z M104.667,497H92.333v-36.036h12.333L104.667,497L104.667,497z M167.667,497   h-12.333v-36.036h12.333L167.667,497L167.667,497z M230.667,497h-12.333v-36.036h12.333L230.667,497L230.667,497z M293.667,497   h-12.334v-36.036h12.334V497z M356.667,497h-12.334v-36.036h12.334V497z M419.667,497h-12.334v-36.036h12.334V497z    M460.964,407.333H497v12.334h-36.036V407.333z M51.036,293.667H15v-12.334h36.036V293.667z M218.333,15h12.333v36.036h-12.333   L218.333,15L218.333,15z M460.964,344.333H497v12.334h-36.036V344.333z M460.964,281.333H497v12.334h-36.036V281.333z    M460.964,218.333H497v12.334h-36.036V218.333z M460.964,155.333H497v12.334h-36.036V155.333z"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <path
          d="M355.05,205.5v-15h-17.963v-15.587H321.5V157l-15-0.05v17.963h-14V157l-15-0.05v17.963h-14V157   l-15-0.05v17.963h-14V157l-15-0.05v17.963h-14V157l-15-0.05v17.963h-15.587V190.5H157l-0.05,14.95l17.963,0.035V219.5H157   l-0.05,14.95l17.963,0.035V248.5H157l-0.05,14.95l17.963,0.035V277.5H157l-0.05,14.95l17.963,0.035V306.5H157l-0.05,14.95   l17.963,0.035v15.602H190.5V355l15,0.05v-17.963h14V355l15,0.05v-17.963h14V355l15,0.05v-17.963h14V355l15,0.05v-17.963h14V355   l15,0.05v-17.963h15.587v-15.622l17.963,0.035v-15h-17.963v-14.035l17.963,0.035v-15h-17.963v-14.035l17.963,0.035v-15h-17.963   v-14.035l17.963,0.035v-15h-17.963v-14.035L355.05,205.5z M322.087,322.087H189.913V189.913h132.174L322.087,322.087   L322.087,322.087z"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="293.67"
          y="260.08"
          width="15"
          height="42"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="293.67"
          y="210.08"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="293.67"
          y="235.08"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
      </g>
      <polygon
        xmlns="http://www.w3.org/2000/svg"
        points="204.28,309.529 238.22,309.58 238.22,294.58 204.33,294.58 "
        fill="#1d1d1f"
        data-original="#1d1d1f"
        className=""
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="261.84"
          y="91"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="236.84"
          y="91"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="286.84"
          y="91"
          width="135.5"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <motion.polygon
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0 }}
          points="147.05,219.5 116,219.5 116,154 77.83,154 77.78,169 101,169 101,234.45 147.05,234.5  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <polygon
          style={{ strokeDashoffset: -2, strokeDasharray: 200 }}
          points="147.05,190.55 139.5,190.5 139.5,91 77.83,91 77.78,106 124.5,106 124.5,205.45    147.05,205.5  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <polygon
          points="86.83,248.5 86.83,280 77.83,280 77.78,295 101.83,295 101.83,263.5 147,263.5    147.05,248.55  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <polygon
          points="147.05,277.55 107,277.5 107,343 77.83,343 77.78,357.95 122,358 122,292.5 147,292.5  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <polygon
          points="77.833,406 77.833,421 141.833,421 141.833,321.5 147,321.5 147,306.5 126.833,306.5    126.833,406  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          x="185.67"
          y="406"
          width="56.667"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="277.33"
          y="406"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
        <rect
          x="252.33"
          y="406"
          width="15"
          height="15"
          fill="#ffffff"
          data-original="#ffffff"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M428,134.167h-48.5v48.5H428V134.167z M413,167.667h-18.5v-18.5H413V167.667z"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <path
          d="M428,190.5h-48.5V239H428V190.5z M413,224h-18.5v-18.5H413V224z"
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
        <polygon
          points="421,278.08 406,278.029 406,341.08 421,341.13  "
          fill="#1d1d1f"
          data-original="#1d1d1f"
          className=""
        />
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </motion.svg>
));

export default CpuIcon;
