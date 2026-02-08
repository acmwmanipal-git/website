import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Terminal,
    title: "Kairotic",
    description: "A 10-hour offline hackathon built to push ideas beyond limits",
  },
  {
    icon: Cpu,
    title: "Workshops",
    description: "Hands-on offline sessions to create projects",
  },
  {
    icon: Zap,
    title: "Insight Sessions",
    description: "Learn from leaders shaping the tech industry",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center pt-16">
        <section className="w-full py-24 sm:py-32 px-4 relative">
          <div className="absolute inset-0 interactive-dots" />

          <div className="mx-auto max-w-5xl text-center relative z-10">
            <Badge variant="secondary" className="mb-6 mono-label">
              ACM-W MIT MANIPAL · TECH WEEK 2026
            </Badge>

            <h1 className="font-display-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-6 text-shadow">
              <span className="text-primary">Kair</span>
              <span className="text-foreground">OS</span>
            </h1>

            <p className="font-mono text-lg sm:text-xl text-muted-foreground mb-8">
              &lt;CODE_THE_MOMENT /&gt;
            </p>

            {/* Removed Countdown (Tech Week is over) */}

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/hackathon"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 card-hover"
              >
                View Hackathon
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-card text-foreground font-medium hover:bg-muted transition-all duration-300 card-hover"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-4 border-t border-border/50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group card-hover bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500"
                >
                  <CardContent className="p-6">
                    <feature.icon className="size-10 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="font-display-bold text-xl mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-4 border-t border-border/50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display-bold text-3xl sm:text-4xl mb-8">
              Be Part <span className="text-primary">of the Movement</span>
            </h2>
            <p className="font-mono text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of MIT Manipal’s biggest tech celebration. Build real solutions,
              learn from experts, and connect with innovators who think like you.
            </p>
            <div className="inline-flex items-center gap-4 text-sm font-mono text-muted-foreground">
              <span>JAN 28 - FEB 02, 2026</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>MIT MANIPAL</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
