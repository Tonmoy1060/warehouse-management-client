import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const navigateToReg = () => {
    navigate("/register");
  };

  const submitButton = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);
  };

  const forgotButton = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Put Email to Reset");
    }
  };

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="container w-25 mx-auto ">
      <h2 className="text-center mt-4 mb-3">Please Login</h2>
      <div style={{background:"rgba(0, 105, 252, 0.306)"}} className=" p-3 rounded pt-4">
        <Form onSubmit={submitButton}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="w-50 mx-auto d-block bg-primary text-white text-bold"  type="submit">
            Login
          </Button>
        </Form>
        {/* <p > */}
        <small className="mt-3 d-block text-white">
          {" "}
          New to genius car?
          <Link
            to={"/register"}
            onClick={navigateToReg}
            className="text-decoration-none pe-auto text-danger"
          >
            {" "}
            Please register.
          </Link>
        </small>
        {/* </p> */}
        {/* <p> */}
        <small className="text-white">
          {" "}
          Forgot password?
          <button
            onClick={forgotButton}
            className="btn btn-link p-1 text-10 text-decoration-none pe-auto text-primary "
          >
            {" "}
            Reset password.
          </button>
          <ToastContainer />
        </small>
        {/* </p> */}
        <Social></Social>
      </div>
    </div>
  );
};

export default Login;
