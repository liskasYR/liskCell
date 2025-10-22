import { Music2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Release = {
  title: string;
  artist: string;
  status: string;
  date: string;
  type: string;
  icon: React.ElementType;
};

export const ReleasesSection = () => {
  const releases: Release[] = []; // ⛔️ אין ריליסים כרגע

  return (
    <section id="releases" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* כותרת הסקשן */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
            Game Releases
          </h2>
          <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
            Upcoming and featured game titles
          </p>
        </div>

        {/* אם אין ריליסים */}
        {releases.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <Music2 className="w-20 h-20 text-muted-foreground/40 mb-6" />
            <h3 className="text-2xl font-orbitron font-semibold text-silver-light mb-2">
              No releases available yet
            </h3>
            <p className="text-muted-foreground font-exo text-lg max-w-md">
              Stay tuned! New projects by liskasYR will be announced here soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {releases.map((release, index) => {
              const Icon = release.icon;
              return (
                <div
                  key={index}
                  className="glass-card glow-border-hover rounded-3xl p-8 group transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Icon className="w-5 h-5 text-silver animate-pulse-glow" />
                    <span className="text-sm font-orbitron text-silver uppercase tracking-wider">
                      {release.status}
                    </span>
                  </div>

                  <div className="mb-6 aspect-square rounded-2xl bg-gradient-to-br from-muted/20 to-muted/40 border border-border flex items-center justify-center group-hover:border-muted transition-all duration-300">
                    <Music2 className="w-24 h-24 text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-300" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-orbitron font-bold text-silver-light">
                      {release.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-exo">
                      by {release.artist}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-exo">
                      <span>{release.type}</span>
                      <span>•</span>
                      <span>{release.date}</span>
                    </div>
                  </div>

                  {release.status === 'Latest Release' && (
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="w-full glow-border-hover bg-transparent backdrop-blur-sm text-foreground hover:bg-muted hover:text-foreground font-orbitron transition-all duration-300"
                      >
                        Play Now
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
