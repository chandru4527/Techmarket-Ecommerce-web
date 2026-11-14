import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// icons
import { MdArrowBackIosNew, MdArrowForward, MdArrowForwardIos } from "react-icons/md";

// components
import Button from "../components/Button";
import Image from "../components/media/Image";


const Carousel = ({
    slides = [],
    autoplay = true,
    delay = 4000,
    showArrows = true,
    showDots = true,
    effect = "slide",
    loading = false
}) => {

    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="relative w-full animate-pulse overflow-hidden bg-gray-200 mt-5 rounded-md *:aspect-video">

                <div className="relative z-10 flex min-h-64 flex-col justify-center px-6 py-12 sm:min-h-100 sm:px-10 lg:min-h-130 lg:px-16"
                >
                    <div className="h-8 w-3/4 max-w-lg rounded-md bg-gray-300 sm:h-12" />

                    <div className="mt-5 h-3 w-full max-w-md rounded bg-gray-300" />
                    <div className="mt-3 h-3 w-2/3 max-w-sm rounded bg-gray-300" />

                    <div className="mt-7 h-6 w-32 rounded-md bg-gray-300" />
                </div>

                {showDots && (
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                        <div className="h-2 w-6 rounded-full bg-gray-400" />
                        <div className="h-2 w-2 rounded-full bg-gray-300" />
                        <div className="h-2 w-2 rounded-full bg-gray-300" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden group rounded-md">

            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect={effect}
                loop={slides.length > 1}
                speed={700}
                autoplay={autoplay ? { delay, disableOnInteraction: false, } : false}
                navigation={
                    showArrows
                        ? {
                            prevEl: ".carousel-prev",
                            nextEl: ".carousel-next",
                        }
                        : false
                }
                pagination={showDots ? { clickable: true } : false}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative flex min-h-64 items-center overflow-hidden bg-black md:min-h-100 lg:min-h-140">

                            {slide.image && (
                                <>
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-r from-[#061336]/90 via-[#061336]/50 to-transparent" />
                                </>
                            )}

                            <motion.div
                                key={slide.id || index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.2,
                                        },
                                    },
                                }}
                                className="relative z-10 w-full max-w-xl px-4 py-8 text-white md:px-10 lg:left-5 lg:px-12"
                            >
                                <motion.h2
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.7, ease: "easeOut" },
                                        },
                                    }}
                                    className="text-lg font-bold leading-tight sm:text-2xl lg:text-4xl"
                                >
                                    {slide.title}
                                </motion.h2>

                                {slide.description && (
                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.7, ease: "easeOut" },
                                            },
                                        }}
                                        className="mt-4 max-w-md text-sm leading-6 text-white/75 lg:text-base"
                                    >
                                        {slide.description}
                                    </motion.p>
                                )}

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 25, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { duration: 0.6, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    <Button
                                        icon={MdArrowForward}
                                        iconPosition="end"
                                        text="Explore"
                                        className="mt-4"
                                        onClick={() => navigate("/shop")}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showArrows && slides.length > 1 && (
                <>
                    <Button
                        type="button"
                        icon={MdArrowBackIosNew}
                        className="carousel-prev absolute left-3 top-1/2 z-20 lg:flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-transparent text-[#55565a] transition hover:bg-transparent hover:text-[#015BFA] sm:left-5 hidden "
                        aria-label="Previous slide"
                    />

                    <Button
                        type="button"
                        icon={MdArrowForwardIos}
                        className="carousel-next absolute right-3 top-1/2 z-20 lg:flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-transparent text-[#55565a] transition hover:bg-transparent hover:text-[#015BFA] sm:right-5 hidden"
                        aria-label="Next slide"
                    />
                </>
            )}
        </div>
    );
};

export default Carousel;