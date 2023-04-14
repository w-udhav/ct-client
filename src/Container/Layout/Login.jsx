import React from "react";

const Login = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:w-[20vw] container mx-auto">
        <div className="flex justify-center">
          <img
            className="w-56 translate-y-1"
            src={require("../../Assets/login.png")}
            alt=""
          />
        </div>

        <div className="border border-black"></div>

        <div className="mt-8 px-5">
          <form>
            <div className="flex flex-col">
              <label htmlFor="email"> Email </label>
              <input
                className="outline-none rounded-[5px] text-teal bg- px-2 py-2 font-mono font-semibold text-3xl "
                id="email"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label> Password </label>
              <input type="pass" />
            </div>
            <div>
              <button> Login </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
