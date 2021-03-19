import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageOne from "./Components/pageOne/PageOne";
import MainBody from "./Components/MainBody/MainBody";
import PageTwo from "./Components/pageTwo/PageTwo";
import PageThree from "./Components/pageThree/PageThree";
import PageFour from "./Components/pageFour/PageFour";
import Quotations from "./Components/Quotations/Quotations";
import Payment from "./Components/Payment/Payment";
import Confirm from "./Components/Confirm/Confirm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainBody} />
        <Route exact path="/pg1" component={PageOne} />
        <Route exact path="/pg2" component={PageTwo} />
        <Route exact path="/pg3" component={PageThree} />
        <Route exact path="/pg4" component={PageFour} />
        <Route exact path="/quote" component={Quotations} />
        <Route exact path="/pay" component={Payment} />
        <Route exact path="/done" component={Confirm} />
      </Switch>
    </Router>
  );
}

export default App;
