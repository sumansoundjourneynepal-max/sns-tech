"use client";

import {motion} from "framer-motion";
import {Mail, Phone, MapPin, Clock, MessageCircle} from "lucide-react";
import {ContactForm} from "@/components/forms/ContactForm";
import {Card, CardContent} from "@/components/ui/card";
import {CopyToClipboard} from "@/components/copy-to-clipboard";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        content: "info@snstech.co",
        description: "Send us an email anytime",
        copyable: true,
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+977 980-8245094",
        description: "Call us during business hours",
        copyable: true,
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Sanepa, Lalitpur",
        description: "Remote-first, globally connected",
        link: "https://www.google.com/maps/search/?api=1&query=San+Francisco%2C+CA",
    },
    {
        icon: Clock,
        title: "Response Time",
        content: "Within 24 hours",
        description: "We respond to all inquiries",
    },
];

export function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stopColor="rgba(0,128,128,0.1)" />
                                <stop offset="100%" stopColor="rgba(0,128,128,0)" />
                            </radialGradient>
                            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stopColor="rgba(75,0,130,0.1)" />
                                <stop offset="100%" stopColor="rgba(75,0,130,0)" />
                            </radialGradient>
                        </defs>
                        <rect x="0" y="0" width="100" height="100" fill="url(#gradient1)" />
                        <circle cx="70" cy="30" r="25" fill="url(#gradient2)" />
                        <circle cx="20" cy="80" r="30" fill="url(#gradient1)" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
                        >
                            Let's{" "}
                            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                Connect
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
                        >
                            Ready to transform your business? We'd love to hear about your project and explore how we
                            can help you achieve your goals.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards Section */}
            <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{opacity: 0, scale: 0.9}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="group"
                            >
                                <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 rounded-xl overflow-hidden flex flex-col justify-between">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div
                                            className="w-16 h-16 bg-teal-500 dark:bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0
                                  group-hover:scale-110 transition-transform duration-300"
                                        >
                                            <info.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100">
                                                {info.title}
                                            </h3>
                                            {info.copyable ? (
                                                <CopyToClipboard text={info.content}>
                                                    <p className="text-teal-600 dark:text-teal-400 font-medium text-lg">
                                                        {info.content}
                                                    </p>
                                                </CopyToClipboard>
                                            ) : info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-teal-600 dark:text-teal-400 font-medium text-lg hover:underline"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-teal-600 dark:text-teal-400 font-medium text-lg">
                                                    {info.content}
                                                </p>
                                            )}
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {info.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form and Map Section */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        {/* Contact Form */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className="flex flex-col"
                        >
                            <Card className="flex-1 border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900 rounded-xl">
                                <CardContent className="p-8">
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                                            Send us a Message
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Fill out the form below and we'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Interactive Map */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className="flex flex-col"
                        >
                            <Card className="flex-1 border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                                <CardContent className="p-0 h-full flex flex-col">
                                    <div className="p-8 pb-0">
                                        <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                                            Our Location
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            While we're remote-first, you can find our main hub on the map.
                                        </p>
                                    </div>
                                    <div className="relative flex-1 w-full rounded-b-xl overflow-hidden group">
                                        {/* <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Map of San Francisco"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    /> */}
                                        <div className="p-8">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.2976692262918!2d85.3040582!3d27.680501000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190054382911%3A0x97f42292c7b74db6!2sSammi%20%26%20Sounds%20Tech%20Co.!5e0!3m2!1sen!2snp!4v1756024759088!5m2!1sen!2snp"
                                                width="100%"
                                                height="450"
                                                style={{border: 0, borderRadius: "10px"}}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href="https://maps.app.goo.gl/dahugQmYpqXTqqQ47"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300"
                                            >
                                                <MapPin className="w-5 h-5 mr-2" /> View on Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Secondary CTA Section (Optional, if not integrated above) */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="max-w-3xl mx-auto"
                    >
                        <MessageCircle className="w-16 h-16 text-teal-100 mx-auto mb-6" />
                        <h3 className="text-4xl font-bold mb-4">Ready for a Deeper Dive?</h3>
                        <p className="text-xl text-teal-100 mb-8">
                            Schedule a free 30-minute consultation to discuss your project in detail and discover how we
                            can bring your vision to life.
                        </p>
                        <a
                            href="#" // Replace with actual scheduling link
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group"
                        >
                            Book a Free Consultation
                            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
