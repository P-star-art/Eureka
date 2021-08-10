import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/eureka1" exact>
          Eureka 1.0
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
    </Router>
  );
}

export default App;
