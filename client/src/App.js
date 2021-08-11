import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./components/HomePage/Home";
import Eureka1 from "./components/Eureka1/Eureka1";
import Footer from './components/Footer/Footer';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/eureka1" exact>
          <Eureka1 />
        </Route>
        <Route path="/eureka2" exact>
          Eureka 2.0
        </Route>
        <Route path="/eureka3" exact>
          Eureka 3.0
        </Route>
        <Route path="/auth" exact>
          Auth
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
