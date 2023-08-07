// app/javascript/components/Greeting.js

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomGreeting } from "../redux/actions/greetingsActions";

const Greeting = (props) => {
  const { message, fetchRandomGreeting } = props;

  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.greetings.message,
  };
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
