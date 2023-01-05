import React from "react";
import { useState } from "react";
import { signIn, getUser } from "../service/ApiService";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigate();
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    handleEmailError();
  };
  const handleEmailError = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!email) {
      setEmailError("Email is required");
    }

    if (!regex.test(email)) {
      setEmailError("please enter a valid email");
    }
    if (regex.test(email)) {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handlePasswordError = () => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!password) {
      setPasswordError("Password is required");
    }
    if (password) {
      setPasswordError("");
    }
    if (!regex.test(password)) {
      setPasswordError(
        "Minimum eight characters, at least one letter and one number"
      );
    }
    if (regex.test(password)) {
      setPasswordError("");
    }
  };

  let datas = {
    email: email,
    password: password,
  };
  const handleSubmit = async () => {
    let result;
    console.log("datas: ", datas);
    try {
      result = await signIn(email, password);
      if (result.Token) {
        localStorage.setItem("token", result.Token);
        navigation("/Home");
        let getuser = await getUser();
        localStorage.setItem("name", getuser.name);
        localStorage.setItem("email", getuser.email);
        localStorage.setItem("phoneNo", getuser.phone);
        localStorage.setItem("role", getuser.profession);
        console.log("getuser: ", getuser);
      } else {
        alert(result.error);
        console.log(result.error);
      }
    } catch (error) {
      console.log("error: ", error);
      alert("error", error);
    }
  };
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <div class="text-red-600">{emailError}</div>
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                  {/* <div class="text-red-600">{passwordError}</div> */}
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="/SignUp"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
