"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import emailjs from "@emailjs/browser";
import {Send, CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Card, CardContent} from "@/components/ui/card";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Please enter a valid email address"),
    company: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "Social Media Marketing",
    "Branding & Design",
    "Photography & Videography",
    "Custom Solution",
];

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setValue,
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Get current date and time
            const now = new Date();
            const submissionDate = now.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const submissionTime = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                company: data.company || "Not specified",
                service: data.service,
                subject: `Inquiry about ${data.service}`, // This will be the subject
                message: data.message,
                phone_number: "Not provided", // Since your form doesn't have phone field
                submission_date: submissionDate,
                submission_time: submissionTime,
            };

            await emailjs.send("service_ofbfmmm", "template_z9ctbcb", templateParams, "xl1r12P2zEsdpiIUR");

            console.log("Form submitted:", data);
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            // You can add error handling here if needed
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                <Card className="max-w-md mx-auto">
                    <CardContent className="p-8 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                            Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                            Send Another Message
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Doe"
                        className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" {...register("company")} placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={(value) => setValue("service", value)}>
                        <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                    {service}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
                {isSubmitting ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                    </>
                )}
            </Button>
        </motion.form>
    );
}
