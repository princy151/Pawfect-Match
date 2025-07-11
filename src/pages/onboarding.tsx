import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const accentColor = "#A7522A";

const OnboardingSinglePage: React.FC = () => {
    const [stage, setStage] = useState<"start" | "info" | "instructions">("start");
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.fontFamily = "'Poppins', sans-serif";
        return () => {
            document.body.style.fontFamily = "";
        };
    }, []);

    const adopterSteps = [
        { emoji: "📝", title: "Create Account", desc: "Sign up to start your adoption journey." },
        { emoji: "🔐", title: "Login", desc: "Access your profile securely." },
        { emoji: "🔍", title: "Search Pets", desc: "Find pets that you’re interested in adopting." },
        { emoji: "📝", title: "Fill Adoption Form", desc: "Submit your interest by filling the form." },
        { emoji: "🛍️", title: "Shop Essentials", desc: "Browse pet necessities in our shop." },
        { emoji: "💵", title: "Payment", desc: "Easy payment integration using e-sewa and khalti." },
        { emoji: "📞", title: "Get Contacted", desc: "Shelter will reach out to you for next steps." },
    ];

    const shelterSteps = [
         { emoji: "📝", title: "Create Account", desc: "Register as a shelter." },
         { emoji: "🔐", title: "Login", desc: "Access your profile securely." },
        { emoji: "➕", title: "Add Pets", desc: "List pets available for adoption." },
        { emoji: "🛒", title: "Manage Shop", desc: "Add, edit, or delete shop items." },
        { emoji: "✏️", title: "Edit Listings", desc: "Keep pet info accurate and updated." },
        { emoji: "📄", title: "Review Forms", desc: "Check adoption forms submitted by adopters." },
        { emoji: "☎️", title: "Contact Adopters", desc: "Reach out to interested adopters." },
    ];

    const getStageIndex = () => {
        switch (stage) {
            case "start": return 0;
            case "info": return 1;
            case "instructions": return 2;
            default: return 0;
        }
    };

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center px-6 py-6 relative overflow-hidden"
            style={{
                fontFamily: "'Poppins', sans-serif",
                background: "#F9F4F0",
            }}
        >
            <div className="absolute top-4 right-6 z-10">
                <button
                    onClick={() => navigate("/")}
                    className="font-semibold hover:underline text-lg"
                    style={{ color: accentColor }}
                >
                    Skip &rarr;
                </button>
            </div>

            <div className="flex-1 w-full flex items-center justify-center z-10">
                <AnimatePresence mode="wait">
                    {stage === "start" && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl font-bold mb-6" style={{ color: accentColor }}>
                                🐾 Welcome to PawPal
                            </h1>
                            <p className="mb-10 text-gray-700 text-xl max-w-xl mx-auto">
                                Find or help a furry friend today
                            </p>
                            <button
                                onClick={() => setStage("info")}
                                className="px-12 py-4 rounded-xl text-2xl font-semibold transition"
                                style={{ backgroundColor: accentColor, color: "white" }}
                            >
                                Get Started
                            </button>
                        </motion.div>
                    )}

                    {stage === "info" && (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl font-semibold mb-6" style={{ color: accentColor }}>
                                Who are you? 🤔
                            </h2>
                            <p className="mb-12 text-gray-700 text-xl max-w-xl mx-auto">
                                If you're here to adopt a pet, follow the adopter steps. If you're managing a shelter,
                                check the shelter guide.
                            </p>
                            <button
                                onClick={() => setStage("instructions")}
                                className="px-12 py-4 rounded-xl text-2xl font-semibold transition"
                                style={{ backgroundColor: accentColor, color: "white" }}
                            >
                                Okay
                            </button>
                        </motion.div>
                    )}

                    {stage === "instructions" && (
                        <motion.div
                            key="instructions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="max-w-6xl w-full px-4 hide-scrollbar"
                            style={{
                                maxHeight: "calc(100vh - 140px)",
                                overflowY: "auto",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: accentColor }}>
                                📋 How it Works
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Adopter Steps */}
                                <section>   
                                    <p className="mb-6 font-semibold text-lg" style={{ color: accentColor }}>
                                        Click on:<br />
                                        👉 I am an adopter
                                    </p>
                                    <div className="grid grid-cols-1 gap-6">
                                        {adopterSteps.map(({ emoji, title, desc }, idx) => (
                                            <motion.div
                                                key={`adopter-step-${idx}`}
                                                className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-[#FAE4D4] to-[#F8D8B6] flex flex-col h-36"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * idx }}
                                            >
                                                <div className="flex items-center gap-4 mb-2 select-none">
                                                    <span className="text-3xl">{emoji}</span>
                                                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                                                </div>
                                                <p className="text-gray-800 text-md">{desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>

                                {/* Shelter Steps */}
                                <section>
                                    <p className="mb-6 font-semibold text-lg" style={{ color: accentColor }}>
                                        Click on: <br />
                                        🏠 I am a shelter
                                    </p>
                                    <div className="grid grid-cols-1 gap-6">
                                        {shelterSteps.map(({ emoji, title, desc }, idx) => (
                                            <motion.div
                                                key={`shelter-step-${idx}`}
                                                className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-[#D4E6FA] to-[#CFE4FF] flex flex-col h-36"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * idx }}
                                            >
                                                <div className="flex items-center gap-4 mb-2 select-none">
                                                    <span className="text-3xl">{emoji}</span>
                                                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                                                </div>
                                                <p className="text-gray-800 text-md">{desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => navigate("/")}
                                    className="mt-12 px-12 py-4 rounded-xl text-xl font-semibold transition"
                                    style={{ backgroundColor: accentColor, color: "white" }}
                                >
                                    I Understand
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Progress Circles */}
            <div className="flex gap-4 mt-6 absolute bottom-4 z-20">
                {["start", "info", "instructions"].map((s, i) => (
                    <div
                        key={i}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${getStageIndex() === i
                            ? "bg-[#A7522A] scale-110"
                            : "bg-[#D9C4B1] opacity-50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OnboardingSinglePage;
