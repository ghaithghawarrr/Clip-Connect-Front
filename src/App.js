import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Component } from 'react';
import './styles/mystyle.css';
import { Login, Signup, Hero, ForgetPassword, Verification, ResetPassword, Success, Home, BarberProfile, AboutUs, Features, Support, BarberSetup, MyProfile } from './import.js'



class App extends Component {
  render() {
    return (<>
      <Router>
        <Routes>
          <Route path="/" index exact element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/home" element={<Home />} />
          <Route path="/barber" element={<BarberProfile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/support" element={<Support />} />
          <Route path="/barber-setup" element={<BarberSetup />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>)
  };
}

export default App;
