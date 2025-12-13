
import { Mail, MessageCircle, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/Button';
import Logo from '../assets/Brown-logo-remove.png';
export function Contact() {
  return <footer className="bg-stone-900 px-10 text-stone-300 py-16 flex justify-between">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="">
               <div className="">
                        <img src={Logo} alt="CodeSynergy Logo" className=" w-36 object-contain" />
                      </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of Nigerian tech talent. Practical
              skills, real projects, and a community that cares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {/* <li>
                <button onClick={() => document.getElementById('courses')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-orange-500 transition-colors">
                  Courses
                </button>
              </li> */}
              {/* <li>
                <button onClick={() => document.getElementById('registration')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-orange-500 transition-colors">
                  Register
                </button>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Student Portal
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none" onClick={() => window.open('https://wa.me/2349169112443', '_blank')}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>

              <a href="mailto:codesynergy01@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors p-3 rounded-lg border border-stone-800 hover:border-stone-700">
                <Mail className="h-5 w-5 text-stone-500" />
                codesynergy01@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} CodeSynergy Nigeria. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}