import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const reducer = (state, action) => {
  switch (action.type) {
    case "INVALID_TYPE":
      return { ...state, isValid: false, message: "Must not include number" };
    case "INVALID_LENGTH":
      return {
        ...state,
        isValid: false,
        message: "Must be between 3-15 characters",
      };
    case "VALID":
      return { ...state, isValid: true, message: "Ok" };
    default:
      return state;
  }
};

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [{ isValid, message }, dispatch] = useReducer(reducer, {
    isValid: true,
    message: "",
  });

  const handleOnChange = (value) => {
    if (value.length < 3 || value.length > 15) {
      dispatch({ type: "INVALID_LENGTH" });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(value)) {
      dispatch({ type: "INVALID_TYPE" });
      return;
    }
    dispatch({ type: "VALID" });
    setQuery(value);
    console.log(query);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/?query=${query}` : ""); // use query in seachPage
  };

  return (
    <Form
      className="d-flex position-relative me-auto my-2 w-100"
      onSubmit={submitHandler}
    >
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          // onChange={(e) => setQuery(e.target.value)}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
          className="z-0"
          style={{ paddingLeft: "30px" }}
        ></FormControl>
        <i className="fas fa-search z-50 absolute top-3 left-3 text-gray-500 text-sm"></i>
        <Button
          variant="primary"
          type="submit"
          id="button-search"
          disabled={!isValid}
        >
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
      {!isValid && <p className="validation-msg">{message}</p>}
    </Form>
  );
}
