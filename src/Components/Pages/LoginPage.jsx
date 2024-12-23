import React, { useEffect, useState } from "react";
import { authLogIn } from "../../Constants/Service";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const fetchAuth = async (e) => {
    e.preventDefault();
    if (!userName.trim() || !userPassword.trim()) {
      swal({
        title: "Validation Error",
        text: "Both username and password are required!",
        icon: "warning",
        timer: 2000,
        buttons: false,
      });

      return;
    }
    try {
      const postData = {
        username: userName,
        password: userPassword,
      };
      const response = await authLogIn(postData);
      if (response?.status === 200) {
        swal("Login Successful", "Welcome to your account!", "success");
        console.log("User Logged In:", response.data);
        localStorage.setItem("token", response.data.accessToken);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        swal("Login Failed", "Invalid username or password!", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-purple-600 h-screen w-full flex justify-center items-center">
      <form className="h-96 w-96 bg-white rounded-xl shadow flex gap-4 justify-center items-center flex-col">
        <h1 className="font-semibold">SIGN IN YOUR ACCOUNT</h1>
        <input
          type="text"
          className="bg-slate-200 p-2 rounded-md"
          placeholder="User-Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          className="bg-slate-200 p-2 rounded-md"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          onClick={fetchAuth}
          className="bg-purple-500 text-white p-2 w-36 rounded-md hover:bg-purple-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
