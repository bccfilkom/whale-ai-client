"use client";
import emojiSmile from "@/assets/icon/emoji/smile.png";
import googleLogo from "@/assets/icon/logo/google.svg";
import Button from "@/components/button";
import { RegisterFormData, registerSchema } from "@/types/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const { username, name, email, password } = data;
    const requestBody = {
      username,
      name,
      email,
      password,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        toast.success("Account created successfully");
        setTimeout(() => {
          window.location.assign("/login");
        }, 1500);
      } else {
        const errorData = await res.json();
        toast.error(
          errorData.data.includes("duplicate")
            ? "Username or email already exists"
            : "Server error, Please try again later"
        );
      }
    } catch (error) {
      toast.error(
        "An error occurred while creating account. Please try again later."
      );
      console.error("error create account", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gradient-black-start to-gradient-black-end rounded-[36px] py-8 md:py-12 shadow-2xl">
      <div className="px-4 md:px-14 flex flex-col gap-6">
        <div className="space-y-1">
          <span className="flex items-center gap-0.5">
            <h1 className="text-xl md:text-4xl font-semibold text-white text-start">
              Ready to Get Started?
            </h1>
            <Image src={emojiSmile} alt="smiling emoji" />
          </span>
          <div className="flex items-center gap-1 text-xl">
            <span className="text-xs lg:text-base text-white">Already have an account?</span>
            <Link
              href={"/login"}
              className="text-light-blue-text font-semibold ml-1"
            >
              Sign In
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
            <label htmlFor="name">Full Name</label>
            <input
              className="w-full py-2 px-3 text-black text-base focus:border-indigo-500 focus:ring-indigo-500 rounded-xl shadow-sm"
              {...register("name")}
              placeholder="Enter Your Full Name"
            />
            {errors.name && <p className="text-red">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="email">Email</label>
            <input
              className="w-full py-2 px-3 text-black text-base focus:border-indigo-500 focus:ring-indigo-500 rounded-xl shadow-sm"
              {...register("email")}
              placeholder="Enter Your Email"
            />
            {errors.email && <p className="text-red">{errors.email.message}</p>}
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
            className="py-4 w-full mt-3 flex justify-center items-center gap-3"
          >
            Sign Up <ArrowRight size={18} />
          </Button>
        </form>
        <div className="flex gap-2.5 text-white items-center w-full justify-center text-base">
          <hr className="w-20 h-0.5 bg-white" />
          <p>Or</p>
          <hr className="w-20 h-0.5 bg-white" />
        </div>
        <Button
          variant="white"
          className="w-full py-4"
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

export default RegisterForm;
