import TemplateGeneral from "./template/TemplateGeneral";
import Home from "./components/Home";
import Africa from "./components/Africa";
import America from "./components/America";
import { Router, Route, IndexRoute, browserHistory } from "react-router-3"

import "./style.css"


function App() {
  console.log(browserHistory)
  return (

    // <Router history={browserHistory}>
    //   <Route path="/" component={Home} />
    //   <Route path="/africa" component={Africa} />
    //   <Route path="/america" component={America} />
    // </Router>

    <Router history={browserHistory}>
      <Route path="/" component={TemplateGeneral}>
        <IndexRoute component={Home} />
        <Route path="/africa" component={Africa} />
        <Route path="/america" component={America} />
      </Route>
    </Router>

  );
}

export default App;