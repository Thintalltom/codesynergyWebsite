import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
const curricula = {
  react: [{
    week: 1,
    title: 'HTML, CSS, JS Refresh',
    desc: 'Solidify your foundation before diving into React.'
  }, {
    week: 2,
    title: 'React Basics',
    desc: 'JSX, Virtual DOM, and your first components.'
  }, {
    week: 3,
    title: 'Components & Props',
    desc: 'Building reusable UI elements and passing data.'
  }, {
    week: 4,
    title: 'APIs & State',
    desc: 'Fetching data and managing application state.'
  }, {
    week: 5,
    title: 'Project Building',
    desc: 'Apply everything you learned in a real-world app.'
  }, {
    week: 6,
    title: 'Portfolio & Deployment',
    desc: 'Polish your project and host it online.'
  }],
  python: [{
    week: 1,
    title: 'Python Basics',
    desc: 'Variables, data types, and basic syntax.'
  }, {
    week: 2,
    title: 'Functions & Loops',
    desc: 'Writing efficient, reusable logic.'
  }, {
    week: 3,
    title: 'Django/Flask Intro',
    desc: 'Introduction to Python web frameworks.'
  }, {
    week: 4,
    title: 'Authentication',
    desc: 'User login, registration, and security.'
  }, {
    week: 5,
    title: 'Building an API',
    desc: 'Creating endpoints for frontend consumption.'
  }, {
    week: 6,
    title: 'Final Project',
    desc: 'Build and deploy a complete backend service.'
  }],
  uiux: [{
    week: 1,
    title: 'Design Principles',
    desc: 'Color theory, typography, and layout.'
  }, {
    week: 2,
    title: 'Figma Basics',
    desc: 'Mastering the industry-standard design tool.'
  }, {
    week: 3,
    title: 'Wireframes',
    desc: 'Planning user flows and low-fidelity layouts.'
  }, {
    week: 4,
    title: 'Prototyping',
    desc: 'Creating interactive mockups to test flows.'
  }, {
    week: 5,
    title: 'UI Design',
    desc: 'High-fidelity design and visual polish.'
  }, {
    week: 6,
    title: 'Portfolio Project',
    desc: 'Case study creation and portfolio presentation.'
  }]
};
export function Curriculum() {
  const [activeTab, setActiveTab] = useState<'react' | 'python' | 'uiux'>('react');
  return <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-stone-600">
            A structured, week-by-week breakdown of your journey from beginner
            to pro.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['react', 'python', 'uiux'] as const).map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`}>
              {tab === 'react' ? 'Frontend (React)' : tab === 'python' ? 'Backend (Python)' : 'UI/UX Design'}
            </button>)}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} transition={{
            duration: 0.3
          }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curricula[activeTab].map(item => <div key={item.week} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
                    {item.week}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>;
}