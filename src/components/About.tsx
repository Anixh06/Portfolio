import { User, Target, Heart, Briefcase } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'I enjoy developing applications, experimenting with new ideas, and getting better at what I do every day.',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '4+ years of experience building web applications and digital products.',
    },
    {
      icon: Target,
      title: 'My Goal',
      description: 'To keep building, learning, and creating products that people actually find useful.',
    },
    {
      icon: Heart,
      title: 'What I Love',
      description: 'Clean code, beautiful design, and the intersection of technology and creativity.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#C08552] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#4B2E2B]/80 leading-relaxed">
              I’m a full-stack developer who enjoys building things that actually work in the real world,
               not just look good on paper. I’ve worked with React, Next.js, and React Native to create both
                web and mobile applications, and I’m comfortable handling everything from UI to backend APIs.
            </p>
            <p className="text-lg text-[#4B2E2B]/80 leading-relaxed">
              I like keeping my code clean and simple, and I’m always trying to improve how I structure 
              and build projects. During my internship, I worked on reusable components and real-world 
              features, which helped me understand how production-level apps are actually built and maintained.
            </p>
            <p className="text-lg text-[#4B2E2B]/80 leading-relaxed">
              Most of my learning has come from building projects — whether it’s an e-commerce platform
               with payments, an HR dashboard with data visualization, or even a facial recognition attendance system.
              I enjoy solving practical problems and figuring things out along the way.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#C08552]/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-[#C08552] to-[#8C5A3C] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>4+ years of Development experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>20+ successful projects built and Tested</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Open-source contributor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Focused on continuous growth and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF8F0] p-6 rounded-2xl border border-[#C08552]/20 hover:border-[#C08552] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#C08552]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#C08552]" />
                </div>
                <h3 className="text-lg font-bold text-[#4B2E2B] mb-2">{item.title}</h3>
                <p className="text-[#4B2E2B]/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
