import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import bg2 from '../assets/backgrounds/bg2.mp4';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-24 pb-24 min-h-screen relative">
            <VideoBackground videoSrc={bg2} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Contact Us</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        We'd love to hear from you. Reach out to discuss your opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/5 dark:bg-primary/20 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Headquarters</h3>
                                    <p className="text-gray-600 dark:text-gray-300">2597 Sawyer Ln, Erie, CO 80026</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/5 dark:bg-primary/20 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">aaron@aaronpoleycpa.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/5 dark:bg-primary/20 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-[#0090c0] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-md hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Google Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 rounded-2xl overflow-hidden shadow-lg h-96"
                >
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?q=2597+Sawyer+Ln,+Erie,+CO+80026&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Google Map"
                        className="w-full h-full"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
