import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    title: "AWS – CloudScape",
    day: "Day 1",
    date: "Wednesday, 28th January 2026",
    time: "5:00 PM – 8:00 PM IST",
    description:
      "This workshop offers a hands-on introduction to cloud computing, covering fundamentals like deployment (public, private, hybrid), and service models (IaaS, PaaS, SaaS), culminating in a practical AWS project where participants apply these concepts directly to build and understand cloud solutions in real-time. ",
  },
  {
    title: "Finova – FinAgent",
    day: "Day 2",
    date: "Thursday, 29th January 2026",
    time: "5:00 PM – 8:00 PM IST",
    description:
      "Most AI workshops stop at chatbots. Most finance workshops stop at theory. This workshop bridges both. Participants will build an autonomous financial analyst that fetches live market data, reads news, reasons over it, and delivers investment insights.",
  },
  {
    title: "LeanIn – VoiceCraft AI",
    day: "Day 3",
    date: "Friday, 30th January 2026",
    time: "5:00 PM – 8:00 PM IST",
    description:
      "This workshop focuses on building a Desktop AI Assistant using Python, capable of performing voice-based and text-based interactions, system automation, web navigation , and messaging automation. Participants focus on core AI logic and integration through live coding..",
  },
  
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 mono-label">
                WORKSHOPS
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Offline Workshops
              </h1>
              <p className="font-mono text-muted-foreground text-lg">
                Three days • Three domains • One immersive experience
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-10">
              {workshops.map((workshop) => (
                <div
                  key={workshop.title}
                  className="relative pl-8 border-l-4 border-primary/70"
                >
                  {/* Day badge */}
                  <Badge className="absolute -left-4 top-6 px-4 py-1">
                    {workshop.day}
                  </Badge>

                  <Card className="bg-card/70 border-border/50">
                    <CardContent className="p-8">
                      <h2 className="font-display-bold text-2xl sm:text-3xl mb-3">
                        {workshop.title}
                      </h2>

                      <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                        {workshop.description}
                      </p>

                      <p className="font-mono text-sm sm:text-base text-muted-foreground">
                        {workshop.date} • {workshop.time}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* CTA */}
<div className="text-center mt-20">
  <a
    href="https://forms.gle/gCe2A39WzffDFZur6"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="mono-label px-16 py-6 text-lg">
      Register for All Workshops
    </Button>
  </a>
</div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
