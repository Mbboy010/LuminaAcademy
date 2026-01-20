import React from 'react';
import Section from './ui/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-slate-50 dark:bg-slate-950 relative">
      <div className="absolute top-0 w-full h-1/2 bg-brand-900 z-0"></div>
      <Section className="relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-5/12 bg-brand-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Get in Touch</h3>
              <p className="text-brand-100 mb-8 leading-relaxed">
                Have questions about admissions or school life? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-brand-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-brand-100">admissions@lumina.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-brand-100">
                      123 Education Lane,<br />
                      Knowledge City, ST 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <div className="flex gap-4">
                 {/* Social Icons Placeholder */}
                 <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
                 <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
                 <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"></div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-10 md:p-14">
             <form onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-shadow" placeholder="Doe" />
                  </div>
               </div>
               <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-shadow" placeholder="john@example.com" />
               </div>
               <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
               </div>
               <button className="w-full bg-slate-900 dark:bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-slate-800 dark:hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
                 Send Message <Send size={18} />
               </button>
             </form>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Contact;
