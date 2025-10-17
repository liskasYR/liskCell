import { Mail, Instagram, Youtube, Twitter, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-500',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
      color: 'hover:text-red-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Spotify',
      icon: Music,
      href: '#',
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            Connect with us and join our gaming community
          </p>
        </div>

        {/* Contact card */}
        <div className="glass-card glow-border rounded-3xl p-12 text-center">
          {/* Email section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted mb-6 animate-pulse-glow">
              <Mail className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-silver-light">
              Contact Us
            </h3>
            <a
              href="mailto:contact@liskcell.com"
              className="text-lg text-silver hover:text-silver-light font-exo transition-colors duration-300"
            >
              contact@liskcell.com
            </a>
          </div>

          {/* Social links */}
          <div className="space-y-6">
            <h4 className="text-xl font-orbitron font-bold text-silver-light">
              Follow Us
            </h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`glow-border-hover bg-transparent backdrop-blur-sm text-foreground ${social.color} font-orbitron transition-all duration-300`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {social.name}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
