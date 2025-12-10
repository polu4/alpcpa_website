import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <footer className="bg-primary text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Aaron L Poley CPA</h3>
                                <p className="text-gray-400">
                                    Absolute professionalism, integrity, and accountability.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact</h3>
                                <p className="text-gray-400">Erie, Colorado</p>
                                <p className="text-gray-400">contact@aaronpoleycpa.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                    <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
                                    <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Aaron L Poley CPA. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
