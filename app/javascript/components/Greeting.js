import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetings/greetingsSlice";

function Greeting() {
  const { greeting } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      <p>{greeting}</p>

      <a className="underline text-blue-600" href="/">
        Home
      </a>
    </>
  );
}

export default Greeting;
