import { Code, Palette, Database, Wrench, Globe, Smartphone } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'React Native', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'PostgreSQL / MongoDB', level: 88 },
        { name: 'REST APIs', level: 93 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      category: 'Design',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animations', level: 82 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git / GitHub', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Testing', level: 87 },
      ],
    },
  ];

  const additionalSkills = [
    { icon: Globe, label: 'Web Development' },
    { icon: Smartphone, label: 'Mobile Apps' },
    { icon: Database, label: 'Database Design' },
    { icon: Code, label: 'Clean Code' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#C08552] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#4B2E2B]/70 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF8F0] rounded-2xl p-8 border border-[#C08552]/20 hover:border-[#C08552] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#C08552] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B2E2B]">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#4B2E2B] font-medium">{skill.name}</span>
                        <span className="text-[#C08552] font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#C08552]/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C08552] to-[#8C5A3C] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {additionalSkills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#C08552] to-[#8C5A3C] rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="font-medium">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
