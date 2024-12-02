"use client";

import Link from "next/link";
import "./register.css";
import { useState } from "react";
import { useRegisterUserMutation } from "@/redux/features/userApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import NavbarWrapper from "@/component/shared/navbar/NavbarWrapper";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("trainee");

  const dispatch = useDispatch();
  const [registerUser, { isLoading, isError, error, isSuccess, data }] =
    useRegisterUserMutation();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        name,
        email,
        role,
        password,
      }).unwrap();
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      dispatch(setUser({ user: response.user, token: response.token }));

      router.push("/");
    } catch (err) {
      console.log("Registration failed:", err);
    }
  };
  return (
    <NavbarWrapper>
      <div className="container">
        <section id="contact">
          <h1 className="text-6xl text-white uppercase text-center mt-[100px]">
            Start your fitness journey to Gymnasia
          </h1>
          <div className="contact-container">
            <div className="contact-london"></div>

            <form action="" onSubmit={handleSubmit}>
              <div className="contact-form-bg">
                <div className=" w-auto md:w-[400px] h-auto md:h-[500px] rounded-[45px] bg-white/10">
                  <div className="flex flex-col justify-center gap-y-5 pt-[30px] pr-[50px] pb-0 pl-[30px]">
                    <div className=" flex flex-col justify-center">
                      <p className="input-text">Full Name</p>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[rgba(126,126,126,0.5)] p-[8px] text-white text-[16px] "
                        type="name"
                        name="name"
                        required
                      />
                    </div>
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
                  <button
                    type="submit"
                    className="send-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Register"}
                  </button>
                  <div className="mt-5 p2">
                    <span className="text-white text-xs">
                      Already have an account?{" "}
                      <Link className="underline " href="/login">
                        Login Here
                      </Link>
                    </span>
                  </div>
                  {isError && (
                    <p className="text-red-500">{error.data.message}</p>
                  )}
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
