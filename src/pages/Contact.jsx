import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import bg2 from '../assets/backgrounds/bg2.mp4';
import { validateForm, LIMITS } from '../utils/sanitization';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate and sanitize all inputs
        const validation = validateForm(formData);

        if (!validation.isValid) {
            setErrors(validation.errors);
            setTouched({ name: true, email: true, message: true });
            return;
        }

        // Use sanitized data for submission
        console.log('Form submitted with sanitized data:', validation.sanitized);

        // TODO: Send sanitized data to backend service
        // Example: await sendEmail(validation.sanitized);

        alert('Message sent! (This is a demo)');

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });

        // Validate on blur
        const validation = validateForm(formData);
        setErrors(validation.errors);
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
                                <a href="tel:8057957458" className="bg-primary/5 dark:bg-primary/20 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-accent" />
                                </a>
                                <a href="tel:8057957458">
                                    <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">(805) 795-7458</p>
                                </a>
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
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur('name')}
                                    required
                                    maxLength={LIMITS.NAME}
                                    className={`w-full px-4 py-3 rounded-lg border ${touched.name && errors.name
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-gray-600 focus:ring-accent'
                                        } dark:bg-gray-700 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                                    placeholder="Your Name"
                                    aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                                    aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                                />
                                {touched.name && errors.name && (
                                    <div id="name-error" className="mt-1 flex items-center text-sm text-red-600 dark:text-red-400">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.name}
                                    </div>
                                )}
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {formData.name.length}/{LIMITS.NAME} characters
                                </p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur('email')}
                                    required
                                    maxLength={LIMITS.EMAIL}
                                    className={`w-full px-4 py-3 rounded-lg border ${touched.email && errors.email
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-gray-600 focus:ring-accent'
                                        } dark:bg-gray-700 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all`}
                                    placeholder="your@email.com"
                                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                                />
                                {touched.email && errors.email && (
                                    <div id="email-error" className="mt-1 flex items-center text-sm text-red-600 dark:text-red-400">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur('message')}
                                    required
                                    rows="4"
                                    maxLength={LIMITS.MESSAGE}
                                    className={`w-full px-4 py-3 rounded-lg border ${touched.message && errors.message
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 dark:border-gray-600 focus:ring-accent'
                                        } dark:bg-gray-700 dark:text-white focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                                    placeholder="How can we help you?"
                                    aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                                    aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                                ></textarea>
                                {touched.message && errors.message && (
                                    <div id="message-error" className="mt-1 flex items-center text-sm text-red-600 dark:text-red-400">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.message}
                                    </div>
                                )}
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {formData.message.length}/{LIMITS.MESSAGE} characters
                                </p>
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
