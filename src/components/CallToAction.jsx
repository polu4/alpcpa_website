import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import VideoBackground from './VideoBackground';
import bg2 from '../assets/backgrounds/bg2.mp4';

const CallToAction = () => {
    return (
        <section className="py-20 relative -mt-1">
            <VideoBackground videoSrc={bg2} />
            {/* Blur intersection overlay */}
            <div
                className="absolute top-0 left-0 right-0 h-32 -translate-y-1/2 z-20 pointer-events-none"
                style={{
                    backdropFilter: 'blur(12px)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
                }}
            ></div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
                    Ready to Secure Your Financial Future?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    Contact us today to schedule a consultation and discover how we can help you achieve your financial goals.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
