import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, Googleprovider } from "../firebase";

const Login = () => {
  const history = useNavigate();
  const [user, loading] = useAuthState(auth);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserAuthRes, setUserAuthRes] = useState();
  const [Error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserAuthRes(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const GoogleSignIn = (e) => {
    e.preventDefault();
    const res = auth.signInWithPopup(Googleprovider);
    setUserAuthRes(res);
  };

  useEffect(() => {
    if (user) {
      history("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  return (
    <div className="h-screen flex flex-col bg-gray-100 max-w-sm  pt-28 mx-auto ">
      <div className=" content-center  bg-white rounded-lg">
        <div className="bg-amazon_blue  rounded-t-lg pt-5">
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="h-16 mx-auto p-2 cursor-pointer"
            />
          </Link>
        </div>
        <form className="flex flex-col mx-5 space-y-5 my-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-3 m-3  border border-gray-200"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 m-3  border border-gray-200"
          />
          <div>
            {Error ? (
              <p className="text-sm text-red-500 ml-5 -my-3">
                *Invalid email or password.
              </p>
            ) : (
              <div />
            )}
          </div>
          <button onClick={handleSignIn} className="button font-semibold">
            SignIn
          </button>
        </form>
        <div className="flex justify-between mx-8 my-5 text-sm text-gray-800 ">
          <Link
            to="/register"
            className=" rounded-full shadow-md  cursor-pointer active:scale-95 transition transform ease-out px-4 py-2 hover:bg-gray-100"
          >
            SignUp
          </Link>
          <div
            onClick={GoogleSignIn}
            className="flex cursor-pointer items-center rounded-full shadow-md active:scale-95 transition transform ease-out px-4 py-2 hover:bg-gray-100"
          >
            SignIn with
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/36px-Google_%22G%22_Logo.svg.png?20210618182606"
              alt=""
              className="h-5 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
