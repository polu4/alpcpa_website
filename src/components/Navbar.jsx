import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Our Team', path: '/team' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex flex-col group">
                                <span className="text-xl font-bold text-primary dark:text-white tracking-tight leading-none group-hover:text-accent transition-colors">AARON L. POLEY</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase mt-1">Certified Public Accountant</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.filter(link => link.name !== 'Contact Us').map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-primary dark:hover:border-white"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
                            >
                                Contact Us
                            </Link>


                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center right-2">

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white p-2 focus:outline-none"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-24 px-4 pb-4 md:hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-accent py-4 border-b border-gray-100 dark:border-gray-800"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
