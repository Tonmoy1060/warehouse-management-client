import React from "react";
import google from "../../../images/social/unnamed.png";
import facebook from "../../../images/social/images.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//   const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();

  let errorMessage;

  if (error) {
    errorMessage = 
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
  }
  if(user ){
   navigate ('/home');
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-secondary w-100"></div>
        <p className="px-3 mt-2 text-white">or</p>
        <div style={{ height: "2px" }} className="bg-secondary w-100"></div>
      </div>
      <small>{errorMessage}</small>
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary d-block align-items-center m-2 w-100 mx-auto "
        >
          <img src={google} alt="" />
          <span className="ms-2">Google SignIn</span>
        </button>
        <button className="btn btn-primary d-block align-items-center m-2 w-100 mx-auto">
          <img src={facebook} alt="" />
          <span className="ms-2 text-white">Facebook Signin</span>
        </button>
        <button className="btn btn-dark d-block align-items-center m-2 w-100 mx-auto">
          <img src={github} alt="" />
          <span className="ms-2">Github Signin</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
