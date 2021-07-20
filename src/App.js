import './App.css';
import Home from './pages/home/home'
import Formulario from './pages/formulario/formulario';
import Contatos from './pages/contact/contatos';
import Portifolio from './pages/portifolio/portifolio';
import Navbar from './componentes/navbar/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
      <Portifolio/>
      <Formulario/>
      <Contatos/>
    </Router>
    </>
  );
}

export default App;
