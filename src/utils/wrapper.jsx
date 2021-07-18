import { BrowserRouter as Router } from "react-router-dom";

function Wrapper(props) {
  return <Router>{props.children}</Router>;
}

export default Wrapper;
