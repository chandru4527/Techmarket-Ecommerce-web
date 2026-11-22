import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

// form
import { useForm } from "react-hook-form";

// icons
import { FcGoogle } from "react-icons/fc";
import {
  MdPerson, MdEmail, MdLock, MdArrowForward, MdLocalShipping,
  MdSecurity, MdSupportAgent, MdVerified,
} from "react-icons/md";

// google
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

// components
import Input from "../../components/forms/Input";
import Button from "../../components/Button";
import Image from "../../components/media/Image";
import Checkbox from "../../components/forms/Checkbox";

// hooks
import { useRegister, useGoogleLogin } from "../../hooks/useAuth";

// utils
import toastify from "../../utils/toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useRegister();
  const { mutate: googleLogin, isPending: isGoogleLoading } = useGoogleLogin();

  const { register, handleSubmit, watch, formState: { errors }, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const onSubmit = ({ confirmPassword, termsAccepted, ...data }) => {
    mutate(data, {
      onSuccess: () => {
        toastify.success("Register successfully!");
        navigate("/");
      },
      onError: (error) => {
        toastify.error(
          error.res?.data?.message || "Registration failed"
        );
      },
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseToken = await result?.user?.getIdToken();

      googleLogin(firebaseToken, {
        onSuccess: (res) => {
          toastify.success("Google sign-in successful!");

          const role = res?.results?.user?.role;
          navigate(role === "admin" ? "/admin" : "/");
        },
        onError: (error) => {
          toastify.error(
            error.response?.data?.message || "Google registration failed"
          );
        },
      });
    } catch (error) {
      console.error("Google registration failed:", error);

      toastify.error(
        error?.code === "auth/popup-closed-by-user"
          ? "Google sign-in was cancelled"
          : "Google registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="grid min-h-screen w-full bg-white shadow-xl shadow-blue-900/5 lg:grid-cols-2">

        {/* Left Side - Branding */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[url('https://res.cloudinary.com/dhlflr2cc/image/upload/v1794842535/sign_rq3sae.png')] bg-cover bg-center bg-no-repeat p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#015BFA]/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#00D9D9]/20 blur-3xl" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Logo */}
          <div className="relative z-10">
            <Link
              to="/"
              className="mb-10 block h-10 w-50 text-center text-3xl font-extrabold"
            >
              <Image
                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794815364/logo_ryji08.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Branding Content */}
          <div className="relative z-10 mb-30">
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white xl:text-5xl">
              Join the
              <span className="block bg-linear-to-r from-blue-600 via-cyan-500 to-white bg-clip-text text-transparent">
                Future of Tech
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white">
              Create your TechMarket account and discover the latest gadgets,
              exclusive deals, and an amazing shopping experience.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                {
                  icon: MdLocalShipping,
                  title: "Free Delivery",
                  desc: "Fast & free shipping",
                },
                {
                  icon: MdSecurity,
                  title: "Secure Payment",
                  desc: "100% secure checkout",
                },
                {
                  icon: MdSupportAgent,
                  title: "24/7 Support",
                  desc: "We're here to help",
                },
                {
                  icon: MdVerified,
                  title: "Best Quality",
                  desc: "Genuine products",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-blue-300/30 bg-white/10 text-white">
                    <item.icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between text-xs text-white">
            <span>© 2026 TechMarket</span>
            <span>Smart Shopping. Better Technology.</span>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="flex min-h-screen items-center justify-center px-4 py-7 sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >

            <Link
              to="/"
              className="mb-10 block text-center text-3xl font-extrabold text-[#061336] lg:hidden"
            >
              <Image
                src="https://res.cloudinary.com/dhlflr2cc/image/upload/v1794023750/Tech_logo-removebg-preview_hqwpuu.png"
                alt="Logo"
                className="h-12 w-40"
              />
            </Link>

            {/* Heading */}
            <div className="mb-2">
              <span className="text-sm font-bold uppercase tracking-widest text-[#015BFA]">
                Get Started
              </span>

              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#061336] md:text-3xl">
                Create Your Account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                Sign up today and start exploring the latest technology.
              </p>
            </div>

            {/* Google Register */}
            <Button
              type="button"
              icon={FcGoogle}
              loading={isGoogleLoading}
              onClick={handleGoogleLogin}
              text="Continue with Google"
              className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#061336] transition-all duration-300 hover:border-[#015BFA] hover:bg-blue-50"
            />

            {/* Divider */}
            <div className="my-4 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Or register with email
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Full Name */}
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                icon={MdPerson}
                error={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {/* Email */}
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

              {/* Password */}
              <Input
                label="Password"
                type="password"
                placeholder="Create your password"
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

              {/* Confirm Password */}
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                icon={MdLock}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />

              <Checkbox
                label={
                  <>
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="font-semibold text-[#015BFA] hover:underline"
                    >
                      Terms & Conditions
                    </Link>
                  </>
                }
                name="termsAccepted"
                {...register("termsAccepted", {
                  required: "You must accept the Terms & Conditions",
                })}
                className="w-auto"
                labelClassName="items-center"
                labelTextClassName="text-xs text-gray-500"
                inputClassName="accent-[#015BFA]"
                error={errors.termsAccepted?.message}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                text={isPending ? "Creating Account..." : "Create Account"}
                icon={MdArrowForward}
                iconPosition="end"
                disabled={isPending}
                className="w-full justify-center rounded-md py-3.5"
              />
            </form>

            {/* Login Link */}
            <p className="mt-5 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[#015BFA] transition hover:text-[#00A8FF]"
              >
                Sign In
              </Link>
            </p>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;