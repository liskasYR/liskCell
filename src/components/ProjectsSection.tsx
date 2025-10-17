import { Brain, Zap, Mic } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      icon: Brain,
      title: 'LiskGPT',
      subtitle: 'Advanced Language Model',
      description: 'Our flagship AI model pushing the boundaries of natural language understanding and generation with state-of-the-art capabilities.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'LPT Models',
      subtitle: 'Next-Gen AI Framework',
      description: 'Revolutionary machine learning architecture designed for creative applications, enabling unprecedented artistic expression through AI.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Mic,
      title: 'Music Production',
      subtitle: 'For liskasYR',
      description: 'Cutting-edge music production combining AI-assisted composition, innovative sound design, and artistic vision for groundbreaking releases.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-blue mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            Innovation at the frontier of AI and music technology
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass-card glow-border-hover rounded-3xl p-8 md:p-12 group transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300 shadow-glow`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-sm font-exo text-primary uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-silver-light">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-exo leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
