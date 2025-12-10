import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, Phone } from 'lucide-react';
import headshot from '../assets/aaron.png';
import sampleHeadshot from '../assets/sampleHeadshot.png';
import VideoBackground from '../components/VideoBackground';
import bg1 from '../assets/backgrounds/bg1.mp4';
import Luke from '../assets/portraits/Luke.png';
import Bob from '../assets/portraits/Bob-Poley.png';
import Brenda from '../assets/portraits/Brenda.jpg';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Luke Poley",
            role: "Accountant and Director of Technology",
            bio: "On the team, Luke maintains the website and works on optimizing the databases to automate repetitive tasks, build custom functions, and create user interfaces. On Friday nights, he’s usually scripting or discovering the newest CLI trick that saves him five milliseconds on his Linux daily driver. Occasionally, he’ll read philosophy (for boredom), climb a 14er, play golf for the aura, come up with a cool new board game idea, or play sports for the exercise.",
            image: Luke
        },
        {
            id: 2,
            name: "Bob Poley",
            role: "Senior Consultant",
            bio: "Bob Poley provides our team the insight and depth of experience our clients depend on to move forward consistently despite the distraction of day-to-day problems. A former Examiner of registration statements and annual reports on the staff of the SEC, his wide breadth of experience includes biotechnology, telecommunications and oil and gas in both the boom years and the chaos of low and falling prices. He has farmed raspberries, scaled at least a dozen Colorado 14ers and 13ers, and when those hobbies aren’t keeping him busy, enjoys spending time with his wife, children and 14 grandchildren. He has worked with Aaron for over seven years. ",
            image: Bob
        },
        {
            id: 3,
            name: "Brenda Carter",
            role: "Accountant",
            bio: " Brenda Carter has the detail focus and elbow grease to get the job done for our clients. She brings extensive accounting experience in the oil and gas, assisted living and accounting services industries. In her free time, she enjoys spending time with her family, enjoying nature and volunteering at her church. She has worked with Aaron for over Five years.",
            image: Brenda
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
                                Aaron L. Poley, CPA, brings extensive expertise in litigation support, joint interest auditing, and financial reporting to serve clients across diverse industries. With an unwavering commitment to professional excellence and ethical standards, he has successfully guided organizations through complex financial matters, helping clients recover millions in claims while ensuring regulatory compliance and financial transparency. His strategic approach combines technical proficiency with a deep understanding of business operations to deliver comprehensive solutions tailored to each client's unique needs.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/aaronpoley/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="tel:8054195239" className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                                    <Phone className="w-6 h-6" />
                                    <span>805-419-5239</span>
                                </a>
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
