import { MessageSquare, HelpCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'טכני Support',
      description: 'נתקלת בבעיה? צוות התמיכה שלנו כאן כדי לעזור לך',
    },
    {
      icon: HelpCircle,
      title: 'שאלות נפוצות',
      description: 'מצא תשובות לשאלות הנפוצות ביותר',
    },
    {
      icon: Mail,
      title: 'צור קשר',
      description: 'שלח לנו הודעה ונחזור אליך בהקדם',
    },
  ];

  return (
    <section id="support" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-blue mb-4">
            Support
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            אנחנו כאן כדי לעזור לך בכל שאלה או בעיה
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
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary-foreground" />
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
            שלח לנו הודעה
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                שם מלא
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 font-exo"
                placeholder="הכנס את שמך"
              />
            </div>
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                אימייל
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 font-exo"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-orbitron mb-2 text-muted-foreground">
                הודעה
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 font-exo resize-none"
                placeholder="ספר לנו איך נוכל לעזור"
              ></textarea>
            </div>
            <Button
              className="w-full glow-border-hover bg-gradient-primary text-primary-foreground hover:shadow-glow font-orbitron text-lg py-6 transition-all duration-300"
            >
              שלח הודעה
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
