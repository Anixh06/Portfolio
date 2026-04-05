import { Heart, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anixh06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anish-saini/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/thatteahead', label: 'Twitter' },
    { icon: Mail, href: 'mailto:anishsaini450@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/4nysh/', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#4B2E2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#C08552]">Anish Saini</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Full-stack developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C08552] transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#C08552]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#C08552] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#C08552]">Get In Touch</h4>
            <p className="text-white/70 mb-3">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a
              href="mailto:anishsaini450@gmail.com"
              className="text-[#C08552] hover:text-white transition-colors"
            >
              anishsaini450@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Anish Saini. All rights reserved.
            </p>
            <p className="text-white/70 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#C08552] fill-current" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
