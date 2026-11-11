import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = ({
    slides = [],
    autoplay = true,
    delay = 4000,
    showArrows = true,
    showDots = true,
    effect = "slide",
}) => {
    return (
        <div className="relative w-full overflow-hidden group">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect={effect}
                loop={slides.length > 1}
                speed={700}
                autoplay={
                    autoplay
                        ? {
                            delay,
                            disableOnInteraction: false,
                            // pauseOnMouseEnter: true,
                        }
                        : false
                }
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
                    <SwiperSlide key={slide.id || index}>
                        <div
                            className={`relative flex min-h-74 items-center overflow-hidden sm:min-h-100 lg:min-h-130 bg-black`}
                        >
                            <div className="relative z-10 w-full max-w-xl px-6 py-12 text-white sm:px-12 lg:px-16">

                                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                    {slide.title}
                                </h2>

                                {slide.description && (
                                    <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                                        {slide.description}
                                    </p>
                                )}


                            </div>

                            {slide.image && (
                                <>
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-r from-[#061336]/90 via-[#061336]/50 to-transparent" />
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showArrows && slides.length > 1 && (
                <>
                    <button
                        type="button"
                        className="carousel-prev absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#061336] shadow-md transition hover:bg-[#00D9D9] sm:left-5"
                        aria-label="Previous slide"
                    >
                        <MdArrowBackIosNew size={18} />
                    </button>

                    <button
                        type="button"
                        className="carousel-next absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#061336] shadow-md transition hover:bg-[#00D9D9] sm:right-5"
                        aria-label="Next slide"
                    >
                        <MdArrowForwardIos size={18} />
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;