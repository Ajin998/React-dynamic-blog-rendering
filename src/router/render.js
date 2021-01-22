import { Component } from "react";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import notFound from "../components/notFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class Render extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blog/:id" exact component={Blog} />
          <Route component={notFound} />
        </Switch>
      </Router>
    );
  }
}

export default Render;
