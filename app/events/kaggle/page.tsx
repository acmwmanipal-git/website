import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KagglePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                DATA SCIENCE
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
                Clash Codale | Kaggle Contest
              </h1>
              <p className="font-mono text-muted-foreground">
                Compete, learn, and master data science
              </p>
            </div>

            {/* Date & Time */}
            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="size-7 text-primary" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">
                  Saturday, 31st January 2026
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
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

            {/* About */}
            <Card className="mb-12 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>About the Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-base text-muted-foreground leading-relaxed">
                  Join us for an intensive data science competition where participants work
                  with real-world datasets, build predictive models, and compete for exciting
                  prizes. This event is designed to encourage learning, experimentation, and
                  practical exposure to machine learning using Kaggle.
                </p>
              </CardContent>
            </Card>

           {/* Registration */}
<div className="text-center mt-12">
  

  <a
    href="https://forms.gle/gCe2A39WzffDFZur6"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="px-10 py-5 text-lg font-medium card-hover glow-effect"
    >
      Register via Kairos Form
    </Button>
  </a>

  <p className="font-mono text-base text-muted-foreground mt-4 max-w-md mx-auto">
    While filling the Kairos registration form, select <span className="text-foreground">“Yes”</span> for <span className="text-foreground">Clash Codale</span>.
  </p>
</div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
