import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/shared/Login/Login'
import Events from './Pages/Home/Events/Events'
import Admin from './Pages/shared/Admin/Admin'
import Header from './Pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />

          </Route>
        </Switch>

      </Router >
    </div >
  );
}

export default App;
