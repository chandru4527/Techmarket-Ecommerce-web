import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// icons
import {
  MdOutlineShoppingBag,
  MdHome,
  MdArrowForward,
  MdSearchOff,
  MdOutlineErrorOutline,
} from "react-icons/md";

// components
import Container from "../../components/Container";
import Button from "../../components/Button";

const NotFound = () => {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4 py-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mb-6 flex h-44 w-44 items-center justify-center sm:mb-8 sm:h-64 sm:w-64"
          >
            <div className="absolute inset-5 rounded-full bg-blue-50" />

            <div className="absolute inset-0 rounded-full border border-dashed border-blue-200" />

            <div className="relative flex h-26 w-26 items-center justify-center rounded-3xl bg-linear-to-br from-[#015BFA] to-[#00D9D9] shadow-2xl shadow-blue-200 sm:h-36 sm:w-36">
              <MdOutlineShoppingBag className="text-6xl text-white sm:text-7xl" />
            </div>

            <div className="absolute right-3 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg sm:right-5 sm:top-8 sm:h-12 sm:w-12">
              <MdSearchOff className="text-xl text-[#015BFA] sm:text-2xl" />
            </div>

            <div className="absolute bottom-5 left-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg sm:bottom-8 sm:left-4 sm:h-11 sm:w-11">
              <MdOutlineErrorOutline className="text-xl text-cyan-500 sm:text-2xl" />
            </div>

            <span className="absolute right-7 bottom-4 h-3 w-3 rounded-full bg-[#00D9D9]" />
            <span className="absolute left-8 top-6 h-2.5 w-2.5 rounded-full bg-[#015BFA]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h1 className="bg-linear-to-r from-[#015BFA] to-[#00D9D9] bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
              404
            </h1>

            <h2 className="mt-3 text-xl font-bold text-[#061336] sm:mt-4 sm:text-2xl md:text-3xl">
              Oops! Page Not Found
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base sm:leading-7">
              Looks like you've wandered off the shopping path. The page
              you're looking for doesn't exist or may have been moved.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <Link to="/">
                <Button className="flex items-center justify-center gap-2 bg-linear-to-r from-[#015BFA] to-[#3b9bfc] px-7 py-3 text-white shadow-lg shadow-blue-200 transition hover:shadow-xl">
                  <MdHome size={20} />
                  Back to Home
                </Button>
              </Link>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-7 py-3 text-sm font-semibold text-[#061336] transition hover:border-[#015BFA] hover:text-[#015BFA]"
              >
                Explore Products
                <MdArrowForward size={19} />
              </Link>
            </div>

            <p className="mt-7 text-xs font-medium tracking-wide text-gray-400 sm:mt-10">
              TECHMARKET · YOUR TECH, YOUR WORLD.
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;