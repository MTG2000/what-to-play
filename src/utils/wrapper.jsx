import { BrowserRouter as Router } from "react-router-dom";

function Wrapper(props) {
  return <Router basename="/what-to-play">{props.children}</Router>;
}

export default Wrapper;
