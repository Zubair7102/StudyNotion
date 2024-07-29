import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      {/* student instructor tab */}

      <div>
        <button>Student</button>

        <button>Instructor</button>

        <form>
          <div>
            {/* FIRSTNAME AND LASTNAME  */}
            <label>
              <p>
                First Name<sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={FormData.firstname}
              />
            </label>

            <label>
              <p>
                Last Name<sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter last Name"
                value={FormData.lastname}
              />
            </label>
          </div>

          {/* EMAIL ADDRESS */}
          <label>
            <p>
              Email Address<sup>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter your Email Address"
              value={FormData.email}
            />
          </label>

          {/* CREATE PASSWORD AND CONFIRM PASSWORD */}
          <div>
            <label>
              <p>
                Create Password<sup>*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter your Password"
                value={FormData.password}
              />

              <span onClick={() => setShowPassword((prev) => !prev)}>
                {/* toggling the value into true and false whrn clicked on the eye image of show and hide password */}
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>

            {/* CONFIRM PASSWORD */}
            <label>
              <p>
                Confirm Password<sup>*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={FormData.password}
              />

              <span onClick={() => setShowPassword((prev) => !prev)}>
                {/* toggling the value into true and false whrn clicked on the eye image of show and hide password */}
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
          </div>
          <button>Create Account </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
