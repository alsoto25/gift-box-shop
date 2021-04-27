import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/global/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/Content" component={Content} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
