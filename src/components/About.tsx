
import { motion } from 'framer-motion';
import ChildrenImage from '../assets/ChildrenImage.png';
export function About() {
  return <section className="py-20 bg-white px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-full -z-10" />
              <img src={ChildrenImage} alt="Students learning together" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-6">
              About CodeSynergy
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              CodeSynergy is an emerging tech education academy that supports beginners in gaining real digital skills through guided, practical training.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            We aim to give every Nigerian and African child the chance to learn tech skills early. Talent exists everywhere, but opportunities don’t and our goal is to help close that gap.
            </p>

            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-orange-600">
                  100%
                </span>
                <span className="text-sm text-stone-500">Online</span>
              </div>
              <div className="w-px bg-stone-200" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-teal-600">
                  24/7
                </span>
                <span className="text-sm text-stone-500">Support</span>
              </div>
              <div className="w-px bg-stone-200" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-purple-600">
                  Practical
                </span>
                <span className="text-sm text-stone-500">Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}