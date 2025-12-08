import React from 'react';
import { motion } from 'framer-motion';
import numbers from '../assets/numbers.jpg';
import cityVideo from '../assets/city.mp4';
import VideoBackground from './VideoBackground';
import bg1 from '../assets/backgrounds/bg1.mp4';

const AboutSection = () => {
    return (
        <section className="py-24 relative -mt-1" id="about">
            <VideoBackground videoSrc={bg1} flipVertical={true} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                            More Than Just a CPA Firm
                        </h2>
                        <div className="w-20 h-1 bg-accent mb-8"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            At Aaron L. Poley, CPA, we believe that accounting is about more than just numbers—it's about providing the clarity and insight you need to make informed decisions.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            With years of specialized experience in litigation support, joint interest auditing, and strategic tax planning, we bring a level of expertise that goes beyond standard compliance. We are your partners in financial success.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Whether you are navigating a complex legal dispute or looking to optimize your business's financial health, our commitment to integrity and precision ensures you are in capable hands.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 relative group">
                            {/* Video replacement for image */}
                            <div className="w-full h-full bg-primary relative">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-x-[-1]"
                                >
                                    <source src={cityVideo} type="video/mp4" />
                                    {/* Fallback if video fails */}
                                    <img src={numbers} alt="Aaron L Poley" className="w-full h-full object-cover opacity-90" />
                                </video>
                                {/* Dim overlay */}
                                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-colors duration-300"></div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
                    </motion.div>
                </div>
            </div>
            {/* Blue intersection gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/80 to-transparent z-20 pointer-events-none"></div>
        </section>
    );
};

export default AboutSection;
