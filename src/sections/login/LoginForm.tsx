"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginFormData, loginSchema } from "@/types/schema/login";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const ref = document.referrer;
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { username, password } = data;

    try {
      const response = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
        callbackUrl: "/",
      });
      if (response?.error) {
        if (
          response.error.includes(
            "hashedPassword is not the hash of the given password"
          )
        ) {
          setError("Invalid username or password.");
        } else {
          setError("An error occurred. Please try again.");
        }
      } else {
        toast.success("Login Success");
        window.location.assign(ref);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-stretch justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
        <h1 className="text-2xl font-medium text-center">Login</h1>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label htmlFor="username">Username</label>
          <input {...register("username")} placeholder="username" />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Your password"
            minLength={8}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button type="submit">Login</button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <p className="text-sm text text-foreground">
          Didnt have an account?
          <Link className="text-primary font-medium underline" href="/register">
            Register
          </Link>
        </p>
      </form>
      <button
        onClick={() => signIn("google", { callbackUrl: ref })}
        className="w-full rounded-md bg-black py-3 px-4 text-white"
      >
        Login With Google
      </button>
    </div>
  );
};

export default LoginForm;
