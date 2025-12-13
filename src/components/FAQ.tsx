import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const faqs = [
{
  question: 'Is there an age restriction for joining the classes?',
  answer: 'Yes, we welcome students from age 9 and above. We target young kids to expose them to technology early and help liberate Nigerian kids through tech education.'
},
  {
  question: 'Are classes online?',
  answer: 'Yes, all classes are 100% online via Zoom or Google Meet. You can join from anywhere in Nigeria.'
}, {
  question: 'Do I need a laptop?',
  answer: 'Yes, a laptop is required for React and Python courses. For UI/UX, a laptop is highly recommended, though you can start learning concepts on a tablet.'
}, {
  question: 'Will sessions be recorded?',
  answer: 'Absolutely. Every live session is recorded and uploaded to our student portal so you can rewatch anytime.'
}, {
  question: 'Will I get a certificate?',
  answer: 'Yes, upon successful completion of the course and your final project, you will receive a verified certificate from CodeSynergy.'
}, {
  question: 'What if I miss a class?',
  answer: 'No problem! You can watch the recording. Plus, our mentors are available during the week to help you catch up.'
}, {
  question: 'Can I pay in installments?',
  answer: 'Yes, we offer flexible payment plans. You can pay monthly to make it easier on your wallet.'
}];
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-stone-600">
            Everything you need to know about learning with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-semibold text-stone-900">
                  {faq.question}
                </span>
                <ChevronDown className={`h-5 w-5 text-stone-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }}>
                    <div className="px-6 pb-6 text-stone-600">{faq.answer}</div>
                  </motion.div>}
              </AnimatePresence>
            </div>)}
        </div>
      </div>
    </section>;
}