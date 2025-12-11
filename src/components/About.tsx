import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="py-20 bg-white">
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
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Students learning together" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
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
              CodeSynergy is a growing digital skills academy focused on helping
              beginners break into tech through practical, hands-on learning.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Our mission is to make tech education accessible and career-ready
              for Nigerians and African students. We believe that talent is
              evenly distributed, but opportunity is not. We're here to bridge
              that gap.
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