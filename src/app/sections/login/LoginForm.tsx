"use client";
import emojiLove from "@/assets/icon/emoji/love-eye.png";
import googleLogo from "@/assets/icon/logo/google.svg";
import Button from "@/components/button";
import { LoginFormData, loginSchema } from "@/types/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
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
        if (response.error.includes("Invalid login credentials")) {
          toast.error("Invalid username or password.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.success("Login Success");
        setTimeout(() => {
          window.location.assign("/dashboard");
        }, 2500);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gradient-black-start to-gradient-black-end rounded-[36px] py-8 md:py-32">
      <div className="px-4 md:px-14 flex flex-col gap-6">
        <div className="space-y-1 pr-16">
          <span className="flex items-center gap-0.5">
            <h1 className="text-xl md:text-4xl font-semibold text-white text-start">
              Welcome Back
            </h1>
            <Image src={emojiLove} alt="lovely emoji" />
          </span>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs lg:text-base">
              Don’t have an account?
            </span>
            <Link
              href={"/register"}
              className="text-light-blue-text font-semibold ml-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* form */}
        <form
          className="flex flex-col gap-3 text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="username">Username</label>
            <input
              className="w-full py-2 px-3 text-black text-base focus:border-indigo-500 focus:ring-indigo-500 rounded-xl shadow-sm"
              {...register("username")}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="password">Password</label>
            <input
              className="w-full py-2 px-3 text-black text-base focus:border-indigo-500 focus:ring-indigo-500 rounded-xl shadow-sm"
              type="password"
              {...register("password")}
              placeholder="Enter Your password"
            />
            {errors.password && (
              <p className="text-red">{errors.password.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full mt-3 flex justify-center items-center gap-3"
          >
            Sign In <ArrowRight size={18} />
          </Button>
        </form>
        <div className="flex gap-2.5 text-white items-center w-full justify-center text-base">
          <hr className="w-20 h-0.5 bg-white" />
          <p>Or</p>
          <hr className="w-20 h-0.5 bg-white" />
        </div>
        <Button
          variant="white"
          className="w-full"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <div className="flex items-center gap-2.5 justify-center text-black">
            <Image src={googleLogo} alt="google logo" />
            Continue with Google
          </div>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
