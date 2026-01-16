import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Target, BarChart } from "lucide-react";

export default function KagglePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                DATA SCIENCE
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Kaggle Event
              </h1>
              <p className="font-mono text-muted-foreground">
                Compete, learn, and master data science
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
                <p className="font-mono text-lg">Friday, 31 January 2026</p>
                <p className="font-mono text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Trophy className="size-8 text-primary mx-auto mb-3" />
                  <p className="font-display-bold text-2xl mb-1">Exciting</p>
                  <p className="mono-label text-muted-foreground">Prizes</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <Target className="size-8 text-primary mx-auto mb-3" />
                  <p className="font-display-bold text-2xl mb-1">Real World</p>
                  <p className="mono-label text-muted-foreground">Datasets</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center">
                  <BarChart className="size-8 text-primary mx-auto mb-3" />
                  <p className="font-display-bold text-2xl mb-1">Learn</p>
                  <p className="mono-label text-muted-foreground">ML Skills</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>About the Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Join us for an intensive data science competition where you'll work with
                  real-world datasets, build predictive models, and compete for exciting prizes.
                  Whether you're a beginner or an experienced data scientist, this event offers
                  something for everyone. Learn from experts, collaborate with peers, and
                  showcase your skills on Kaggle.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="px-12 py-6 text-lg font-medium card-hover glow-effect mono-label">
                Join Kaggle Competition
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
