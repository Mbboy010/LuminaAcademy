import React from 'react';
import Section from './ui/Section';
import { UPCOMING_EVENTS } from '../constants';
import { Calendar, ChevronRight } from 'lucide-react';

const NewsEvents: React.FC = () => {
  return (
    <Section id="campus" className="bg-white dark:bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Campus <span className="text-brand-600">Life</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Stay updated with the latest happenings at Lumina.
          </p>
        </div>
        <a href="#all-events" className="text-brand-600 font-semibold flex items-center hover:underline">
          View All Events <ChevronRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[400px]">
             <img 
               src="https://picsum.photos/800/600?random=sports" 
               alt="Championship Win" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-brand-400 font-bold mb-2">ATHLETICS</span>
                <h3 className="text-2xl font-bold text-white mb-2">Girls' Soccer Team Wins Regional Championship</h3>
                <p className="text-slate-300 line-clamp-2">In a stunning display of skill and teamwork, the Lumina Lions secured victory against their long-time rivals...</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                <img src="https://picsum.photos/400/250?random=debate" alt="Debate" className="w-full h-48 object-cover"/>
                <div className="p-6">
                   <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Debate Club Nationals</h4>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">Our students are heading to the national finals next month.</p>
                </div>
             </div>
             <div className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                <img src="https://picsum.photos/400/250?random=art" alt="Art" className="w-full h-48 object-cover"/>
                <div className="p-6">
                   <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Spring Art Exhibition</h4>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">Join us for an evening of creativity showcasing student works.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Events Column */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 h-full">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calendar className="text-brand-500" /> Upcoming Events
          </h3>
          <div className="space-y-6">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="flex gap-4 group cursor-pointer">
                <div className="bg-white dark:bg-slate-700 rounded-xl p-3 text-center min-w-[70px] shadow-sm border border-slate-200 dark:border-slate-600 group-hover:border-brand-500 transition-colors">
                  <span className="block text-xl font-bold text-brand-600 dark:text-brand-400">{event.date}</span>
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{event.month}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 transition-colors">{event.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-lg border border-brand-600 text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors font-semibold">
            View Calendar
          </button>
        </div>
      </div>
    </Section>
  );
};

export default NewsEvents;
