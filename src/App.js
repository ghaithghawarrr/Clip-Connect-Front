import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Component } from 'react';
import './styles/mystyle.css';
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import BeBarber from './pages/auth/BeBarber.jsx'
import CheckEmail from './pages/auth/CheckEmail.jsx'
import VerifyCode from './pages/auth/VerifyCode.jsx'
import ResetPassword from './pages/auth/ResetPassword.jsx'
import SuccessResetPassword from './pages/auth/SuccessResetPassword.jsx'
import Home from './pages/home.jsx'
import Explore from './pages/Explore.jsx';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import ApiTest from "./components/ApiTest.jsx"


class App extends Component {
  render() {
    return (<>
      <Router>
        <Routes>
          <Route path="/" index exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bebarber" element={<BeBarber />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/verifycode" element={<VerifyCode />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/successresetpassword" element={<SuccessResetPassword />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/apitest" element={<ApiTest />} />
        </Routes>
      </Router>
    </>)
  };
}

export default App;
