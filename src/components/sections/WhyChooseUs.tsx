import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Heart } from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, leveraging the latest technologies and methodologies to deliver cutting-edge solutions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Reliability & Trust',
    description: 'Your success is our commitment. We build lasting partnerships based on transparency, quality, and dependable delivery.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    description: 'Fast turnarounds without compromising quality. We move at startup speed while maintaining enterprise standards.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Every project gets our full dedication. We pour our expertise and enthusiasm into crafting exceptional experiences.',
    color: 'from-orange-500 to-red-500',
  },
];

export function WhyChooseUs() {
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
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S&S Tech Co</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We combine startup agility with enterprise expertise to deliver exceptional results that drive your business forward.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="text-center group cursor-pointer"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}