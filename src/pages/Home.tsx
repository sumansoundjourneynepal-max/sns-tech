import {SEOHead} from "@/components/SEO/SEOHead";
import {Hero} from "@/components/sections/Hero";
import {ServicesOverview} from "@/components/sections/ServicesOverview";
import {AboutPreview} from "@/components/sections/AboutPreview";
import {WhyChooseUs} from "@/components/sections/WhyChooseUs";
import {Testimonials} from "@/components/sections/Testimonials";

export function Home() {
    return (
        <>
            <SEOHead
                title="Home"
                description="Leading startup software company specializing in website development, mobile apps, digital marketing, social media marketing, branding & design, and professional photography & videography services."
                keywords="web development, mobile app development, digital marketing, social media marketing, branding, design, photography, videography, startup, software company"
            />
            <Hero />
            <ServicesOverview />
            <AboutPreview />
            <WhyChooseUs />
            <Testimonials />
        </>
    );
}
