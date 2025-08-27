import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEO/SEOHead';
import { Target, Eye, Users, Rocket, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every line of code, every design decision, and every strategy we create serves a greater purpose—your success.',
  },
  {
    icon: Rocket,
    title: 'Innovation Focused',
    description: 'We embrace emerging technologies and methodologies to stay at the forefront of digital transformation.',
  },
  {
    icon: Users,
    title: 'Collaboration First',
    description: 'We believe the best solutions emerge from true partnership and open communication with our clients.',
  },
  {
    icon: Award,
    title: 'Excellence Standard',
    description: 'Quality isn\'t just a goal—it\'s our baseline. We deliver nothing less than exceptional results.',
  },
];

export function About() {
  return (
    <div className="pt-8">
      <SEOHead 
        title="About Us"
        description="Learn about Sammi and Sounds Tech Co - a mission-driven startup founded in 2025, committed to transforming the digital landscape through innovative technology solutions."
        keywords="about us, startup story, company mission, vision, values, technology innovation, digital transformation"
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Born from ambition, driven by innovation, and committed to transforming the digital landscape one project at a time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                How It All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Began</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Sammi and Sounds Tech Co was founded in 2025 with a bold vision: to bridge the gap between 
                  cutting-edge technology and meaningful business impact. What started as conversations between 
                  passionate technologists has evolved into a mission-driven startup.
                </p>
                <p>
                  We recognized that many businesses struggle to navigate the complex digital landscape. 
                  They need more than just service providers—they need true partners who understand both 
                  the technical challenges and the business objectives.
                </p>
                <p>
                  Today, we're building more than just websites and apps. We're crafting digital experiences 
                  that drive real business outcomes while laying the foundation for our future as a 
                  product-focused technology company.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <Globe className="w-16 h-16 mb-6 text-blue-100" />
                <h3 className="text-2xl font-bold mb-4">Global Impact, Local Touch</h3>
                <p className="text-blue-100 leading-relaxed">
                  While we think globally about technology trends and market opportunities, 
                  we bring a personal, hands-on approach to every client relationship. 
                  Your success stories become part of our journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, 
                    enhance user experiences, and create lasting competitive advantages. We're 
                    committed to being the technology partner that helps our clients not just 
                    adapt to the digital future, but lead it.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a recognized leader in technology innovation, known for creating 
                    solutions that don't just meet today's needs but anticipate tomorrow's 
                    opportunities. We envision a future where our products and services set 
                    new standards for digital excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The principles that guide everything we do and shape how we approach every project, partnership, and challenge.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}