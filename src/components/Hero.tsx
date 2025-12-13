
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Code2, Terminal, Palette } from 'lucide-react';
import { SEO } from './SEO';
export function Hero() {
  return <>
  <SEO />
  <section className="relative overflow-hidden bg-stone-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-teal-100/50 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-6">
             🇳🇬 Coding Made Easy for Young Students
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Start Your Tech Journey With{' '}
            <span className="text-orange-600">React</span>,{' '}
            <span className="text-teal-600">Python</span> &{' '}
            <span className="text-purple-600">UI/UX</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="mx-auto max-w-2xl text-lg text-stone-600 mb-10 md:text-xl">
        Enroll your child in our weekend online coding classes made specially for young beginners. Interactive, safe, and engaging.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('registration')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Join the Next Cohort
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('courses')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Courses
            </Button>
          </motion.div>

          {/* Floating Icons Animation */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8,
          duration: 1
        }} className="mt-16 flex justify-center gap-8 text-stone-400 grayscale opacity-50">
            <Code2 className="h-8 w-8" />
            <Terminal className="h-8 w-8" />
            <Palette className="h-8 w-8" />
          </motion.div>
        </div>
      </div>
    </section>
     </>
}