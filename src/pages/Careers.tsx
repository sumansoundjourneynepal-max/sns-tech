import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEO/SEOHead';
import { Users, Rocket, Heart, Globe, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const perks = [
  {
    icon: Rocket,
    title: 'Startup Environment',
    description: 'Be part of building something from the ground up with real impact on company direction.',
  },
  {
    icon: Globe,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and a focus on results over presence.',
  },
  {
    icon: Heart,
    title: 'Growth Opportunities',
    description: 'Rapid career progression as we scale, with mentorship and learning opportunities.',
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'Work with passionate professionals who value innovation, creativity, and mutual support.',
  },
];

export function Careers() {
  return (
    <div className="pt-8">
      <SEOHead 
        title="Careers"
        description="Join Sammi and Sounds Tech Co - We're building something extraordinary and looking for passionate individuals who want to shape the future of digital innovation."
        keywords="careers, jobs, hiring, startup jobs, developer jobs, designer jobs, marketing jobs, remote work, San Francisco jobs"
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
              Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We're building something extraordinary and looking for passionate individuals who want to shape the future of digital innovation with us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S&S Tech Co</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Join a team that values innovation, growth, and making a real impact in the digital world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                      <perk.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{perk.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current State */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">We're Growing Fast</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a newly launched startup, we're in an exciting phase of rapid growth and expansion. 
                While we don't have specific open positions posted yet, we're always looking for 
                exceptional talent to join our mission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Interested in Joining?</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      We're particularly interested in connecting with talented developers, designers, 
                      marketers, and strategists who share our passion for innovation and excellence. 
                     Digital Marketing, Photography & Videography, Business Development, Project Management
                    </p>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Areas of Interest:</strong> Full-Stack Development, UI/UX Design, 
                        Digital Marketing, Business Development, Project Management
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => window.location.href = 'mailto:careers@sammisounds.tech?subject=Career Interest - S&S Tech Co'}
                        >
                          Send Your Info
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                          Learn More About Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
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
              Shape the Future with Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              Join us in building not just services, but the future of technology. Together, we'll create 
              solutions that don't just meet today's needs, but anticipate tomorrow's opportunities.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}