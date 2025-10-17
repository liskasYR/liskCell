import { Sparkles, Cpu, Music } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with cutting-edge technology and innovative gameplay',
    },
    {
      icon: Music,
      title: 'Rich Worlds',
      description: 'Building vibrant game worlds filled with life, inspired by everything that excites and challenges us',
    },
    {
      icon: Sparkles,
      title: 'Player-First',
      description: 'Every game tells a story and creates lasting memories for our global community',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            About LiskCell
          </h2>
          <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            A young, vibrant company creating games that excite millions of players worldwide
          </p>
        </div>

        {/* Mission statement */}
        <div className="glass-card glow-border rounded-3xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-silver-light">
            What We Do at LiskCell
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-exo mb-8">
            We don't just develop games – we create experiences. Every game we produce is born from a love of gaming, boundless creativity, and a desire to touch the hearts of our players 🎮💡
          </p>
          
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-silver-light">
            Why Choose LiskCell?
          </h3>
          <div className="space-y-4 text-lg text-foreground font-exo mb-8">
            <p>🎨 <strong>Innovation Without Limits:</strong> Every game is a story, every character is a world, and every level is a challenge you'll always remember.</p>
            <p>🌍 <strong>International Community:</strong> Our games connect people from all over the world, creating new communities and friendships.</p>
            <p>🚀 <strong>Pursuit of Excellence:</strong> We invest in new technologies and quality content to bring you the very best.</p>
          </div>

          <p className="text-lg text-muted-foreground italic font-exo text-center">
            "Games are not just fun – they are a bridge connecting people and experiences."
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-exo leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
