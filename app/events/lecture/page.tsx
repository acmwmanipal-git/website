import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mic, Sparkles } from "lucide-react";

export default function LecturePage() {
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
                Insight Session
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                In Conversation With Sheel J
              </h1>
              <p className="font-mono text-muted-foreground">
                Founder of Fuggae
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-xl">
              <Image
                src="/sheelJ.jpg"
                alt="Insight Session"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Date & Time */}
            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="size-5 text-primary" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">Monday, 2 February 2026</p>
                
              </CardContent>
            </Card>

            {/* Venue */}
            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg">Details will be announced soon.</p>
                
              </CardContent>
            </Card>

            {/* Speaker */}
<Card className="mb-8 bg-card/50 border-border/50">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Mic className="size-5 text-primary" />
      Speaker
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="font-display-bold text-xl mb-2">
      Sheel J
    </p>
    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
      Founder, Fuggae <br />
      Former Senior Product Manager at Amazon <br />
      Former Engineering Officer at Indian Oil Corporation
    </p>
  </CardContent>
</Card>


            {/* What You'll Learn */}
<Card className="mb-8 bg-card/50 border-border/50">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="size-5 text-primary" />
      What You’ll Learn
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="space-y-3 font-mono text-sm text-muted-foreground">
      <li className="flex items-start gap-2">
        <span className="text-primary">▸</span>
        Insights from her professional journey and career transitions
      </li>
      <li className="flex items-start gap-2">
        <span className="text-primary">▸</span>
        Practical strategies for placement preparation and interviews
      </li>
      <li className="flex items-start gap-2">
        <span className="text-primary">▸</span>
        Real-world industry perspectives from product and engineering roles
      </li>
      <li className="flex items-start gap-2">
        <span className="text-primary">▸</span>
        Interactive Q&A and networking with the speaker
      </li>
    </ul>
  </CardContent>
</Card>
        {/* Coming Soon */}
            <div className="text-center mt-12">
              <p className="font-display-bold text-2xl sm:text-3xl text-primary mb-2">
                Coming Soon
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                Registration details will be announced shortly
              </p>
            </div>

            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
