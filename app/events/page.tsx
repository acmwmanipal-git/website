import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Hackathon",
    image: "/event-hackathon.svg",
    href: "/hackathon",
    date: "Jan 28 - Feb 02, 2026",
    type: "Online",
    description: "48-hour hackathon to build innovative solutions",
  },
  {
    title: "Offline Workshops",
    image: "/event-workshops.svg",
    href: "/events/workshops",
    date: "Jan 28, 2026",
    type: "Offline",
    description: "Hands-on sessions with industry experts",
  },
  {
    title: "Kaggle Event",
    image: "/event-kaggle.svg",
    href: "/events/kaggle",
    date: "Jan 31, 2026",
    type: "Online",
    description: "Data science competition and learning",
  },
  {
    title: "Guest Lecture",
    image: "/event-lecture.svg",
    href: "/events/lecture",
    date: "Jan 28, 2026",
    type: "Offline",
    description: "Learn from tech industry leaders",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                EVENT LINEUP
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Events
              </h1>
              <p className="font-mono text-muted-foreground">
                Five days of innovation, learning, and building
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.title} className="card-hover bg-card/50 border-border/50 overflow-hidden">
                  <div className="relative aspect-[16/9] w-full flex items-center justify-center bg-muted/20">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant={event.type === "Online" ? "default" : "secondary"} className="mono-label">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display-bold text-xl">{event.title}</CardTitle>
                    <CardDescription className="font-mono flex items-center gap-2">
                      <Calendar className="size-3" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={event.href} className="w-full">
                      <Button variant="outline" className="w-full mono-label">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
