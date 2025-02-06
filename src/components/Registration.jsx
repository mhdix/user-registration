/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

const schema = z
  .object({
    fname: z
      .string()
      .min(1, { message: "First name is required" })
      .min(2, { message: "First name must be at least 2 characters" }),
    lname: z
      .string()
      .min(1, { message: "Last name is required" })
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    cpassword: z
      .string()
      .min(1, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords must match",
    path: ["cpassword"],
  });

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/user", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  {...register("fname")}
                  type="text"
                  className={clsx(
                    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400",
                    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400",
                    errors.fname ? "border-red-300" : "border-gray-300"
                  )}
                />
                {errors.fname && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.fname.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  {...register("lname")}
                  type="text"
                  className={clsx(
                    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400",
                    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400",
                    errors.lname ? "border-red-300" : "border-gray-300"
                  )}
                />
                {errors.lname && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.lname.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register("email")}
                  type="email"
                  className={clsx(
                    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400",
                    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400",
                    errors.email ? "border-red-300" : "border-gray-300"
                  )}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  {...register("password")}
                  type="password"
                  className={clsx(
                    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400",
                    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400",
                    errors.password ? "border-red-300" : "border-gray-300"
                  )}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="cpassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password confirmation
              </label>
              <div className="mt-1">
                <input
                  {...register("cpassword")}
                  type="password"
                  className={clsx(
                    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400",
                    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400",
                    errors.cpassword ? "border-red-300" : "border-gray-300"
                  )}
                />
                {errors.cpassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.cpassword.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium",
                  "text-white bg-indigo-600 hover:bg-indigo-700",
                  "dark:bg-indigo-500 dark:hover:bg-indigo-600",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                  "dark:focus:ring-offset-gray-900",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
