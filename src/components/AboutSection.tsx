import { Sparkles, Cpu, Music } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Cpu,
      title: 'AI Innovation',
      description: 'Pioneering cutting-edge AI technology with LiskGPT and advanced LPT models',
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Creating groundbreaking music for liskasYR with AI-enhanced production',
    },
    {
      icon: Sparkles,
      title: 'Creative Vision',
      description: 'Merging technology and artistry to push the boundaries of what\'s possible',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-blue mb-4">
            About LiskCell
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            A creative powerhouse at the intersection of artificial intelligence and music production
          </p>
        </div>

        {/* Mission statement */}
        <div className="glass-card glow-border rounded-3xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-exo">
            LiskCell היא חברת פיתוח משחקים פופולרית שמחברת בין
            <span className="text-gradient-blue font-semibold"> בינה מלאכותית </span> 
            לבין 
            <span className="text-gradient-blue font-semibold"> יצירתיות אמנותית</span>. 
            נוסדה על ידי היוצר החזונאי liskasYR, אנחנו מפתחים משחקים עם מודלי AI מהדור הבא 
            ומייצרים תוכן חדשני שמאתגר את הקונבנציות ומעורר השראה למיליונים.
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
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary-foreground" />
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
