import { MessageSquare, HelpCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Technical Support',
      description: 'Encountered an issue? Our support team is here to help you',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find answers to the most frequently asked questions',
    },
    {
      icon: Mail,
      title: 'Contact Us',
      description: 'Send us a message and we will get back to you soon',
    },
  ];

  return (
    <section id="support" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            Support
          </h2>
          <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            We are here to help with any question or issue
          </p>
        </div>

        {/* Support options grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="glass-card glow-border-hover rounded-2xl p-8 text-center group transition-all duration-300"
              >
                <div className="mb-6 inline-block">
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <Icon className="w-10 h-10 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-silver-light">
                  {option.title}
                </h3>
                <p className="text-muted-foreground font-exo leading-relaxed">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact form */}
        <div className="glass-card glow-border rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-silver-light">
            Send Us a Message
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-muted focus:outline-none transition-colors duration-300 font-exo text-foreground"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-muted focus:outline-none transition-colors duration-300 font-exo text-foreground"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-muted focus:outline-none transition-colors duration-300 font-exo resize-none text-foreground"
                placeholder="Tell us how we can help"
              ></textarea>
            </div>
            <Button
              className="w-full glow-border-hover bg-muted text-foreground hover:bg-muted/80 hover:shadow-glow font-orbitron text-lg py-6 transition-all duration-300"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
