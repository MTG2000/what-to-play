import styled from "styled-components";
import { useEffect } from "react";
import { Portal } from "../Portal/Portal";
import { motion, AnimatePresence } from "framer-motion";

const Root = styled.div`
  position: fixed;
  z-index: 10000;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  display: flex;

  align-items: center;
  justify-content: center;

  .overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgb(100 100 100 / 50%);
    -webkit-tap-highlight-color: transparent;
  }

  .content {
    height: 100%;
    max-width: 660px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Dialog({ isOpen, onClose, ...props }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }, [isOpen]);

  return (
    <Portal>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Root
            as={motion.div}
            exit={{
              opacity: 0,
              transition: { ease: "easeInOut" },
            }}
          >
            <div className="overlay" onClick={onClose} />
            <motion.div
              initial={{ opacity: 0, y: "100vh" }}
              animate={{ opacity: 1, y: 0, transition: { type: "spring" } }}
              className="content"
            >
              {props.children}
            </motion.div>
          </Root>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default Dialog;
