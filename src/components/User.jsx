/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import clsx from "clsx";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

const User = () => {
  const navigate = useNavigate();
  const userFromStorage = JSON.parse(localStorage.getItem("userLogin"));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:3001/user");
      const users = response.data;

      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        localStorage.setItem("userLogin", JSON.stringify(user));
        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-200">
      {userFromStorage && (
        <div className="max-w-md w-full mx-auto mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome Back!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {userFromStorage.fname} {userFromStorage.lname}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              {userFromStorage.email}
            </p>
            <button
              onClick={() => {
                localStorage.removeItem("userLogin");
                window.location.reload();
              }}
              className="w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              create a new account
            </Link>
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

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
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border px-4 py-2 border-slate-300 rounded-lg",
        className
      )}
      type="text"
      {...props}
    />
  );
};
