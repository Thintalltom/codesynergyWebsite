
import { motion } from 'framer-motion';
import { Calendar, Video, Briefcase, Users, Wallet, Award, HeartHandshake } from 'lucide-react';
const benefits = [{
  icon: Calendar,
  title: 'Weekend Classes',
  description: 'Ideal for young learners. Kids can build tech skills on weekends without missing school.'
}, {
  icon: Video,
  title: 'Live + Recorded',
  description: 'Interactive live sessions. Missed a class? Watch the recording anytime.'
}, {
  icon: Briefcase,
  title: 'Real Projects',
  description: "Don't just watch tutorials. Build real projects for your portfolio."
}, {
  icon: Users,
  title: 'Mentorship',
  description: 'Get guidance from experienced developers who want you to succeed.'
}, {
  icon: Wallet,
  title: 'Affordable Pricing',
  description: 'Quality education priced for the Nigerian economy.'
}, {
  icon: Award,
  title: 'Certification',
  description: 'Kids earn a certificate they can proudly add to their portfolio or school achievements.'
}, {
  icon: HeartHandshake,
  title: 'Beginner Focused',
  description: 'Perfect for beginners. We start at the very beginning and make learning easy.'
}];
export function WhyChoose() {
  return <section className="py-20 sm:px-0 md:px-10 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">
            Why Choose CodeSynergy?
          </h2>
          <p className="text-lg text-stone-600">
            We're not just another tutorial site. We're a community dedicated to
            your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-stone-600">{benefit.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}