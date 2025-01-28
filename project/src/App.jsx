import React, { useState, useEffect, useCallback } from "react"
import { FaSun, FaMoon, FaGithub, FaExternalLinkAlt, FaReact, FaHtml5 } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import { Tilt } from "react-tilt"
import AOS from "aos"
import "aos/dist/aos.css"
import "./App.css"
import img from "./assets/img/WhatsApp Image 2025-01-25 at 12.55.51.jpeg"

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isPhotoHovered, setIsPhotoHovered] = useState(false)
    const [activeTab, setActiveTab] = useState("phone")

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 50,
            easing: "ease-in-out",
        })
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.body.classList.toggle("dark-mode")
    }

    const skills = [
        { name: "Java", level: 85, color: "#f89820" },
        { name: "Spring Boot", level: 80, color: "#6db33f" },
        { name: "JavaScript", level: 75, color: "#f7df1e" },
        { name: "React.js", level: 70, color: "#61dafb" },
        { name: "Git", level: 85, color: "#f05032" },
        { name: "SQL", level: 75, color: "#00758f" },
        { name: "API Testing", level: 80, color: "#ff6c37" },
        { name: "Problem Solving", level: 85, color: "#9c27b0" },
    ]

    const portfolio = [
        {
            title: "Apartment Management System",
            description:
                "Features a dashboard interface with navigation options to manage various tables such as User Table, House Table, Approval Pending, and Today's Visitors.",
            techStack: ["React", "Bootstrap 5"],
            url: "https://apartment-management-sh41.vercel.app/",
            github: "https://github.com/suryakantanayak23?tab=repositories",
            icon: <FaReact className="tech-icon react-icon" />,
        },
        {
            title: "Jewelery Shop UI Clone",
            description: "A static page built with HTML, Bootstrap, and jQuery. Features a clean and responsive design.",
            techStack: ["HTML", "Bootstrap", "jQuery"],
            url: "https://html-one-indol.vercel.app/",
            github: "https://github.com/suryakantanayak23?tab=repositories",
            icon: <FaHtml5 className="tech-icon html-icon" />,
        },
    ]

    return (
        <div className={`portfolio-container ${isDarkMode ? "dark-mode" : ""}`}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        opacity: 0,
                    },
                    particles: {
                        number: { value: 50, density: { enable: true, value_area: 800 } },
                        color: { value: isDarkMode ? "#ffffff" : "#000000" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: false },
                        size: { value: 3, random: true },
                        links: {
                            enable: true,
                            distance: 150,
                            color: isDarkMode ? "#ffffff" : "#000000",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: { default: "bounce" },
                        },
                    },
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                            resize: true,
                        },
                    },
                }}
            />

            <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDarkMode ? "moon" : "sun"}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            <header>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="glowing-text">SURYAKANTA NAYAK</h1>
                    <div className="contact-tabs">
                        <div className="tabs">
                            <motion.button
                                className={`tab ${activeTab === "phone" ? "active" : ""}`}
                                onClick={() => setActiveTab("phone")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Phone
                            </motion.button>
                            <motion.button
                                className={`tab ${activeTab === "email" ? "active" : ""}`}
                                onClick={() => setActiveTab("email")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Email
                            </motion.button>
                            <motion.button
                                className={`tab ${activeTab === "address" ? "active" : ""}`}
                                onClick={() => setActiveTab("address")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Address
                            </motion.button>
                        </div>
                        <motion.div
                            className="tab-content glass-effect"
                            initial={false}
                            animate={{
                                opacity: [0, 1],
                                y: [10, 0],
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === "phone" && <motion.p whileHover={{ scale: 1.1 }}>+91-8917686309</motion.p>}
                            {activeTab === "email" && <motion.p whileHover={{ scale: 1.1 }}>suryakantnayak40@gmail.com</motion.p>}
                            {activeTab === "address" && <motion.p whileHover={{ scale: 1.1 }}>Bhubaneswar, Odisha-751030</motion.p>}
                        </motion.div>
                    </div>
                </motion.div>
            </header>

            <motion.div
                className="profile-section glass-effect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="profile-photo-container"
                    onHoverStart={() => setIsPhotoHovered(true)}
                    onHoverEnd={() => setIsPhotoHovered(false)}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        src={img}
                        alt="Profile"
                        className="profile-photo"
                        animate={{
                            rotate: isPhotoHovered ? [0, -5, 5, -5, 5, 0] : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="photo-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isPhotoHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span>Hello!</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <Tilt options={{ max: 15, scale: 1.05 }}>
                <motion.section
                    className="summary glass-effect"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>SUMMARY</h2>
                    <p>
                        A versatile developer with 1 year of experience in developing and managing websites and internal frameworks,
                        specializing in ReactJS, JavaScript, Spring Boot, and responsive design. I am driven to work in a technical
                        role that enriches my knowledge, allowing me to contribute to corporate growth through my initiative and
                        skills. I aim to excel in a dynamic corporate environment while upholding essential values and principles.
                    </p>
                </motion.section>
            </Tilt>

            <motion.section
                className="skills"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2>SKILLS</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item glass-effect"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="skill-info">
                                <span style={{ color: skill.color }}>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <motion.div
                                    className="skill-progress"
                                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.1 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="portfolio"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2>PORTFOLIO</h2>
                <div className="portfolio-grid">
                    {portfolio.map((project, index) => (
                        <Tilt key={index} options={{ max: 25, scale: 1 }}>
                            <motion.div
                                className="portfolio-item glass-effect"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="portfolio-icon"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                    {project.icon}
                                </motion.div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <motion.span key={i} className="tech-tag" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="portfolio-links">
                                    <motion.a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, x: 5 }}
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, x: 5 }}
                                    >
                                        <FaGithub /> GitHub
                                    </motion.a>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </motion.section>

            <Tilt options={{ max: 15, scale: 1.05 }}>
                <motion.section
                    className="experience glass-effect"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2>EXPERIENCE</h2>
                    <motion.div className="experience-item" whileHover={{ scale: 1.02 }}>
                        <h3>Software Developer at Think talent services (Bhubaneswar, Odisha)</h3>
                        <p>September 2023 - 2024</p>
                        <ul>
                            <li>
                                I worked at Think Talent Services, focusing on LMS tool APIs Designed APIs, structured JSON lists, and
                                single JSON objects efficiently by understanding business logic Iterated through API data using map,
                                filter, or functional operations within JSX components Utilized React hooks for state management, and
                                implemented React Query for handling multiple mutations within components Maintained and implemented a
                                component-based architecture to ensure code maintainability. Upgraded projects from React 16 to React 18
                                across various live projects. Integrated RESTful APIs for serialization and data binding, ensuring
                                seamless data flow. Ensured cross-browser compatibility, and addressed performance issues across
                                platforms and devices
                            </li>
                            <li>Developed APIs, tests, and design patterns</li>
                            <li>Handled multiple multistore within components</li>
                        </ul>
                    </motion.div>
                </motion.section>
            </Tilt>

            <Tilt options={{ max: 15, scale: 1.05 }}>
                <motion.section
                    className="education glass-effect"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2>EDUCATION</h2>
                    <motion.div className="education-item" whileHover={{ scale: 1.02 }}>
                        <h3>B.Tech - Electrical engineering</h3>
                        <p>Institute of Technical education and research, Bhubaneswar</p>
                        <p>2019 - 2023</p>
                        <p>CGPA: 7.4</p>
                    </motion.div>
                </motion.section>
            </Tilt>

            <Tilt options={{ max: 15, scale: 1.05 }}>
                <motion.section
                    className="experience glass-effect"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h2>P R O J E C T S</h2>
                    <motion.div className="experience-item" whileHover={{ scale: 1.02 }}>
                        <ul>
                            <li>
                                LMS User Side Platform, React Strap, Spring Boot, Spring Boot backend-based process for Think Talent
                                country-wise requirement developed through Think Talent managed NextV3 platforms. PMS, HTML5, Spring
                                Boot, Bootstrap 5, JavaScript, React JS, Giving feasibility to clients to assign modules for users,
                                monitoring for students from 7 to 17 as well as for High Potential (HP) children & teenagers. Discover
                                this amazing educative game to develop Emotional Intelligence (EQ) and to improve leadership.
                            </li>
                            <li>
                                Employee Management System, HTML5, CSS3, Bootstrap, JavaScript, Management site that provides a platform
                                for experts of any kind to create courses which can be offered to the public for both corporate users
                                and individual users.
                            </li>
                            <li>Developed APIs, tests, and design patterns</li>
                            <li>Handled multiple multistore within components</li>
                        </ul>
                    </motion.div>
                </motion.section>
            </Tilt>

            <footer className="glass-effect" style={{ padding: "2rem", marginTop: "2rem", textAlign: "center" }}>
                <motion.a
                    href="https://github.com/suryakantnayak23?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="footer-link"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    <FaGithub size={24} />
                    <span>Visit my GitHub</span>
                </motion.a>
                <p style={{ marginTop: "1rem" }}>&copy; {new Date().getFullYear()} Suryakanta Nayak. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App

