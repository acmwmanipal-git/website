import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    title: "Finovva X ACMW '26",
    date: "Wednesday, 28 January 2026",
    time: "10:00 AM – 5:00 PM IST",
    image: "/workshops/finovva.JPG",
  },
  {
    title: "Whisper to Command '26",
    date: "Thursday, 29 January 2026",
    time: "10:00 AM – 5:00 PM IST",
    image: "/workshops/whisper.jpg",
  },
  {
    title: "CloudScape '26",
    date: "Friday, 30 January 2026",
    time: "10:00 AM – 5:00 PM IST",
    image: "/workshops/cloudScape.jpg",
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            {/* Page Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                WORKSHOPS
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Offline Workshops
              </h1>
              <p className="font-mono text-muted-foreground">
                Hands-on learning with industry experts
              </p>
            </div>

            {/* Workshop Cards */}
            {workshops.map((workshop) => (
              <Card
                key={workshop.title}
                className="mb-12 bg-card/50 border-border/50 overflow-hidden card-hover"
              >
                {/* Workshop Image */}
                <div className="relative aspect-[16/9]">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Workshop Content */}
                <CardContent className="p-6 text-center">
                  <h2 className="font-display-bold text-2xl mb-2">
                    {workshop.title}
                  </h2>

                  <p className="font-mono text-sm text-muted-foreground mb-6">
                    {workshop.date} • {workshop.time}
                  </p>

                  <Button className="mono-label px-10">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
