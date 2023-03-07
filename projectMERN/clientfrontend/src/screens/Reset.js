import React, { Component } from "react";
import Header from "../components/Header";
// import Message from "../components/LoadingError/Error";
// import Loading from "../components/LoadingError/Loading";
// import { useSelector } from "react-redux";

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/api/users/forgetpassword", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      });
  }
  render() {
    return (
      <>
        <Header />
        <div className="container d-flex flex-column justify-content-center align-items-center login-center">
          <form
            className="Login col-md-8 col-lg-4 col-11"
            onSubmit={this.handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <button type="submit" className="btn-btn-primary">
              Submit
            </button>
            <p className="froget-password text-right">
              <a href="/sign-up">Sign Up</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}
