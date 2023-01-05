import React, { useState, useEffect } from "react";
import { signUp } from "../service/ApiService";
function SignUp() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [profession, setProfession] = useState("Full-Stack Developer");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [rollError, setRollError] = useState("");

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
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    handleNameError();
  };

  const handleNameError = () => {
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if (!name) {
      setNameError("name is required");
    }
    if (name) {
      setNameError("");
    }
    if (!regex.test(name)) {
      setNameError("Please Enter a valid name");
    }
    if (regex.test(name)) {
      setNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    handlePasswordError();
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
        "Minimum eight characters, at least one letter , one number & special char "
      );
    }
    if (regex.test(password)) {
      setPasswordError("");
    }
  };
  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    setPhoneNo(e.target.value);
    handlePhoneNumberError();
  };

  const handlePhoneNumberError = () => {
    const regex = phoneNo.length;
    console.log(regex);
    if (!phoneNo) {
      setPhoneNoError("phone Number is required");
    }
    if (phoneNo) {
      setPhoneNoError("");
    }
    if (regex < 9) {
      setPhoneNoError("Please enter a valid phone number");
    }
    if ((regex = 10)) {
      setPhoneNoError("");
    }
  };
  const handleRollChange = (e) => {
    setProfession(e.target.value);
  };

  let datas = {
    name: name,
    password: password,
    email: email,
    phone: phoneNo,
    profession: profession,
  };

  const handleSubmit = async () => {
    let result;
    try {
      result = await signUp(JSON.stringify(datas));
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phoneNo", phoneNo);
      localStorage.setItem("profession", profession);
      console.log('result: ', result);
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
                    placeholder="Name"
                    onChange={handleNameChange}
                    value={name}
                  />
                  <div class="text-red-600">{nameError}</div>
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  <div class="text-red-600">{passwordError}</div>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <div class="text-red-600">{emailError}</div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Phone Number"
                    value={phoneNo}
                    onChange={handlePhoneNumberChange}
                  />
                  <div class="text-red-600">{phoneNoError}</div>
                </div>

                <div className="relative w-full lg:w-full">
                  <select
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    onChange={handleRollChange}
                  >
                    <option value="Full-Stack Developer">
                      Full-Stack Developer
                    </option>
                    <option value="Tester">Tester</option>
                    <option value="Ui/Ux Designer">Ui/Ux Designer</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="text-center mt-6 lg:text-left">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
