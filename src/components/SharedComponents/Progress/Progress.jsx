import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 7px;
  background: #00e0cb;
  box-shadow: 0 0 16px 2px cyan;
  width: 100%;
  z-index: 3;
`;

function Progress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const eventListener = ({ detail }) => {
      setProgress(detail / 100);
    };
    document.addEventListener("change-progress", eventListener);
    return () => {
      document.removeEventListener("change-progress", eventListener);
    };
  }, []);

  return (
    <Root
      as={motion.div}
      initial={{ scaleX: 0 }}
      animate={
        progress <= 1
          ? { scaleX: progress, originX: 0 }
          : { y: -200, opacity: 0 }
      }
      transition={{ duration: 0.8, easings: "easeInOut" }}
    ></Root>
  );
}

export default Progress;
