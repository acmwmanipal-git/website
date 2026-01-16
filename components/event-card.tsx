import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  image: string;
  title: string;
  href: string;
}

export function EventCard({ image, title, href }: EventCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-medium">{title}</h3>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary"
          >
            Learn More
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
