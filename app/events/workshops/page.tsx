import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                WORKSHOP
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Offline Workshops
              </h1>
              <p className="font-mono text-muted-foreground">
                Hands-on learning with industry experts
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
                <p className="font-mono text-sm text-muted-foreground">10:00 AM - 5:00 PM IST</p>
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
                <p className="font-mono text-sm text-muted-foreground">Main Auditorium, Block 5</p>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Live coding demonstrations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Hands-on project implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Q&A session with industry experts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">▸</span>
                    Networking opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="px-12 py-6 text-lg font-medium card-hover glow-effect mono-label">
                Register for Workshop
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
