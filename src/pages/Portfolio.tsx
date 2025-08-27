import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {
    ExternalLink,
    Facebook,
    Instagram,
    Youtube,
    ArrowRight,
    Globe,
    Smartphone,
    TrendingUp,
    Palette,
    Share2,
} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import PageTransition from "@/components/ui/page-transition";
import AnimatedSection from "@/components/ui/animated-section";

export default function Portfolio() {
    const websiteProjects = [
        {
            title: "Pureland Hospitality",
            description:
                "A modern hospitality conglomerate platform showcasing hotel operations, service excellence, and guest experiences across Nepal. Designed to reflect luxury, trust, and service-first values.",
            image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/11/best-luxury-and-most-exclusive-hotels-brands-in-the-world.jpg?fit=1300%2C731&ssl=1",
            tags: ["Hospitality", "Hotels", "Luxury", "Spritual"],
            category: "Web Development",
            gradient: "from-yellow-500 to-amber-600",
            link: "https://purelandhospitality.com.np/",
        },

        {
            title: "Nepal Insurance Authority",
            description:
                "Official government insurance authority website with comprehensive policy information and digital services.",
            image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Government", "Insurance", "Digital Services"],
            category: "Web Development",
            gradient: "from-blue-600 to-indigo-600",
            link: "https://nia.gov.np/",
        },
        {
            title: "Khana Expo",
            description: "Dynamic food exhibition platform showcasing culinary experiences and vendor connections.",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Food", "Exhibition", "E-commerce"],
            category: "Web Development",
            gradient: "from-orange-500 to-red-500",
            link: "https://khanaexpo.com/",
        },
        {
            title: "Food, Beverage & Hospitality Expo",
            description: "Comprehensive expo platform for hospitality industry networking and business connections.",
            image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Hospitality", "B2B", "Events"],
            category: "Web Development",
            gradient: "from-purple-500 to-pink-500",
            link: "https://www.fbhnepal.com/",
        },
        {
            title: "Himalayan School of Outdoor Recreation (HSOR)",
            description: "Adventure education platform promoting outdoor skills and mountain recreation programs.",
            image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Education", "Adventure", "Recreation"],
            category: "Web Development",
            gradient: "from-green-500 to-emerald-500",
            link: "https://hsor.education/",
        },
        {
            title: "Trinity Waterproofing",
            description: "Professional waterproofing services website with project galleries and service information.",
            image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Construction", "Services", "B2B"],
            category: "Web Development",
            gradient: "from-cyan-500 to-blue-500",
            link: "http://www.trinitywaterproofing.com.np/",
        },
        {
            title: "OMSounds Nepal",
            description:
                "Authentic Himalayan singing bowl production company offering handcrafted sound healing instruments and premium audio services.",
            image: "https://res.cloudinary.com/dei0ymk1p/image/upload/v1752241709/a-photograph-of-an-elegant-bronze-singin_1EyNm-dvRbGwJqA6L9KzMw_LYhkjWLnTeCqR80Yrl-J-w_vgb6jh.jpg",
            tags: ["Music", "Audio", "Sound Healing", "Wellness"],
            category: "Web Development",
            gradient: "from-violet-500 to-purple-500",
            link: "https://omsounds.com/",
        },
        {
            title: "House of Rajkarnicar",
            description:
                "Nepal’s first event management company, with a heritage website that highlights its legacy in cultural events, traditional architecture, and artistic significance.",
            image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Event management", "Culture", "Architecture"],
            category: "Web Development",
            gradient: "from-amber-500 to-orange-500",
            link: "https://rajkarnicar.com/",
        },
        {
            title: "Rooted in Sound",
            description:
                "Immersive sound healing and wellness platform connecting people with therapeutic audio experiences.",
            image: "https://images.pexels.com/photos/3693120/pexels-photo-3693120.jpeg?auto=compress&cs=tinysrgb&w=800",
            tags: ["Wellness", "Sound Therapy", "Health"],
            category: "Web Development",
            gradient: "from-teal-500 to-cyan-500",
            link: "https://www.rootedinsound.com/",
        },
        {
            title: "Mastakala",
            description: "Creative arts and cultural platform promoting local artists and cultural events.",
            image: "https://static-01.daraz.com.np/other/shop/3738ba615000421e151abebf601cca83.png",
            tags: ["Arts", "Culture", "Community"],
            category: "Web Development",
            gradient: "from-rose-500 to-pink-500",
            link: "https://www.mastakala.com/",
        },
    ];

    const digitalMarketingClients = [
        "Nepal Insurance Authority",
        "Khana Expo",
        "Food, Beverage & Hospitality Expo",
        "Himalayan School of Outdoor Recreation (HSOR)",
        "Trinity Waterproofing",
        "OMSounds Nepal",
        "House of Rajkarnicar",
        "Rooted in Sound",
        "Mastakala",
        "Lords Hotel",
        "Socheko.com",
        "Dharma Television",
    ];

    const socialMediaClients = [
        {
            name: "Mastakala",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/mastakalanepal"},
                {type: "instagram", url: "https://www.instagram.com/mastakalanepal/"},
            ],
            description: "Creative arts and cultural gifting online and corporate gifting platform",
            image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "The Society Restaurant",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/profile.php?id=61553655304990"},
                {type: "instagram", url: "https://www.instagram.com/thesociety_finedining/"},
            ],
            description: "Fine dining and culinary experience promotion",
            image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Himalayan School of Outdoor Recreation (HSOR)",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/HimalayanSchoolofOutdoorRecreation"},
                {type: "instagram", url: "https://www.instagram.com/hsornepal/"},
            ],
            description: "Adventure education and outdoor activity content",
            image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Hope International college",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/search/top?q=hope%20college%20lalitpur"},
                {type: "instagram", url: "https://www.instagram.com/hopecollegenepal/"},
            ],
            description: "Educational content and school community engagement for their medical students",
            image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "E-Mart",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/people/E-mart-Nepal/100093135937614/"},
                {
                    type: "instagram",
                    url: "https://www.instagram.com/e_martnepal0?fbclid=IwY2xjawLvB6pleHRuA2FlbQIxMABicmlkETF5bHduRnRScHhPRUptbHNVAR7B2HqWEGndKkXBXCaQE39WRhQ6LLulSqzK1YrohWMpOld7ayai6r9sVAKBGA_aem_0UVgMbJqe37GSRC2ssR0NQ",
                },
            ],
            description: "Retail and e-commerce social media strategy",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Dharma Television",
            platforms: [
                {type: "facebook", url: "https://www.facebook.com/televisionsdharma"},
                {type: "youtube", url: "https://www.youtube.com/@dharmatelevision7477"},
                {type: "instagram", url: "https://www.instagram.com/dharmatelevision.tv/"},
            ],
            description: "Buddhist teaching television channel promoting spiritual awareness and mindful living.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYysfqrvalS-TerkBDcijeup1P4ez5WSPkg&s",
        },
    ];

    const brandingProjects = [
        {
            name: "Mastakala",
            description: "Complete brand identity for cultural arts platform",
            image: "https://static-01.daraz.com.np/other/shop/3738ba615000421e151abebf601cca83.png",
        },
        {
            name: "Himalayan School of Outdoor Recreation (HSOR)",
            description: "Adventure education brand identity and visual system",
            image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "The Society Restaurant",
            description: "Premium dining brand identity and marketing materials",
            image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "OMSounds Nepal",
            description:
                "Authentic Himalayan singing bowl production company offering handcrafted sound healing instruments and premium audio services.",
            image: "https://res.cloudinary.com/dei0ymk1p/image/upload/v1752241709/a-photograph-of-an-elegant-bronze-singin_1EyNm-dvRbGwJqA6L9KzMw_LYhkjWLnTeCqR80Yrl-J-w_vgb6jh.jpg",
        },
    ];

    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "facebook":
                return <Facebook className="w-5 h-5" />;
            case "instagram":
                return <Instagram className="w-5 h-5" />;
            case "youtube":
                return <Youtube className="w-5 h-5" />;
            default:
                return null;
        }
    };

    const getSocialColor = (platform: string) => {
        switch (platform) {
            case "facebook":
                return "hover:bg-blue-600";
            case "instagram":
                return "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500";
            case "youtube":
                return "hover:bg-red-600";
            default:
                return "hover:bg-gray-600";
        }
    };

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
                <div className="container mx-auto px-4 lg:px-6">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                            Building Brands. Empowering Growth.
                            <span className="block text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text leading-[2]">
                                Driving Digital Futures.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                            At Sammi and Sounds Tech Co., we don't just create digital solutions—we craft experiences
                            that transform businesses and connect brands with their audiences in meaningful ways.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-blue-600">25+</h3>
                                <p className="text-muted-foreground">Websites Built</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-purple-600">15+</h3>
                                <p className="text-muted-foreground">Brands Created</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-emerald-600">50+</h3>
                                <p className="text-muted-foreground">Social Accounts Managed</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Website Projects */}
            <AnimatedSection className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Globe className="w-8 h-8 text-blue-500 mr-3" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Website Development
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            From government portals to creative platforms, we build websites that perform, engage, and
                            deliver results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {websiteProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.6}}
                                whileHover={{y: -5, scale: 1.02}}
                                className="group"
                            >
                                <Card className="overflow-hidden border-2 border-border hover:border-blue-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="bg-white/90 text-black hover:bg-white"
                                                onClick={() =>
                                                    project.link !== "#" && window.open(project.link, "_blank")
                                                }
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Site
                                            </Button>
                                        </div>
                                        <Badge
                                            className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white border-0`}
                                        >
                                            {project.category}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Digital Marketing */}
            <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <TrendingUp className="w-8 h-8 text-emerald-500 mr-3" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Digital Marketing Excellence
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            We don't just build websites—we help them grow with data-driven digital marketing strategies
                            that deliver measurable results and sustainable growth.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="border-2 border-border bg-card shadow-xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                                    Our Digital Marketing Clients
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {digitalMarketingClients.map((client, index) => (
                                        <motion.div
                                            key={client}
                                            initial={{opacity: 0, x: -20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            viewport={{once: true}}
                                            transition={{delay: index * 0.1, duration: 0.6}}
                                            className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                                        >
                                            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-3" />
                                            <span className="text-foreground font-medium">{client}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="text-center mt-8">
                                    <p className="text-muted-foreground italic">
                                        "From SEO optimization to PPC campaigns, we drive traffic, engagement, and
                                        conversions for businesses across diverse industries."
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* Social Media Management */}
            <AnimatedSection className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Share2 className="w-8 h-8 text-pink-500 mr-3" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Social Media We Manage
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Building communities, engaging audiences, and creating viral content across multiple
                            platforms for brands that want to make a lasting impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {socialMediaClients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.6}}
                                whileHover={{y: -5}}
                                className="group"
                            >
                                <Card className="border-2 border-border hover:border-pink-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                                                {client.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                            {client.description}
                                        </p>

                                        <div className="flex justify-center space-x-4">
                                            {client.platforms.map((platform) => (
                                                <motion.a
                                                    key={platform.type}
                                                    href={platform.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{scale: 1.1, y: -2}}
                                                    whileTap={{scale: 0.95}}
                                                    className={`w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center transition-all duration-300 hover:text-white ${getSocialColor(
                                                        platform.type
                                                    )} shadow-lg hover:shadow-xl`}
                                                    title={`Visit ${client.name} on ${platform.type}`}
                                                >
                                                    {getSocialIcon(platform.type)}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Branding Projects */}
            <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Palette className="w-8 h-8 text-purple-500 mr-3" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Branding & Identity Design
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Creating memorable brand identities that tell your story, connect with your audience, and
                            stand out in competitive markets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {brandingProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.6}}
                                whileHover={{y: -5, scale: 1.02}}
                                className="group"
                            >
                                <Card className="overflow-hidden border-2 border-border hover:border-purple-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Mobile App Development */}
            <AnimatedSection className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Smartphone className="w-8 h-8 text-indigo-500 mr-3" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Mobile App Development
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Developing custom mobile applications and expanding into smart digital solutions that
                            transform how businesses connect with their customers.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="border-2 border-border bg-card shadow-xl overflow-hidden">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
                                <CardContent className="p-8 lg:p-12 relative">
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                                Next-Generation Mobile Solutions
                                            </h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                                We're expanding our expertise into mobile app development, creating
                                                intuitive, high-performance applications that deliver exceptional user
                                                experiences across iOS and Android platforms.
                                            </p>
                                            <ul className="space-y-3 mb-6">
                                                <li className="flex items-center text-muted-foreground">
                                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                                                    Native iOS & Android Development
                                                </li>
                                                <li className="flex items-center text-muted-foreground">
                                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                                                    Cross-Platform Solutions
                                                </li>
                                                <li className="flex items-center text-muted-foreground">
                                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                                                    Smart Digital Integration
                                                </li>
                                                <li className="flex items-center text-muted-foreground">
                                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                                                    Custom Business Solutions
                                                </li>
                                            </ul>
                                            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                                                Coming Soon: Revolutionary Apps
                                            </Badge>
                                        </div>
                                        <div className="relative">
                                            <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-2xl flex items-center justify-center">
                                                <div className="text-center">
                                                    <Smartphone className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                                                    <p className="text-muted-foreground">Mobile App Showcase</p>
                                                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 lg:p-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Ready to Join Our Success Stories?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create digital solutions that not only meet your needs but exceed your
                            expectations and drive meaningful business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-6 text-lg border-2 hover:bg-muted transition-all duration-300"
                                >
                                    Explore Our Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </PageTransition>
    );
}
