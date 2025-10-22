import React, { useEffect, useState } from "react";
import { Music2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Release = {
  title: string;
  artist: string;
  status: string;
  date: string;
  type: string;
  icon: React.ElementType;
};

export const ReleasesSection = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState("...");

  useEffect(() => {
    const getNextFriday = () => {
      const now = new Date();
      const day = now.getDay();
      const daysUntilFriday = (5 - day + 7) % 7 || 7;
      const nextFriday = new Date(now);
      nextFriday.setDate(now.getDate() + daysUntilFriday);
      nextFriday.setHours(0, 0, 0, 0);
      return nextFriday;
    };

    const target = getNextFriday().getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        setCountdown("00:00:00");
        return;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setCountdown(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const releases: Release[] = [
    {
      title: "FORM ARE BACK",
      artist: "liskasYR",
      status: "Coming Soon",
      date: countdown,
      type: "Single",
      icon: Clock,
    },
  ];

  return (
    <section id="releases" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
          Form Are Back
        </h2>
        <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-4">
          Countdown to next release
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-orbitron text-xl mb-8">
          <Clock className="w-6 h-6" />
          <span>{countdown}</span>
        </div>
        <Button
          onClick={() => navigate("/forms")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold hover:opacity-90 transition-all duration-300"
        >
          Go to Forms
        </Button>
      </div>

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
            </div>
          );
        })}
      </div>
    </section>
  );
};
