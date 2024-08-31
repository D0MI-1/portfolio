import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, FileText } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Handwerker Dashboard',
        description: 'A Dashboard to manage people, items, vehicles, and machines for different construction sites',
        image: '/screenshots/handwerker.png',
        websiteLink: 'https://handwerker-c3r.pages.dev/',
        githubLink: 'https://github.com/D0MI-1/Handwerker',
        tags: ['React', 'Node.js', 'Firebase', 'Firestore', 'Authentication', 'Lexoffice API', 'Cloudflare Worker']
    },
    {
        id: 2,
        title: 'Invoice OCR',
        description: 'OCR your invoices and create your own invoice with the scanned data to send to your customers',
        image: '/screenshots/OcrGemini.png',
        websiteLink: 'https://ocrwebsite.pages.dev/',
        githubLink: 'https://github.com/D0MI-1/OCRWebsite',
        tags: ['React', 'Node.js','Lexoffice API', 'Cloudflare Worker', 'Gemini Api', 'Mailgun API']
    },
    {
        id: 3,
        title: `Notes'N'Share`,
        description: 'Write Notes for yourself or add a friend and share your notes',
        image: '/screenshots/notesNshare.png',
        websiteLink: 'https://nshare-ctq.pages.dev/',
        githubLink: 'https://github.com/D0MI-1/noteNshare',
        tags: ['React', 'Node.js','Firebase', 'Firestore', 'Authentication']
    },
    {
        id: 4,
        title: 'Pandemic Notebooks',
        description: 'Epidemic dynamics in the context of the Pandemic model and comparison to the SI-, SIS-, SIR-model',
        image: '/screenshots/Pandemic2.png',
        githubLink: 'https://github.com/D0MI-1/Pandemic',
        tags: ['Python', 'Jupyter Notebook','pandas',
            ' networkx',
            ' numpy ',
            ' seaborn ',
            ' matplotlib']
    },
    {
        id: 5,
        title: 'PandemicGui',
        description: 'Pandemic but with a Python Gui',
        image: '/screenshots/PandemicGui.png',
        githubLink: 'https://github.com/D0MI-1/pandemicGUI',
        tags: ['Python', 'Jupyter Notebook','pandas',
            ' networkx',
            ' numpy ',
            ' seaborn ',
            ' matplotlib']
    },
    {
        id: 6,
        title: `Fuel consumbtion calculator`,
        description: 'Quick project to test Tailwind CSS',
        image: '/screenshots/fcCalc.png',
        websiteLink: 'https://d0mi-1.github.io/fuel-consumption-calculator/',
        githubLink: 'https://github.com/D0MI-1/fuel-consumption-calculator/tree/gh-pages',
        tags: ['React', 'Node.js','Tailwind Css']
    },
    {
        id: 7,
        title: `Advent of code`,
        description: 'A nice addition to learn C++ alongside the lecture I was taking, continued for another year',
        image: '/screenshots/aoc.png',
        githubLink: 'https://github.com/D0MI-1/AOC',
        tags: ['C++']
    },
    {
        id: 8,
        title: `Polarization in LGBTQ`,
        description: 'Analysis of Reddit and 4chan regarding the LGBTQ community',
        image: '/screenshots/lgbtq.png',
        githubLink: 'https://github.com/mwhchan8/CSS-LGBT',
        pdfLink: '/pdf/CSS_LGBT.pdf',
        tags: ['Python', 'Datamining', 'Perspective API', '4chan', 'Reddit']
    },
    {
        id: 9,
        title: `Unity Audio project`,
        description: 'Sound design project in Unity for a lecture I was taking',
        image: '/screenshots/unity.png',
        githubLink: '',

        tags: ['Unity', 'C#']
    },

    {
        id: 10,
        title: `Leetcode in C++ and Python`,
        description: 'My solutions to various LeetCode problems',
        image: '/screenshots/leetcodepng.png',
        githubLinks: [
            { url: 'https://github.com/D0MI-1/Leetcode', label: 'C++ Solutions' },
            { url: 'https://github.com/D0MI-1/LeetcodePythonNotebooks', label: 'Python Solutions' }
        ],
        tags: ['C++', 'Python']
    },
];



const useAnimatedName = (originalName, interval = 1000) => {
    const [displayName, setDisplayName] = useState(originalName.split(''));

    useEffect(() => {
        const animationMap = {
            'o': '0', 'i': '1', 'z': '2', 'e': '3', 'a': '4',
            's': '5', 'g': '6', 't': '7', 'b': '8', 'q': '9',
            '0': 'o', '1': 'i', '2': 'z', '3': 'e', '4': 'a',
            '5': 's', '6': 'g', '7': 't', '8': 'b', '9': 'q'
        };

        const animate = () => {
            const index = Math.floor(Math.random() * originalName.length);
            const char = originalName[index].toLowerCase();
            if (animationMap[char]) {
                const newName = [...displayName];
                newName[index] = animationMap[char];
                setDisplayName(newName);
            }
        };

        const timer = setInterval(animate, interval);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [originalName, interval]);

    return displayName;
};

const AnimatedLetter = ({ char, originalChar }) => (
    <div className="inline-block overflow-hidden h-[1em] w-[0.9em] relative">
        <AnimatePresence mode="popLayout">
            <motion.span
                key={char}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {char}
            </motion.span>
        </AnimatePresence>
        <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: char !== originalChar ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            {originalChar}
        </motion.span>
    </div>
);

const AnimatedName = ({ name }) => {
    const displayName = useAnimatedName(name);

    return (
        <h1 className="text-4xl font-bold mb-4">
            {displayName.map((char, index) => (
                <AnimatedLetter key={index} char={char} originalChar={name[index]} />
            ))}
        </h1>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                            <span key={index}
                                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {project.websiteLink && (
                            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer"
                               className="flex items-center text-white hover:text-blue-400 transition-colors duration-200">
                                <ExternalLink size={20} className="mr-2"/>
                                Visit Site
                            </a>
                        )}
                        {project.pdfLink && (
                            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer"
                               className="flex items-center text-white hover:text-blue-400 transition-colors duration-200">
                                <FileText size={20} className="mr-2"/>
                                View PDF
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                               className="flex items-center text-white hover:text-blue-400 transition-colors duration-200">
                                <Github size={20} className="mr-2"/>
                                View Code
                            </a>
                        )}
                        {project.githubLinks && project.githubLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                               className="flex items-center text-white hover:text-blue-400 transition-colors duration-200">
                                <Github size={20} className="mr-2"/>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    return (
        <div className="	 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <header>

            </header>
            <main className="pt-20">
                <section id="home" className=" flex items-center justify-center text-center">
                    <div>
                        <AnimatedName name="Dominik Urban" />

                        <motion.h2
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{opacity: 0, y: -50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                        >
                            Welcome to My Portfolio
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5, duration: 0.8}}
                        >
                            I am a passionate developer with expertise in Java, Python, C++, C#, Unity, React, Next.js
                            and other related technologies.
                            Here you will find a selection of my recent projects showcasing my skills and knowledge.
                        </motion.p>
                    </div>
                </section>

                <section id="projects" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                        <p className="text-xl text-gray-300 mb-8">I'm always open to new opportunities and collaborations.</p>
                        <a
                            href="mailto:dominik.urban1@gmx.de"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-200"
                        >
                            Contact Me <ChevronRight className="ml-2" />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 py-6">
                <div className="container mx-auto px-6 text-center text-gray-300">
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;