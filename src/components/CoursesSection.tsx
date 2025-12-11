import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Code2, Terminal, Palette, Clock, CheckCircle2 } from 'lucide-react';

const courses = [{
  id: 'react',
  title: 'React Frontend',
  icon: Code2,
  color: 'text-blue-500',
  bg: 'bg-blue-50',
  description: "Build modern websites & apps with the world's most popular library.",
  duration: '4 months',
  level: 'Beginner Friendly',
  features: ['HTML, CSS, JavaScript', 'React Components & Hooks', 'API Integration', 'Portfolio Projects']
}, {
  id: 'python',
  title: 'Python Backend',
  icon: Terminal,
  color: 'text-teal-600',
  bg: 'bg-teal-50',
  description: 'Master logic programming and build powerful backend APIs.',
  duration: '3 months',
  level: 'Beginner Friendly',
  features: ['Python Fundamentals', 'Data Structures', 'Django/Flask Frameworks', 'RESTful APIs']
}, {
  id: 'uiux',
  title: 'UI/UX Design',
  icon: Palette,
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  description: 'Design beautiful user interfaces without writing a single line of code.',
  duration: '3 months',
  level: 'No Coding Needed',
  features: ['Design Principles', 'Figma Mastery', 'Wireframing', 'Interactive Prototyping']
}];
export function CoursesSection() {
  return <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">
            Courses Available Right Now
          </h2>
          <p className="text-lg text-stone-600">
            Choose a path that fits your career goals. All courses are designed
            for absolute beginners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => <motion.div key={course.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-stone-200">
                <div className={`p-6 ${course.bg}`}>
                  <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm ${course.color}`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="stone" className="bg-white/50 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="stone" className="bg-white/50 backdrop-blur-sm">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col bg-white">
                  <h4 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wider">
                    What you'll learn
                  </h4>
                  <ul className="space-y-3 mb-8 flex-1">
                    {course.features.map((feature, i) => <li key={i} className="flex items-start text-stone-600 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </div>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
}