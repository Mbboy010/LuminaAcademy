import React from 'react';
import Section from './ui/Section';
import { BookOpen, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-brand-500" />,
      title: "Academic Excellence",
      description: "Rigorous curriculum focused on critical thinking and real-world application."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-500" />,
      title: "Community Focus",
      description: "A supportive environment where every student is known, valued, and empowered."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-500" />,
      title: "Global Perspective",
      description: "Preparing students to become responsible, active citizens of the world."
    }
  ];

  return (
    <Section id="about" className="bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            A Tradition of <span className="text-brand-600">Excellence</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            For over 70 years, Lumina Academy has been a beacon of learning in the region. Our holistic approach to education ensures that students not only excel academically but also develop the emotional intelligence and leadership skills necessary for the modern world.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            We believe that education is not just about filling a bucket, but lighting a fire. Our dedicated faculty inspires students to question, explore, and innovate.
          </p>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 dark:bg-slate-800 rounded-lg shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-600 rounded-2xl rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
          <img
            src="https://picsum.photos/800/1000?random=library"
            alt="Students in library"
            className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
