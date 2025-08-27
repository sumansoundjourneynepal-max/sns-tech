"use client";

import type React from "react";
import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Zap, Mail, Phone, MapPin, Linkedin, Instagram, ChevronRight, Send, Facebook} from "lucide-react";

interface QuickLink {
    name: string;
    href: string;
}

interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<{className?: string}>;
}

const quickLinks: QuickLink[] = [
    {name: "About", href: "/about"},
    {name: "Services", href: "/services"},
    {name: "Contact", href: "/contact"},
    {name: "Careers", href: "/careers"},
    {name: "Blog", href: "/blog"},
    {name: "Faq", href: "/faq"},
    {name: "Privacy Policy", href: "/privacy-policy"},
];

const socialLinks: SocialLink[] = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/suman-kunwar-204286227/", icon: Linkedin},
    {name: "Instagram", href: "https://www.instagram.com/snstech.co/", icon: Instagram},
    {name: "Facebook", href: "https://www.facebook.com/SNSTechCo", icon: Facebook},
];

// Scroll to top component
const ScrollToTop: React.FC = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState<string>("");

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        setEmail("");
    };

    return (
        <>
            <ScrollToTop />
            <footer className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div>
                            <div className="mb-4">
                                <Link to="/" className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        S&S Tech Co
                                    </span>
                                </Link>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                Empowering brands and engineering futures through innovative digital solutions. We help
                                businesses grow with cutting-edge technology and design-driven experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                        >
                                            <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Mobile Apps Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        UI/UX Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Social Media Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Photography/Videography
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-blue-400 flex items-center transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                        Tech Consulting
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-400">
                                    <Mail className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>info@snstech.co</span>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Phone className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>+977 980-8245094</span>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>Sanepa, Lalitpur</span>
                                </li>
                            </ul>

                            {/* Social Media Icons */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h3>
                                <div className="flex space-x-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
                                            aria-label={social.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-slate-700 mt-12 pt-8">
                        <div className="flex flex-col items-center">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Sammi and Sounds Tech Co. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
