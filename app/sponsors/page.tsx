import Image from "next/image";
import { Crown, Medal, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Sponsor {
  name: string;
  subtitle: string;
  logo: string;
}

const sponsors: Record<string, Sponsor[]> = {
  platinum: [
    {
      name: "TechCorp",
      subtitle: "Innovation Partner",
      logo: "/sponsor-platinum-1.svg",
    },
  ],
  gold: [
    {
      name: "DevStudio",
      subtitle: "Platform Partner",
      logo: "/sponsor-gold-1.svg",
    },
    {
      name: "CloudBase",
      subtitle: "Cloud Partner",
      logo: "/sponsor-gold-2.svg",
    },
  ],
  silver: [
    {
      name: "CodeLab",
      subtitle: "Community Partner",
      logo: "/sponsor-silver-1.svg",
    },
    {
      name: "ByteWorks",
      subtitle: "Media Partner",
      logo: "/sponsor-silver-2.svg",
    },
    {
      name: "DataFlow",
      subtitle: "Analytics Partner",
      logo: "/sponsor-silver-3.svg",
    },
  ],
};

const tierConfig = {
  platinum: {
    icon: Crown,
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
    badgeColor: "bg-primary text-primary-foreground",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
  },
  gold: {
    icon: Medal,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    badgeColor: "bg-yellow-500 text-black",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
  },
  silver: {
    icon: Star,
    color: "text-slate-400",
    borderColor: "border-slate-500/30",
    bgColor: "bg-slate-500/5",
    badgeColor: "bg-slate-500 text-white",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
  },
};

function SponsorTier({ title, sponsors: tierSponsors, tier }: { title: string; sponsors: Sponsor[]; tier: keyof typeof tierConfig }) {
  const config = tierConfig[tier];
  const TierIcon = config.icon;

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <TierIcon className={`size-6 ${config.color}`} />
        <h2 className="font-display-bold text-2xl">{title}</h2>
      </div>
      <div className={`grid grid-cols-1 ${config.gridCols} gap-6`}>
        {tierSponsors.map((sponsor) => (
          <Card
            key={sponsor.name}
            className={`group card-hover ${config.bgColor} ${config.borderColor} transition-all duration-500`}
          >
            <CardContent className="p-8">
              <div className={`relative w-full aspect-[3/1] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className={`font-display-bold text-xl mb-2 ${config.color}`}>
                  {sponsor.name}
                </h3>
                <Badge variant="outline" className={`mono-label ${config.badgeColor} border-transparent`}>
                  {sponsor.subtitle}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 mono-label">
                POWERED BY
              </Badge>
              <h1 className="font-display-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                Sponsors
              </h1>
              <p className="font-mono text-muted-foreground">
                Industry leaders making Tech Week possible
              </p>
            </div>

            <div className="space-y-16">
              <SponsorTier title="Platinum Partners" sponsors={sponsors.platinum} tier="platinum" />
              <SponsorTier title="Gold Partners" sponsors={sponsors.gold} tier="gold" />
              <SponsorTier title="Silver Partners" sponsors={sponsors.silver} tier="silver" />
            </div>

            <div className="mt-16 text-center p-8 border border-dashed border-border bg-card/30 rounded-lg">
              <p className="font-display-bold text-lg mb-2">Want to sponsor Tech Week 2026?</p>
              <p className="font-mono text-sm text-muted-foreground mb-4">
                Get your brand in front of hundreds of innovative students
              </p>
              <a href="mailto:acmw.manipal@gmail.com">
                <Badge variant="outline" className="mono-label cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Contact Us
                </Badge>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
