import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { CoursesSection } from '../components/CoursesSection';
import { ComingSoon } from '../components/ComingSoon';
import { WhyChoose } from '../components/WhyChoose';
import { About } from '../components/About';
import { Curriculum } from '../components/Curriculum';
import { Pricing } from '../components/Pricing';
import { Registration } from '../components/Registration';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import Logo from '../assets/codesynergy.png';
export function LandingPage() {
  return <>
      <SEO />
      <main className="min-h-screen w-full  bg-white font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
        {/* Navigation Bar */}
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="CodeSynergy Logo" className="h-36 w-36 object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#courses" onClick={() => document.getElementById('courses')?.scrollIntoView({
            behavior: 'smooth'
          })} className="hover:text-orange-600 transition-colors">
              Courses
            </a>
            <a href="#pricing" onClick={() => document.getElementById('registration')?.scrollIntoView({
            behavior: 'smooth'
          })} className="hover:text-orange-600 transition-colors">
              Pricing
            </a>
            <a href="#registration" onClick={() => document.getElementById('registration')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors">
              Register Now
            </a>
          </div>
        </div>
      </nav>
        </header>

      <Hero />
      <CoursesSection />
      <ComingSoon />
      <WhyChoose />
      <About />
      <Curriculum />
      <Pricing />
      <Registration />
      <FAQ />
        <Contact />
      </main>
    </>;
}