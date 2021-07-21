import styled from "styled-components";
import { Button } from "../SharedComponents";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    font-size: var(--fontVeryBig);
    color: var(--textLight);
  }

  p {
    font-size: var(--fontSmall);
    margin-bottom: 60px;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
  }
`;

function StartPage() {
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("change-progress", { detail: 0 }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0, transition: { type: "spring" } }}
      exit={{ opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <Root as={motion.div}>
        <h1>Games Recommendations</h1>
        <p>
          We Suggest you some games that we think are Relevant According to a
          few quick questions
        </p>
        <Button
          animate={{
            scale: 1,
            boxShadow: ["0 0 10px 0px #FFFFFF", "0 0 14px 2px #FFFFFF"],
          }}
          transition={{ boxShadow: { yoyo: Infinity, duration: 1.2 } }}
          whileHover={{
            scale: 1.3,
            rotate: -10,
            boxShadow: "0 0 15px 0px #FFFFFF",
          }}
          href="/choose-age"
        >
          Start
        </Button>
        <footer>
          Made by{" "}
          <a
            href="https://mtgdev.netlify.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--textLight)" }}
          >
            MTG
          </a>
        </footer>
      </Root>
    </motion.div>
  );
}

export default StartPage;
