import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail } from 'lucide-react';
import headshot from '../assets/aaron.png';
import sampleHeadshot from '../assets/sampleHeadshot.png';
import VideoBackground from '../components/VideoBackground';
import bg1 from '../assets/backgrounds/bg1.mp4';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Senior Auditor",
            bio: "Sarah brings over 10 years of auditing experience, specializing in joint interest audits for the energy sector.",
            image: sampleHeadshot
        },
        {
            id: 2,
            name: "Glizzy Hands",
            role: "Tax Specialist",
            bio: "Glizzy is an expert in corporate taxation and strategic planning, helping businesses navigate complex tax landscapes.",
            image: sampleHeadshot
        },
        {
            id: 3,
            name: "Lukas Timothy",
            role: "Financial Analyst",
            bio: "Lukas specializes in financial reporting and data analysis, delivering actionable insights for our clients.",
            image: sampleHeadshot
        }
    ];

    return (
        <div className="pt-24 pb-24 min-h-screen relative">
            <VideoBackground videoSrc={bg1} />
            {/* Aaron's Profile */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-primary relative">
                            <img src={headshot} alt="Aaron L Poley" className="w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent md:bg-gradient-to-r" />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Aaron L. Poley</h1>
                            <p className="text-accent text-xl font-medium mb-6">CPA & Founder</p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                With a focus on litigation support, joint interest auditing, and financial reporting, Aaron leads the firm with a commitment to absolute professionalism and integrity. His expertise has helped clients recover millions in claims and navigate complex financial challenges.
                            </p>
                            <div className="flex space-x-4">
                                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                    <span>LinkedIn</span>
                                </button>
                                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                                    <Mail className="w-6 h-6" />
                                    <span>Email</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Meet Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center cursor-pointer group"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:border-accent transition-colors">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                            <p className="text-accent text-sm font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="p-8 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-md mb-6">
                                    <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{selectedMember.name}</h3>
                                <p className="text-accent font-medium mb-6">{selectedMember.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {selectedMember.bio}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Team;
