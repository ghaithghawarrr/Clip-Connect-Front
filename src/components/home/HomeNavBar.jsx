import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarList from '../multispot/NavBarList';
import Button from '../multispot/Button';
import ButtonLight from '../multispot/ButtonLight';

export default function HomeNavBar() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goSignup = () => {
    navigate("/signup");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand xlabel" href="#">Clip&Connect</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavBarList />

        </div>
        <Button name="Sign up" type="button" onClick={goSignup} />
        <div style={{ width: 8 }}></div>
        <ButtonLight name="Log in" type="button" onClick={goLogin} />
      </div>
    </nav>
  );
}
