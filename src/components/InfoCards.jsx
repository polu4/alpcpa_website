import React from 'react';
import { Scale, FileSpreadsheet, FileBarChart, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';
import bg1 from '../assets/backgrounds/bg1.mp4';

const InfoCards = () => {
    const cards = [
        {
            id: 1,
            title: "Litigation Support",
            icon: <Scale className="w-12 h-12 text-accent" />,
            description: "Expert financial analysis and testimony for legal proceedings. We provide clarity in complex financial disputes."
        },
        {
            id: 2,
            title: "Joint Interest Auditing",
            icon: <FileSpreadsheet className="w-12 h-12 text-accent" />,
            description: "Comprehensive audits for joint ventures ensuring compliance and accuracy in financial reporting."
        },
        {
            id: 3,
            title: "Financial Reporting",
            icon: <FileBarChart className="w-12 h-12 text-accent" />,
            description: "Detailed and accurate financial statements tailored to meet regulatory requirements and business needs."
        },
        {
            id: 4,
            title: "Taxation",
            icon: <Calculator className="w-12 h-12 text-accent" />,
            description: "Strategic tax planning and preparation for businesses and individuals so you never overpay your taxes."
        }
    ];

    return (
        <section className="py-12 pb-24 relative -mt-1" id="services">
            <VideoBackground videoSrc={bg1} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Technical Expertise</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Delivering precision and integrity in every financial engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="mb-6 p-4 bg-primary/5 dark:bg-primary/20 rounded-full w-fit group-hover:bg-primary/10 dark:group-hover:bg-primary/30 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoCards;
