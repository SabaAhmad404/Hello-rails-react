// app/javascript/redux/actions/greetingsActions.js

import axios from "axios";

export const setGreeting = (message) => {
  return { type: "SET_GREETING", payload: message };
};

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:3000/api/greetings/random")
      .then((response) => {
        dispatch(setGreeting(response.data.message));
      })
      .catch((error) => {
        console.error("Error fetching random greeting:", error);
      });
  };
};
