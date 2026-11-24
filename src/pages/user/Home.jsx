import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// icons
import {
  ArrowUpRight, ArrowRight, Zap, Clock, Sparkles, Mail, Send,
  Truck, RotateCcw, ShieldCheck, Award,
} from "lucide-react";

// components
import Input from "../../components/forms/Input";
import Button from "../../components/Button";
import Badge from "../../components/Badge";

// page components
import Carousel from "../../components/Carousel";
import Categories from "../../components/pages/Categories";
import ProductCard from "../../components/pages/ProductCard";
import ProductsListCard from "../../components/pages/ProductsListCard";


const slides = [
  {
    id: 1,
    title: "Discover The Future Of Technology",
    description: "Explore the latest technology, smart devices, and innovative gadgets designed to make your everyday life easier.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600",
  },
  {
    id: 2,
    title: "Upgrade Your Gaming Experience",
    description: "Level up your gameplay with powerful gaming laptops, high-performance accessories, and next-generation gaming gear.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600",
  },
  {
    id: 3,
    title: "The Best Gadgets, All In One Place",
    description: "Find your favourite gadgets, premium electronics, and everyday tech essentials at amazing prices, all in one place.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
  },
];

const products = [
  {
    id: 1,
    name: "Apple MacBook Air M4 13-inch Laptop",
    slug: "apple-macbook-air-m4",
    category: "Laptops",
    description: "Experience powerful performance with the Apple MacBook Air M4, featuring a stunning 13-inch Liquid Retina display, ultra-fast M4 chip, all-day battery life, and a lightweight design perfect for work and entertainment.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    price: 89900,
    originalPrice: 99900,
    rating: 4.8,
    reviews: 124,
    isWishlisted: false,
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    slug: "sony-wh1000xm5",
    category: "Headphones",
    description: "Enjoy an immersive listening experience with Sony WH-1000XM5 headphones, featuring advanced active noise cancellation, crystal-clear audio, comfortable ear cushions, and long-lasting battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 24990,
    originalPrice: 29990,
    rating: 4.7,
    reviews: 89,
    isWishlisted: false,
  },
  {
    id: 1,
    name: "Apple MacBook Air M4 13-inch Laptop",
    slug: "apple-macbook-air-m4",
    category: "Laptops",
    description: "Experience powerful performance with the Apple MacBook Air M4, featuring a stunning 13-inch Liquid Retina display, ultra-fast M4 chip, all-day battery life, and a lightweight design perfect for work and entertainment.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    price: 89900,
    originalPrice: 99900,
    rating: 4.8,
    reviews: 124,
    isWishlisted: false,
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    slug: "sony-wh1000xm5",
    category: "Headphones",
    description: "Enjoy an immersive listening experience with Sony WH-1000XM5 headphones, featuring advanced active noise cancellation, crystal-clear audio, comfortable ear cushions, and long-lasting battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 24990,
    originalPrice: 29990,
    rating: 4.7,
    reviews: 89,
    isWishlisted: false,
  },
  {
    id: 3,
    name: "Apple iPhone 16 Pro Max 256GB",
    slug: "iphone-16-pro-max",
    category: "Mobiles",
    description: "Discover premium smartphone performance with the Apple iPhone 16 Pro Max, featuring a stunning Super Retina XDR display, advanced camera system, powerful A18 Pro chip, and impressive battery life.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    price: 119900,
    originalPrice: 129900,
    rating: 4.9,
    reviews: 210,
    isWishlisted: false,
  },
  {
    id: 4,
    name: "Premium Smart Watch with AMOLED Display",
    slug: "premium-smart-watch",
    category: "Smart Watches",
    description: "Stay connected and track your daily activities with this premium smartwatch, featuring a vibrant AMOLED display, fitness tracking, heart rate monitoring, smart notifications, and a stylish modern design.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    price: 4999,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 65,
    isWishlisted: false,
  },
];

// benefits
const benefits = [
  {
    id: 1,
    icon: Truck,
    title: "Free Shipping",
    description: "When ordering over $100",
  },
  {
    id: 2,
    icon: RotateCcw,
    title: "Free Return",
    description: "Get return within 30 days",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure online payment",
  },
  {
    id: 4,
    icon: Award,
    title: "Best Quality",
    description: "Original product guaranteed",
  },
];

