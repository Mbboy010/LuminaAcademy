import React from 'react';
import Section from './ui/Section';
import { Microscope, Calculator, Palette, Music } from 'lucide-react';

const programs = [
  {
    title: "STEM",
    icon: <Microscope className="w-12 h-12 mb-4 text-brand-500" />,
    description: "Advanced courses in Robotics, Biology, Physics, and Computer Science with state-of-the-art labs.",
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Mathematics",
    icon: <Calculator className="w-12 h-12 mb-4 text-emerald-500" />,
    description: "From Algebra to Calculus, our math department builds strong analytical foundations.",
    color: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  {
    title: "Visual Arts",
    icon: <Palette className="w-12 h-12 mb-4 text-purple-500" />,
    description: "Studio art programs encouraging expression through painting, sculpture, and digital media.",
    color: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    title: "Performing Arts",
    icon: <Music className="w-12 h-12 mb-4 text-amber-500" />,
    description: "Award-winning choir, orchestra, and drama clubs that perform regionally and nationally.",
    color: "bg-amber-50 dark:bg-amber-900/20"
  }
];

const Academics: React.FC = () => {
  return (
    <Section id="academics" className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Academic <span className="text-brand-600">Programs</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          We offer a diverse curriculum designed to challenge students and discover their passions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl dark:shadow-none border border-transparent dark:border-slate-800 ${program.color} group`}
          >
            <div className="transform transition-transform group-hover:scale-110 duration-300 origin-left">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              {program.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Academics;
