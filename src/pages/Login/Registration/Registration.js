import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Social from "../Social/Social";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const emailRegRef = useRef("");
  const passRegRef = useRef("");
  const conPassRegRef = useRef("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRegRef.current.value;
    const pass = passRegRef.current.value;
    const confirm = conPassRegRef.current.value;

    createUserWithEmailAndPassword(email, pass);
  };

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-25 mx-auto ">
      <h2 className="text-center mt-4 mb-3">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRegRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passRegRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            ref={conPassRegRef}
            type="password"
            placeholder="Retype Password"
          />
        </Form.Group>
        <small>
          <Form.Group
            onClick={() => setAgree(!agree)}
             controlId="formBasicCheckbox"
          >
            <Form.Check
              className={`${agree ? "" : "text-danger"}`}
              type="checkbox" label="Terms and conditions"
            />
          </Form.Group>
        </small>

        <Button
          className={`w-50 mt-3 ${agree ? "enabled" : "disabled"}`}
          variant="primary" type="submit"
        > Register
        </Button>
      </Form>
      <p className="mt-2">
        <small>
          already registered?{" "}
          <Link
            to={"/login"}
            className="text-decoration-none pe-auto text-danger"
          >
            Please Login{" "}
          </Link>
        </small>
      </p>

      <Social></Social>
    </div>
  );
};

export default Registration;
