import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./components/HomePage/Home";
import Eureka1 from "./components/Eureka1/Eureka1";
import Eureka2 from "./components/Eureka2/Eureka2";
import Eureka3 from "./components/Eureka3/Eureka3";
import Footer from './components/Footer/Footer';
import MainNavigation from './components/Navigation/MainNavigation';
import CreateAbstract from "./Abstracts/CreateAbstract";
import Feed from "./Abstracts/Feed";
import Auth from "./components/Auth/Auth";

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
          <Eureka2 />
        </Route>
        <Route path="/eureka3" exact>
          <Eureka3 />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/abstract/create" exact>
          <CreateAbstract />
        </Route>
        <Route path="/feed/:id" exact>
          <Feed />
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
