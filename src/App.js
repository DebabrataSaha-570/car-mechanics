import logo from './logo.svg';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/Booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
