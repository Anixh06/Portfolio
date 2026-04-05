import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anishsaini450@gmail.com',
      link: 'mailto:anishsaini450@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9974021782',
      link: 'tel:+919974021782',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Vadodara, Gujarat, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#C08552] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#4B2E2B]/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#4B2E2B] mb-6">Let's Connect</h3>
            <p className="text-[#4B2E2B]/70 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out through the form or via any
              of the contact methods below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-[#C08552]/5 transition-colors border border-transparent hover:border-[#C08552]/20"
                  >
                    <div className="w-12 h-12 bg-[#C08552]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#C08552]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4B2E2B]/60">{item.title}</p>
                      <p className="text-[#4B2E2B] font-medium">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#C08552]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4B2E2B] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#C08552]/20 rounded-lg focus:outline-none focus:border-[#C08552] transition-colors text-[#4B2E2B]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4B2E2B] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#C08552]/20 rounded-lg focus:outline-none focus:border-[#C08552] transition-colors text-[#4B2E2B]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4B2E2B] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#C08552]/20 rounded-lg focus:outline-none focus:border-[#C08552] transition-colors text-[#4B2E2B] resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#C08552] text-white rounded-lg font-medium hover:bg-[#8C5A3C] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status && (
                <div className="text-center text-[#C08552] font-medium bg-[#C08552]/10 py-3 rounded-lg">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
