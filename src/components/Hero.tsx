import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block">
              <span className="text-[#C08552] font-medium text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4B2E2B] leading-tight">
              Anish Saini
            </h1>
            <p className="text-xl md:text-2xl text-[#8C5A3C] font-light">
              Full-Stack & Cross-Platform Mobile Developer
            </p>
            <p className="text-[#4B2E2B]/70 text-lg max-w-xl">
              I engineer full-stack and cross-platform applications that are reliable, scalable, and designed to meet real-world business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-[#C08552] text-white rounded-full font-medium hover:bg-[#8C5A3C] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Let's Connect
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-[#C08552] text-[#C08552] rounded-full font-medium hover:bg-[#C08552] hover:text-white transition-all duration-300 text-center"
              >
                View My Work
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-6">
              <a
                href="https://github.com/Anixh06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#C08552]/10 flex items-center justify-center text-[#C08552] hover:bg-[#C08552] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anish-saini/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#C08552]/10 flex items-center justify-center text-[#C08552] hover:bg-[#C08552] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:anishsaini450@gmail.com"
                className="w-12 h-12 rounded-full bg-[#C08552]/10 flex items-center justify-center text-[#C08552] hover:bg-[#C08552] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

         
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C08552] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#C08552] to-[#8C5A3C] p-2">
                <div className="w-full h-full rounded-full bg-[#FFF8F0] flex items-center justify-center overflow-hidden">
                 <img
                    src="public/assets/profile.png"  
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-[#C08552]" />
        </div>
      </div>
    </section>
  );
}
