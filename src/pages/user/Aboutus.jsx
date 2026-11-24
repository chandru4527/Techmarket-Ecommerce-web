import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// icons
import {
  Heart, ShieldCheck, Truck, Headphones, Award, ShoppingBag, ArrowRight,
  Sparkles, CheckCircle, PackageCheck, Lightbulb,
} from "lucide-react";

// components
import Container from "../../components/Container";

const Aboutus = () => {

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Trusted Products",
      desc: "Explore carefully selected technology products from trusted brands.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Get your favourite gadgets delivered safely to your doorstep.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      desc: "We're here to help you with your questions and shopping experience.",
    },
    {
      icon: Award,
      title: "Quality Products",
      desc: "Discover reliable electronics and accessories for everyday needs.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      desc: "We put customer satisfaction at the centre of everything we do.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      desc: "We believe in honest information, secure shopping, and clear communication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new technology and continuously improve the shopping experience.",
    },
  ];

  const storyPoints = [
    "A wide range of electronics and gadgets",
    "A simple and convenient shopping experience",
    "Quality-focused product selection",
    "Customer satisfaction and support",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="space-y-15">

      {/* Introduction */}
      {/* <Container className="p-0 py-2 shadow-none">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#061336] md:text-5xl">
            Bringing Technology
            <span className="block bg-linear-to-r from-[#015BFA] to-[#00D9D9] bg-clip-text text-transparent">
              Closer to You
            </span>
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-500 md:text-lg">
            Welcome to TechMarket, your destination for discovering the latest
            electronics, smart gadgets, and technology essentials. We make
            finding and shopping for your favourite tech products simple and
            convenient.
          </p>
        </motion.div>
      </Container> */}

      {/* Our Story */}
      <Container className="p-0 shadow-none overflow-hidden">
        <motion.div {...fadeUp} className="mb-10 text-center">
          <h2 className="mt-5 text-3xl font-bold text-[#061336] md:text-4xl">
            Making Technology
            <span className="block text-[#015BFA]">
              Accessible to Everyone
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-6 text-gray-500">
            At TechMarket, we believe technology should make everyday life
            easier, smarter, and more enjoyable.
          </p>
        </motion.div>

        <div className="grid min-w-0 items-stretch gap-10 md:grid-cols-2">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-w-0"
          >
            <div className="relative flex min-h-87 h-full items-center justify-center overflow-hidden rounded-md bg-linear-to-br from-[#061336] via-[#015BFA] to-[#00D9D9] p-6 sm:min-h-100 sm:p-10">

              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/20" />
              <div className="absolute -bottom-16 -left-12 h-64 w-64 rounded-full border border-white/20" />

              <div className="relative text-center text-white">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm sm:h-24 sm:w-24">
                  <ShoppingBag size={44} strokeWidth={1.5} />
                </div>

                <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
                  TechMarket
                </h2>

                <p className="mt-3 text-xs tracking-wide text-white/80 sm:text-sm">
                  YOUR TECHNOLOGY DESTINATION
                </p>

                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-white/80" />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute z-40 bottom-2 right-4 hidden rounded-md border border-gray-200 bg-white p-4 shadow-lg md:block md:right-2">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-blue-50 p-3 text-[#015BFA]">
                  <Sparkles size={25} />
                </div>

                <div>
                  <p className="font-bold text-[#061336]">
                    Smart Shopping
                  </p>
                  <p className="text-sm text-gray-500">
                    Made simple
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex min-w-0 flex-col justify-center py-4"
          >
            <h3 className="text-xl font-bold text-[#061336]">
              Technology for Everyday Life
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              At TechMarket, we aim to bring together a variety of electronics,
              gadgets, and accessories in one convenient online shopping
              destination.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you're looking for everyday tech essentials or exploring
              the latest gadgets, our goal is to help you discover products
              that suit your needs while enjoying a smooth shopping experience.
            </p>

            <div className="mt-7 space-y-4">
              {storyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-[#015BFA]"
                  />

                  <span className="text-sm font-medium leading-6 text-gray-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Why Choose Us */}
      <Container className="p-0 shadow-none">
        <motion.div {...fadeUp} className="mb-12 text-center">
          <h2 className="mt-5 text-3xl font-bold text-[#061336] md:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
            We focus on making your online shopping journey convenient,
            enjoyable, and reliable.
          </p>
        </motion.div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-md border border-gray-100 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex rounded-md bg-blue-100 p-4 text-blue-600">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#061336]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-4 text-gray-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Our Values */}
      <Container className="p-0 shadow-none">
        <motion.div {...fadeUp} className="mb-12 text-center">
          <h2 className="mt-5 text-3xl font-bold text-[#061336] md:text-4xl">
            What We Believe In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
            The principles that shape our decisions and the experience we
            aim to deliver.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-md border border-gray-100 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 inline-flex rounded-md bg-linear-to-r from-[#015BFA] to-[#00D9D9] p-4 text-white">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#061336]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Shopping Experience */}
      <Container className="p-0 shadow-none">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-md bg-[#061336] px-6 py-14 text-center md:px-12 md:py-16"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#015BFA]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#00D9D9]/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-5 inline-flex rounded-md bg-white/10 p-4 text-[#00D9D9]">
              <PackageCheck size={32} />
            </div>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Your Next Favourite Gadget Awaits!
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
              Explore our collection of electronics and discover technology
              that makes everyday life better. Start your shopping journey
              with TechMarket today.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-[#015BFA] to-[#3b9bfc] px-7 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/30"
            >
              Explore Products
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.div>
      </Container>

    </div>
  );
};

export default Aboutus;