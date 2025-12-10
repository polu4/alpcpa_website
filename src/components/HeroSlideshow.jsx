import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import headshot from '../assets/aaron.png';
import meetingBg from '../assets/brainstorm-meeting.jpg';
import mainVideo from '../assets/mainBackground.mp4';
import coloradoVideo from '../assets/colorado.mp4';
import coloradoMap from '../assets/Colorado.svg';

const HeroSlideshow = () => {
    const slides = [
        {
            id: 1,
            type: 'video',
            src: mainVideo,
            blur: false,
            content: (
                <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4 gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-64 md:w-[28rem] flex-shrink-0 mt-20 md:mt-0"
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                            <img src={headshot} alt="Aaron L Poley" className="w-full h-auto object-cover" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-center md:text-left max-w-xl"
                    >
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
                            Absolute Professionalism, <br /><span className="text-accent italic">Integrity</span>, & Accountability
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-100 leading-relaxed font-light drop-shadow-md max-w-2xl">
                            Welcome to Aaron L Poley CPA. We take a team approach to our work, putting our clients first.
                        </p>
                        <Link to="/team">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 184, 245, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 bg-transparent border-2 border-accent text-white font-bold py-3 px-8 hover:bg-accent transition-all uppercase tracking-widest rounded-sm"
                            >
                                Meet the Team
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            )
        },
        {
            id: 2,
            type: 'image',
            src: meetingBg,
            blur: false,
            overlay: true,
            content: (
                <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 mt-20 md:mt-0 max-w-3xl"
                    >
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8">Expert Financial Services</h2>

                        <div className="text-left max-w-xl mx-auto mb-8 space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0" />
                                <p className="text-lg md:text-xl text-gray-100">Litigation support and joint interest auditing</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0" />
                                <p className="text-lg md:text-xl text-gray-100">Comprehensive financial reporting</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0" />
                                <p className="text-lg md:text-xl text-gray-100">Strategic taxation planning</p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 border-t border-white/10 pt-6">
                            We have filed business and individual tax refund returns and claims totaling over <span className="text-accent font-bold">$3 million</span> on behalf of our clients.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 184, 245, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent border-2 border-accent text-white font-bold py-3 px-8 hover:bg-accent transition-all uppercase tracking-widest rounded-sm"
                        >
                            View Services
                        </motion.button>
                    </motion.div>
                </div>
            )
        },
        {
            id: 3,
            type: 'video',
            src: coloradoVideo,
            blur: false,
            overlay: true,
            content: (
                <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:block w-1/3"
                    >
                        <img
                            src={coloradoMap}
                            alt="Map of Colorado with Erie highlighted"
                            className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(0,184,245,0.6)] transition-all duration-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-20 md:mt-0 text-center md:text-left max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
                            Local & Trusted in <span className="text-accent">Colorado</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-white font-light mb-8 md:mb-10 drop-shadow-md">
                            Headquartered in Erie, Colorado. Our team across Colorado and the United States is dedicated to providing top-tier financial services to our clients.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 184, 245, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-accent text-white font-bold py-3 px-8 hover:bg-accent transition-all uppercase tracking-widest rounded-sm"
                            >
                                Talk to Us
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            )
        }
    ];

    return (
        <div className="h-screen w-full relative bg-primary">
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={false} // Disabled mousewheel to allow page scrolling
                keyboard={{ enabled: true }} // Enabled keyboard navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                modules={[Keyboard, Pagination, Autoplay, EffectFade]}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 z-0">
                            {slide.type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`w-full h-full object-cover ${slide.blur ? 'blur-sm scale-105' : ''}`}
                                >
                                    <source src={slide.src} type="video/mp4" />
                                </video>
                            ) : (
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.src})` }}
                                />
                            )}
                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-black/40 ${slide.blur ? 'bg-black/60' : ''}`} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full w-full">
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlideshow;
