
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
const upcoming = ['Product Management', 'Cybersecurity', 'Graphic Design', 'Data Analytics'];
export function ComingSoon() {
  return <section className="py-16 sm:px-0 md:px-10 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 text-orange-400 mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">
                Expanding Soon
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              More Skills for the Future
            </h3>
            <p className="text-stone-400">
              These programs will open as soon as we have enough interested
              students. Join the waitlist to be notified!
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {upcoming.map((item, index) => <motion.div key={item} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-stone-800/50 border border-stone-700 rounded-lg p-4 text-center flex items-center justify-center h-24 hover:bg-stone-800 transition-colors">
                <span className="font-medium text-stone-200">{item}</span>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}