import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEO/SEOHead';
import { Monitor, Smartphone, TrendingUp, Share2, Palette, Camera, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom websites that drive engagement and convert visitors into customers.',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Responsive, mobile-first design',
      'SEO-optimized architecture',
      'Fast loading performance',
      'Content management systems',
      'E-commerce integration',
      'Analytics and tracking setup',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that users love.',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'iOS and Android development',
      'Cross-platform solutions',
      'User-centered design',
      'App store optimization',
      'Push notifications',
      'Offline functionality',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify your reach and maximize ROI.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    benefits: [
      'Search engine optimization',
      'Pay-per-click advertising',
      'Email marketing campaigns',
      'Conversion optimization',
      'Analytics and reporting',
      'Marketing automation',
    ],
    technologies: ['Google Ads', 'Google Analytics', 'HubSpot', 'Mailchimp', 'SEMrush'],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build meaningful connections and grow your community across platforms.',
    icon: Share2,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Content strategy development',
      'Community management',
      'Influencer partnerships',
      'Social media advertising',
      'Brand voice development',
      'Performance analytics',
    ],
    technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'TikTok', 'Twitter'],
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Cohesive brand identity that tells your story and resonates with audiences.',
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
    benefits: [
      'Logo and visual identity',
      'Brand guidelines',
      'Marketing materials',
      'UI/UX design',
      'Print and digital assets',
      'Brand strategy consulting',
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Framer', 'Canva'],
  },
  {
    id: 'photography-videography',
    title: 'Photography & Videography',
    description: 'Professional visual content that captures your brand story and engages audiences.',
    icon: Camera,
    color: 'from-pink-500 to-rose-500',
    benefits: [
      'Corporate photography',
      'Product photography',
      'Event documentation',
      'Promotional videos',
      'Social media content',
      'Brand storytelling videos',
    ],
    technologies: ['Canon/Sony Cameras', 'Adobe Premiere Pro', 'After Effects', 'Lightroom', 'DaVinci Resolve'],
  },
];

export function Services() {
  return (
    <div className="pt-8">
      <SEOHead 
        title="Our Services"
        description="Comprehensive digital solutions including website development, mobile apps, digital marketing, social media marketing, branding & design, and professional photography & videography services."
        keywords="website development, mobile app development, digital marketing, social media marketing, branding, design, photography, videography, SEO, PPC advertising"
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Comprehensive digital solutions including visual content creation designed to accelerate your business growth and establish your competitive edge in the market.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className={`h-64 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-24 h-24 text-white/20" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our services can help you achieve your goals and drive meaningful growth for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}