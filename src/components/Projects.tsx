import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Forever full-stack',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/forever-full-stack',
      gradient: 'from-[#C08552] to-[#8C5A3C]',
    },
    {
      title: 'Chat Application',
      description: 'A modern real-time chat application built with Flutter and Firebase for seamless cross-platform communication.',
      tech: ['Flutter', 'Dart', 'Firebase Auth', 'Provider', 'Cloud Firestore'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/chatApp',
      gradient: 'from-[#8C5A3C] to-[#4B2E2B]',
    },
    {
      title: 'HR Dashboard',
      description: 'A System built with Expo and React Native. Manage employee information, track departments, and perform CRUD operations on employee records.',
      tech: ['React Native', 'Expo','Typescript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/HR_dashboard',
      gradient: 'from-[#C08552] to-[#8C5A3C]',
    },
    {
      title: 'Glasscast',
      description: 'A beautiful minimal weather app with glass-morphism design, built with Flutter. Fetches real-time weather data from OpenWeather API and displays it in a sleek, user-friendly interface.',
      tech: ['Flutter', 'Dart', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/Glasscast',
      gradient: 'from-[#8C5A3C] to-[#C08552]',
    },
    {
      title: 'Smart Attendance',
      description: 'a Smart Attendance System that uses facial recognition to mark attendance automatically. It includes image datasets, Python scripts for attendance processing, and necessary requirements files.',
      tech: ['Python', 'OpenCV', 'face_recognition'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/smart_attendence',
      gradient: 'from-[#C08552] to-[#4B2E2B]',
    },
    {
      title: 'Invoice',
      description: 'A web application for generating professional invoices. Fill out user, client, and product details, preview the invoice live, and export it as a PDF.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'jsPDF'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Anixh06/CreateInvoice',
      gradient: 'from-[#8C5A3C] to-[#C08552]',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#C08552] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#4B2E2B]/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4B2E2B] mb-3 group-hover:text-[#C08552] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#4B2E2B]/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#C08552]/10 text-[#C08552] text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#C08552] text-white rounded-lg hover:bg-[#8C5A3C] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-4 py-2 border-2 border-[#C08552] text-[#C08552] rounded-lg hover:bg-[#C08552] hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
