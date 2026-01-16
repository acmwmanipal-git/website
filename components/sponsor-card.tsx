import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface SponsorCardProps {
  logo: string;
  name: string;
  subtitle: string;
  tier: "platinum" | "gold" | "silver";
}

const tierStyles = {
  platinum: "border-primary/50 bg-primary/5",
  gold: "border-yellow-600/50 bg-yellow-600/5",
  silver: "border-muted-foreground/30 bg-muted/10",
};

const tierSizes = {
  platinum: "aspect-[3/1]",
  gold: "aspect-[4/1]",
  silver: "aspect-[5/1]",
};

export function SponsorCard({ logo, name, subtitle, tier }: SponsorCardProps) {
  return (
    <Card
      className={`overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] ${tierStyles[tier]}`}
    >
      <CardContent className="p-6">
        <div className={`relative w-full ${tierSizes[tier]} mb-4`}>
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h3 className="font-display text-lg font-medium">{name}</h3>
          <p className="font-mono text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
}
