"use client";
import { RegisterFormData, registerSchema } from "@/types/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
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
      console.log("error create account", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
      <h1 className="text-2xl font-medium text-center">Sign up</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <label htmlFor="username">Username</label>
        <input {...register("username")} placeholder="username" />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}

        <label htmlFor="name">Name</label>
        <input {...register("name")} placeholder="Your Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input {...register("email")} placeholder="you@example.com" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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

        <button type="submit">Sign up</button>
      </div>

      <p className="text-sm text text-foreground">
        Already have an account?
        <Link className="text-primary font-medium underline" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