const Home = () => {

  return (
    <div className="space-y-5">

      {/* slider */}
      <Carousel
        slides={slides}
      // loading={true}
      />

      {/* categories */}
      <Categories />

      {/* Featured Products */}
      <section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#061336] sm:text-3xl lg:text-4xl">
              Featured{" "}
              <span className="bg-linear-to-r from-[#015BFA] to-[#00D9D9] bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
              Explore our handpicked selection of the latest tech products.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
          >
            View All Products
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6 lg:gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={(product) => console.log("Add:", product)}
              onToggleWishlist={(product) => console.log("Wishlist:", product)}
            />
          ))}
        </div>
      </section>

      {/* offers */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-md bg-[url("https://res.cloudinary.com/dhlflr2cc/image/upload/v1794813886/off2_boysnf.png")] bg-cover bg-right lg:bg-center bg-no-repeat px-4 md:px-6 py-8 md:py-10 sm:px-10 lg:px-16`}
        >
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#00D9D9]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#015BFA]/20 blur-2xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

            <div className="text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#00D9D9] sm:text-sm">
                <Zap size={16} />
                Limited Time Offer
              </Badge>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Upgrade Your Tech
                <span className="block bg-linear-to-r from-[#015BFA] via-[#00A8FF] to-[#00D9D9] bg-clip-text text-transparent">
                  Save More Today!
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#CBDDFE] sm:text-base lg:mx-0">
                Discover amazing deals on your favorite gadgets.
                Get premium technology at unbeatable prices.
              </p>

              <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
                <div className="text-left">
                  <p className="text-sm font-medium text-[#CBDDFE]">
                    Exclusive Discounts
                  </p>
                  <p className="text-4xl font-black text-white sm:text-5xl">
                    40%
                    <span className="text-xl text-[#00D9D9]"> OFF</span>
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="group flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#015BFA] shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#015BFA] hover:text-white"
                >
                  Shop Deals
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="flex items-center gap-2 text-sm text-[#CBDDFE]">
                  <Clock size={17} className="text-[#00D9D9]" />
                  Limited Time Only
                </span>
              </div>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-56 w-56 rounded-full bg-[#00D9D9]/20 blur-3xl sm:h-72 sm:w-72" />

              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=85"
                alt="Premium laptop special offer"
                className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 rounded-md"
              />

              <div className="absolute right-0 top-0 z-20 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-white/20 bg-cyan-500 text-[#061336] sm:right-5 sm:h-24 sm:w-24">
                <span className="text-2xl font-black sm:text-3xl">40%</span>
                <span className="text-[10px] font-bold uppercase">Off</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </section>

      {/* benifits */}
      <section>
        <div className="grid grid-cols-2 gap-3 rounded-md border border-gray-100 bg-white p-5 shadow-sm lg:grid-cols-4 lg:gap-0 lg:p-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group flex flex-col items-center gap-3 px-3 py-5 text-center sm:flex-row sm:text-left lg:justify-center lg:border-r lg:border-gray-100 lg:last:border-r-0`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#015BFA] transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-[#015BFA] group-hover:to-[#00D9D9] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#061336] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* topselling product */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#061336] sm:text-3xl lg:text-4xl">
              Top Selling{" "}
              <span className="bg-linear-to-r from-[#015BFA] to-[#00D9D9] bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
              Discover the most popular tech products loved by our customers.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProductsListCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* subcription */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-md bg-[url("https://res.cloudinary.com/dhlflr2cc/image/upload/v1794815366/subscription_banner_amocmr.png")] bg-cover bg-center bg-no-repeat px-6 py-12 sm:px-10 lg:px-16`}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00D9D9]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              <Badge className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#061336]/40 px-4 py-2 text-xs font-semibold text-cyan-500 backdrop-blur-sm sm:text-sm">
                <Sparkles size={15} />
                Stay Connected
              </Badge>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-300 sm:text-4xl">
                Get The Latest
                <span className="block bg-linear-to-r from-blue-600 via-cyan-400 to-cyan-400 bg-clip-text text-transparent">
                  Tech Updates!
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                Subscribe to our newsletter and receive exclusive
                deals, new arrivals and exciting tech updates.
              </p>
            </div>

            <div>
              <form
                // onSubmit={handleSubmit}
                className="rounded-md bg-white p-2 shadow-xl sm:flex sm:items-center"
              >
                <div className="flex flex-1 items-center gap-3 px-3">
                  <Mail size={21} className="shrink-0 text-[#015BFA]" />

                  <Input
                    type="email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent py-3 text-sm text-[#061336] outline-none placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  icon={Send}
                  iconPosition="end"
                  iconSize={16}
                  text="Subscribe"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-[#015BFA] to-[#00D9D9] px-6 py-2.5 text-sm font-bold text-white transition hover:brightness-110 sm:w-auto"
                />
              </form>

              <p className="mt-4 text-center text-xs text-blue-100 sm:text-left">
                Join our newsletter. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;