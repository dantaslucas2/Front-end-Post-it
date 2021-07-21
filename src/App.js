import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Conteudo from "./pages/conteudo/conteudo";

function App() {
  return (
    <>
      <Router>
        <Conteudo />
      </Router>
    </>
  );
}

export default App;
