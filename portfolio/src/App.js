import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header class="header">
        <h1> Christopher Nafrere </h1>

        <nav class="header__nav">
          <Link to="/"> <h2> Acceuil </h2> </Link>
          <Link to="/qui-suis-je"> <h2> Qui suis-je ? </h2> </Link>
          <Link to="/projet"> <h2> Projet </h2> </Link>
          <Link to="/contact"> <h2 class="header__nav__btn-contact"> Contact </h2> </Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
