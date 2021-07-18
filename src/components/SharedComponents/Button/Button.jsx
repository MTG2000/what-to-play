import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const Root = styled.button`
  border: 3px solid white;
  border-radius: 23px;
  padding: 12px 40px;
  background: transparent;
  color: white;
  font-family: inherit;
  font-size: var(--fontSmall);
  text-shadow: 0 0 16px white;
  cursor: pointer;
`;

function Button(props) {
  const history = useHistory();

  const handleClick = () => {
    if (props.onClick) props.onClick();
    else if (props.href) history.push(props.href);
  };

  return (
    <Root
      animate={{ scale: 1, boxShadow: "0 0 10px 0px #FFFFFF" }}
      whileHover={{ scale: 1.2, boxShadow: "0 0 15px 0px #FFFFFF" }}
      whileTap={{ scale: 0.9 }}
      as={motion.button}
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </Root>
  );
}

export default Button;
