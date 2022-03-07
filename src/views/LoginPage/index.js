import { connect } from "react-redux";
import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

import { PATHS } from "../../routePaths";

import { validator } from "../../utils/validator";

import { userLoginRequest } from "../../actions/auth";

import Icon from "../../components/Icon";
import LoginPageForm from "./components/LoginPageForm";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      error: "",
      formErrorMsg: {},
    };
  }

  handleInputChange = (e) => {
    const { formErrorMsg } = this.state;

    const name = e.target.name;
    const value = e.target.value;

    if (formErrorMsg[name]) {
      formErrorMsg[name] = "";
    }

    this.setState({ [name]: value, formErrorMsg });
  };

  validateForm = () => {
    const { email, password } = this.state;
    const formErrorMsg = {};

    if (validator.checkIsEmpty(password)) {
      formErrorMsg.password = "Please enter your password";
    }

    const emailValidation = validator.validateEmail(email);
    if (!emailValidation.isValid) {
      formErrorMsg.email = emailValidation.msg;
    }

    this.setState({ formErrorMsg });

    if (Object.keys(formErrorMsg).length) {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const hasError = this.validateForm();

    if (hasError) return;

    const { email, password } = this.state;
    const { userLoginRequest } = this.props;

    this.setState({ isLoading: true });
    const callbackSuccess = () => {
      this.setState({ isLoading: false });
    };

    const callbackError = (error) => {
      this.setState({ isLoading: false, error });
    };

    userLoginRequest(email, password, callbackSuccess, callbackError);
  };

  render() {
    const { email, password, isLoading, error, formErrorMsg } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Navigate to={PATHS.WELCOME} />;
    }

    return (
      <div className="login-page">
        <div className="login-page__card">
          <div className="login-page__icon">
            <Icon type="docsumo" />
          </div>
          <h1 className="login-page__heading">Login to Docsumo</h1>
          <LoginPageForm
            email={email}
            password={password}
            formErrorMsg={formErrorMsg}
            error={error}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            isLoading={isLoading}
          />
          <div className="login-page__footer">
            <p>Don't have an account?</p>
            <a
              href="#"
              title="Click here to create account"
              className="button button--md button--secondary"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginRequest: (email, password, callbackSuccess, callbackError) =>
    dispatch(userLoginRequest(email, password, callbackSuccess, callbackError)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
