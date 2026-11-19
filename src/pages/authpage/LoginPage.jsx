import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

// form
import { useForm } from "react-hook-form";

// icons
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdArrowForward, } from "react-icons/md";
import { MdLocalOffer, MdLocalShipping, MdReplay, MdSecurity, } from "react-icons/md";

// google
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

// components
import Input from "../../components/forms/Input";
import Checkbox from "../../components/forms/Checkbox";
import Button from "../../components/Button";
import Image from "../../components/media/Image";

// hooks
import { useLogin, useGoogleLogin } from "../../hooks/useAuth";

// utils
import toastify from "../../utils/toastify";

const LoginPage = () => {

  const navigate = useNavigate();

  const { mutate, isPending } = useLogin();
  const { mutate: googleLogin, isPending: isGoogleLoading } = useGoogleLogin();

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        toastify.success("Login successfully!");

        const role = res?.results?.user?.role;
        navigate(role === "admin" ? "/admin" : "/");
      },
      onError: (error) => {
        toastify.error(
          error.response?.data?.message || "Login failed"
        );
      },
    });
  };

  // google login 
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const firebaseToken = await result?.user?.getIdToken();

      googleLogin(firebaseToken, {
        onSuccess: (res) => {
          toastify.success("Login successfully!");

          const role = res?.results?.user?.role;

          navigate(role === "admin" ? "/admin" : "/");
        },
        onError: (error) => {
          toastify.error(
            error.response?.data?.message || "Google login failed"
          );
        },
      });
    } catch (error) {
      console.error("Google login failed:", error);

      toastify.error(
        error?.code === "auth/popup-closed-by-user"
          ? "Google login was cancelled"
          : "Google login failed"
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="grid min-h-screen w-full bg-white shadow-xl shadow-blue-900/5 lg:grid-cols-2">

        {/* Left Side - Branding */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[url('https://res.cloudinary.com/dhlflr2cc/image/upload/v1794842536/login_2_jjoktl.png')] bg-cover bg-center bg-no-repeat p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#015BFA]/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#00D9D9]/20 blur-3xl" />
          <div className="absolute bg-black/40 inset-0" />

          <div className="relative z-10">
            <Link to="/" className="mb-10 block text-center text-3xl font-extrabold h-10 w-50">
              <Image
                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794815364/logo_ryji08.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="relative z-10 mb-30">

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white xl:text-5xl">
              Discover the
              <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-white bg-clip-text text-transparent">
                Future of Tech
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white">
              Explore the latest gadgets, discover amazing deals, and
              experience shopping with TechMarket.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              {[
                {
                  icon: MdLocalOffer,
                  title: "Exclusive Deals",
                  desc: "Amazing prices & offers",
                },
                {
                  icon: MdLocalShipping,
                  title: "Fast Delivery",
                  desc: "Quick doorstep delivery",
                },
                {
                  icon: MdReplay,
                  title: "Easy Returns",
                  desc: "Hassle-free returns",
                },
                {
                  icon: MdSecurity,
                  title: "Secure Shopping",
                  desc: "Safe & secure checkout",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                    <item.icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-white">
            <span>© 2026 TechMarket</span>
            <span>Smart Shopping. Better Technology.</span>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8 xl:px-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >

            {/* Mobile Logo */}
            <Link to="/" className="mb-10 block text-center text-3xl font-extrabold text-[#061336] lg:hidden">
              <Image
                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794023750/Tech_logo-removebg-preview_hqwpuu.png"
                alt="Logo"
                className="h-12 w-40"
              />
            </Link>

            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-[#015BFA]">
                Welcome Back
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#061336] sm:text-4xl">
                Sign In to Your Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                Enter your details to access your account and continue shopping.
              </p>
            </div>

            {/* Google Login */}
            <Button
              type="button"
              icon={FcGoogle}
              loading={isGoogleLoading}
              // onClick={handleGoogleLogin}
              text="Continue with Google"
              className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#061336] transition-all duration-300 hover:border-[#015BFA] hover:bg-blue-50"
            >
            </Button>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Or continue with email
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                icon={MdEmail}
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={MdLock}
                error={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <Checkbox
                  label="Remember me"
                  name="rememberMe"
                  className="w-auto"
                  labelClassName="items-center"
                  labelTextClassName="whitespace-nowrap text-gray-600"
                  inputClassName="accent-[#015BFA]"
                />

                <Link
                  to="/forgot-password"
                  className="font-semibold text-[#015BFA] transition hover:text-[#00A8FF]"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                text={isPending ? "Signing In..." : "Sign In"}
                icon={MdArrowForward}
                iconPosition="end"
                disabled={isPending}
                className="w-full justify-center rounded-md py-3.5"
              />

            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-[#015BFA] transition hover:text-[#00A8FF]"
              >
                Create Account
              </Link>
            </p>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;