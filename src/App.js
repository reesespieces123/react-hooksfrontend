import "./App.css";
// importing components from react-router-dom package
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
// import FooterComponent from "./components/FooterComponent";
// import HeaderComponent from "./components/HeaderComponent";
// import ListEmployeeComponent from "./components/ListEmployeeComponent";
// import AddEmployeeComponent from "./components/AddEmployeeComponent";

//import Home page
import Home from "./pages/Home";
// import Auditor page
import Auditor from "./pages/Auditor";
// import Employee page
import Employee from "./pages/Employee";
// import Reviewer page
import Reviewer from "./pages/Reviewer";

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Auditor" component={Auditor} />
      <Route path="/Employee" component={Employee} />
      <Route path="/Reviewer" component={Reviewer} />

      {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
