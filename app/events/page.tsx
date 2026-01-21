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
    image: "/event-hack1.png",
    href: "/hackathon",
    date: "1st Feb 2026",
    type: "Offline",
    description: "24-hour hackathon to build innovative solutions",
  },
  {
    title: "Offline Workshops",
    image: "/event-work1.jpg",
    href: "/events/workshops",
    date: "Jan 28 - Jan 30,2026",
    type: "Offline",
    description: "Hands-on sessions with industry experts",
  },
  {
    title: "Kaggle Event - TDA",
    image: "/event-kaggle1.jpg",
    href: "/events/kaggle",
    date: "Jan 31, 2026",
    type: "Online",
    description: "Data science competition and learning",
  },
  {
    title: "Insight Session",
    image: "/sheelJ.jpg",
    href: "/events/lecture",
    date: "2nd Feb, 2026",
    type: "Offline",
description: "A guest talk by Sheel J, Founder of Fuggae ",
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
                Six days of innovation, learning, and building
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.title} className="card-hover bg-card/50 border-border/50 overflow-hidden">
                  <div className="relative aspect-[16/9] w-full flex items-center justify-center bg-muted/20">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
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
