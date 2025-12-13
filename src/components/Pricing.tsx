
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
const plans = [{
  name: 'Frontend Development',
  price: '₦20,000',
  duration: '6  Months',
  features: ['HTML, CSS, JavaScript', 'React & Tailwind', 'API Integration', 'Certificate of Completion'],
  color: 'border-blue-200',
  btnVariant: 'outline' as const
}, {
  name: 'Backend Development',
  price: '₦20,000',
  duration: '3 Months',
  features: ['Python Fundamentals', 'Django/Flask', 'Database Management', 'Certificate of Completion'],
  color: 'border-teal-200',
  btnVariant: 'outline' as const
}, {
  name: 'UI/UX Design',
  price: '₦20,000',
  duration: '3 Months',
  features: ['Design Principles', 'Figma Mastery', 'Prototyping', 'Certificate of Completion'],
  color: 'border-purple-200',
  btnVariant: 'outline' as const
}];
export function Pricing() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-stone-600">
            Invest in your future with flexible payment options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className={`relative p-8 bg-white rounded-2xl border-2 ${plan.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-stone-900">
                    {plan.price}
                  </span>
                  <span className="text-stone-500">/month</span>
                </div>
                <p className="text-sm text-stone-500 mt-2 font-medium bg-stone-100 inline-block px-2 py-1 rounded">
                  Duration: {plan.duration}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => <li key={i} className="flex items-start text-stone-600 text-sm">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    {feature}
                  </li>)}
              </ul>

              <Button variant={plan.btnVariant} className="w-full" onClick={() => document.getElementById('registration')?.scrollIntoView({
            behavior: 'smooth'
          })}>
                Choose Plan
              </Button>
            </motion.div>)}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            * Flexible payment plans available. Contact us for bundle discounts.
          </p>
        </div>
      </div>
    </section>;
}