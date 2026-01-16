import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mic2, Sparkles } from "lucide-react";

export default function LecturePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                GUEST LECTURE
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Guest Lecture
              </h1>
              <p className="font-mono text-muted-foreground">
                Learn from industry leaders and visionaries
              </p>
            </div>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="size-5 text-primary" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">Wednesday, 28 January 2026</p>
                <p className="font-mono text-sm text-muted-foreground">2:00 PM - 4:00 PM IST</p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">MIT Manipal Campus</p>
                <p className="font-mono text-sm text-muted-foreground">Seminar Hall, Block 3</p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic2 className="size-5 text-primary" />
                  Speaker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">Coming Soon</p>
                <p className="font-mono text-sm text-muted-foreground">
                  Industry expert and technology leader
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Industry trends and insights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Career guidance and tips
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Real-world experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Q&A and networking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="px-12 py-6 text-lg font-medium card-hover glow-effect mono-label">
                Register for Lecture
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
