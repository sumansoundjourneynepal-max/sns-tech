import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/hooks/useTheme";
import Logo from "/Lofo.svg";

const navigation = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Services", href: "/services"},
    {name: "Portfolio", href: "/portfolio"},
    {name: "Contact", href: "/contact"},
    {name: "Careers", href: "/careers"},
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {theme, toggleTheme} = useTheme();
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                            <img className="w-full h-full object-center" src={Logo} alt="This is a Logo" />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-90 transition">
                            S&S Tech Co.
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 relative">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`relative text-sm font-medium transition-colors px-1 ${
                                        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-primary"
                                            transition={{duration: 0.3}}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
                            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden w-9 h-9 p-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.25}}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                            location.pathname === item.href
                                                ? "bg-primary text-primary-foreground shadow-sm"
                                                : "text-muted-foreground hover:text-primary hover:bg-muted"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
