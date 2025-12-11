import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';

export function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setError('');
    
    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch('https://email-sender-98we.vercel.app/api/codesynergy-notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.name?.valueOf,
          Email: form.email?.value,
          Number: form.phone?.value,
          Course: form.course?.value
        })
      });
       await fetch('https://email-sender-98we.vercel.app/api/codesynergy-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: form.email?.value,

        })
      });
    
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
      }
      
      const data = await response.json();
      console.log('Form submitted', data);
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Submission error:', error);
      if (error.name === 'TypeError' || error.message?.includes('CORS') || error.message?.includes('fetch')) {
        setError('Server connection issue. Please contact us directly on WhatsApp for registration.');
      } else {
        setError('Something went wrong. Please try again or contact us on WhatsApp.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="registration" className="py-20 bg-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Don't wait for the "perfect time". The best time to start learning
              is now. Join our next cohort and transform your career in just a
              few months.
            </p>
            <ul className="space-y-4 text-orange-50">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white" />
                Limited spots available per cohort
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white" />
                Direct access to mentors
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white" />
                Career guidance included
              </li>
            </ul>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-stone-900">
              {isSuccess ? <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    Registration Received!
                  </h3>
                  <p className="text-stone-600">
                    Thanks for signing up. We'll contact you on WhatsApp shortly
                    with the next steps.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={() => { setIsSuccess(false); setError(''); }}>
                    Register Another Student
                  </Button>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-6">Secure Your Spot</h3>

                  <Input name="name" label="Full Name" placeholder="e.g. Chukwudi Okafor" required />

                  <Input name="email" label="Email Address" type="email" placeholder="e.g. chukwudi@example.com" required />

                  <Input name="phone" label="WhatsApp Number" type="tel" placeholder="e.g. 08012345678" required />

                  <Select name="course" label="Course of Interest" required options={[{
                value: 'react',
                label: 'Frontend Development (React)'
              }, {
                value: 'python',
                label: 'Backend Development (Python)'
              }, {
                value: 'uiux',
                label: 'UI/UX Design'
              }]} />

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <Button type="submit" className="w-full mt-4" size="lg" isLoading={isSubmitting}>
                    Register Now — Class Begins Soon!
                  </Button>

                  <p className="text-xs text-center text-stone-400 mt-4">
                    By registering, you agree to receive course updates via
                    WhatsApp/Email.
                  </p>
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}