import React from 'react';
import Section from './ui/Section';
import { CheckCircle, FileText, Calendar, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Submit Application",
    description: "Complete the online application form and submit past academic records.",
    date: "Sep 1 - Dec 15"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-white" />,
    title: "Entrance Exam",
    description: "Students sit for assessments in English, Mathematics, and Logic.",
    date: "January 15"
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "Interview",
    description: "Selected candidates are invited for a personal interview with faculty.",
    date: "February 1 - 20"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Final Decision",
    description: "Acceptance letters are sent out to successful applicants.",
    date: "March 1"
  }
];

const Admissions: React.FC = () => {
  return (
    <Section id="admissions" className="bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Join Our <span className="text-brand-600">Community</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            We look for students who are curious, compassionate, and ready to contribute to our vibrant community. Our admissions process is designed to get to know the whole student, not just their grades.
          </p>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Entry Requirements</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Completed application form with fee</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Academic transcripts from the last 2 years</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Two teacher recommendation letters</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Copy of birth certificate or passport</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-500 group-hover:bg-brand-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                  {step.icon}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <span className="text-xs font-bold text-brand-600 bg-brand-50 dark:bg-brand-900/30 px-2 py-1 rounded-full">{step.date}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Admissions;