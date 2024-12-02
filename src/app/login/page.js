"use client";

import Link from "next/link";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "../../redux/slices/authSlice";
import { useLoginUserMutation } from "../../redux/features/userApi";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await loginUser(user).unwrap();

      if (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        dispatch(setUser({ user: response.user, token: response.token }));

        router.push("/");
      }
    } catch (err) {
      console.log("Login failed:", err);
    }
  };
  return (
    <NavbarWrapper>
      <div className="container">
        <section id="contact">
          <h1 className="contact-title">Welcome to Gymnasia</h1>
          <div className="contact-container">
            <div className="contact-london"></div>

            <form action="" onSubmit={handleSubmit}>
              <div className="contact-form-bg">
                <div className=" w-auto md:w-[400px] h-[400px] rounded-[45px] bg-white/10">
                  <div className="flex flex-col justify-center gap-y-5 pt-[30px] pr-[50px] pb-0 pl-[30px]">
                    <div className=" flex flex-col justify-center">
                      <p className="input-text">E-mail</p>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[rgba(126,126,126,0.5)] p-[8px] text-white text-[16px] "
                        type="email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="password flex flex-col justify-center">
                      <p className="input-text">Password</p>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[rgba(126,126,126,0.5)] p-[8px] text-white text-[16px]"
                        type="password"
                        name="password"
                        required
                      />
                    </div>
                    <div className="message"></div>
                  </div>
                  <button className="send-btn" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                  {isError && (
                    <div className="error-message">
                      <p>{error?.data?.message || "An error occurred"}</p>
                    </div>
                  )}
                  <div className="mt-5 p2">
                    <span className="text-white">
                      Dont have an account?{" "}
                      <Link className="underline " href="/register">
                        Create new account
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </NavbarWrapper>
  );
};

export default Page;
