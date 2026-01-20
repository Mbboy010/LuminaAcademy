import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-4">
               <GraduationCap className="mr-2 text-brand-500" size={32} />
               <span className="font-serif font-bold text-xl">Lumina Academy</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Inspiring excellence since 1954. We are committed to fostering a love for learning in every student.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Alumni</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Academics</h4>
             <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Secondary School</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">IB Diploma</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Arts & Culture</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Athletics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates and news.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500" />
              <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-2 rounded transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Lumina Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
