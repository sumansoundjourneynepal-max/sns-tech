import { motion } from 'framer-motion';
import { Monitor, Smartphone, TrendingUp, Share2, Palette, Camera, ArrowRight } from 'lucide-react';
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
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that users love.',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify your reach and maximize ROI.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build meaningful connections and grow your community across platforms.',
    icon: Share2,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Cohesive brand identity that tells your story and resonates with audiences.',
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'photography-videography',
    title: 'Photography & Videography',
    description: 'Professional visual content that captures your brand story and engages audiences.',
    icon: Camera,
    color: 'from-pink-500 to-rose-500',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From concept to launch, we provide end-to-end digital solutions that help your business thrive in the modern landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}