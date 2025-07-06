"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { loginuser } from "@/actions/loginUser";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email adress"),
  password: z
    .string()
    .min(3, "Password must be at least 3 character")
    .max(25, "Password cannot be more than 25 characters")
    .regex(/\d/, "Password cannot be ")
    .regex(/[a-z]/, "password cannot be more than 20 character")
    .regex(/[A-Z]/, "password cannot be more than 20 character"),
});

export type loginFormData = z.infer<typeof signInSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: loginFormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false, // jangan redirect otomatis
    });
    if (response?.ok) {
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <main className="min-h-screen grid place-items-center bg-amber-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 bg-green-50 py-12 px-10 border border-black rounded-3xl shadow-xl w-[90%] max-w-md"
      >
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>

        <div className="grid">
          <label htmlFor="username">Username</label>
          <input
            className="border-2 bg-white rounded px-2 py-1"
            type="text"
            id="username"
            placeholder="Enter Username"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-small"> {errors.email.message}</p>
          )}
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 bg-white rounded px-2 py-1"
            type="password"
            id="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-400 text-small">
              {" "}
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="border border-black rounded-2xl bg-amber-400 py-2 hover:bg-amber-500 transition"
        >
          Login
        </button>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <p className="text-gray-600">Or login with</p>
          <button
            type="button"
            onClick={() => signIn("google")}
            className="bg-white border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition"
          >
            Login with Google
          </button>
        </div>
      </form>
    </main>
  );
}
