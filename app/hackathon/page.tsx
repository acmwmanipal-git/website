"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, ChevronDown, ChevronUp } from "lucide-react";

const rules = [
  "Participation is open exclusively to MIT, Manipal students.",
  "All participants must register and compete in teams of 2 to 4 members.",
  "Each team must include at least one female member.",
  "A participant may be part of only one team.",
  "Teams must adhere strictly to the hackathon timelines and submission deadlines; late submissions will not be considered.",
  "All submissions must be original. Plagiarism or use of existing solutions without meaningful innovation will result in disqualification.",
  "Proposed solutions should clearly address the chosen problem statement and remain aligned with the hackathon theme.",
  "Any external libraries, APIs, datasets, or tools used must be properly acknowledged.",
  "Participants are expected to follow the code of conduct and maintain respectful, professional behavior throughout the event.",
  "Judges' decisions regarding evaluation, shortlisting, and results will be final and binding.",
  "The organizers reserve the right to modify rules, timelines, or evaluation criteria if necessary, with prior notification.",
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date();
  const istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const diff = targetDate.getTime() - istNow.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-2xl sm:text-3xl font-medium tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="mono-label text-foreground/80">{label}</span>
    </div>
  );
}

function ResultsCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-30T09:00:00");
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft(targetDate)),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8">
      <TimeBlock value={timeLeft.days} label="DAYS" />
      <span className="font-mono text-2xl text-primary">:</span>
      <TimeBlock value={timeLeft.hours} label="HRS" />
      <span className="font-mono text-2xl text-primary">:</span>
      <TimeBlock value={timeLeft.minutes} label="MIN" />
      <span className="font-mono text-2xl text-primary">:</span>
      <TimeBlock value={timeLeft.seconds} label="SEC" />
    </div>
  );
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="bg-card/50 border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30"
      >
        <span className="font-display-bold text-lg">{title}</span>
        {isOpen ? <ChevronUp className="size-5 text-primary" /> : <ChevronDown className="size-5 text-foreground/80" />}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </Card>
  );
}

export default function HackathonPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-6xl">

            {/* HEADER */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                HACKATHON
              </Badge>
              <h1 className="font-display-bold text-5xl sm:text-6xl md:text-7xl mb-4">
                <span className="text-primary">Kairo</span>tic
              </h1>
              <p className="font-mono text-foreground/80">
                Build fast. Think smart. Deliver impact.
              </p>
            </div>

            {/* RULES */}
            <CollapsibleSection title="RULES" defaultOpen>
              <ol className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 font-mono text-lg  text-foreground/100">
                    <span className="text-primary">{i + 1}.</span>{rule}
                  </li>
                ))}
              </ol>
            </CollapsibleSection>

            {/* ROUNDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

              {/* ROUND 1 */}
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>
                    <span className="font-display-bold text-2xl text-muted-foreground">
                      ROUND 1 — COMPLETED
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-foreground/70">
                    Submissions are now closed
                  </p>
                </CardContent>
              </Card>

              {/* ROUND 2 */}
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>
                    <span className="mono-label text-primary block mb-2">
                      ROUND 2 — UPCOMING
                    </span>
                    <span className="font-display-bold text-2xl">
                      FINAL ROUND
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-base text-foreground/80 mb-4">
                    Sunday, 1st February 2026 | 8:00 A.M.
                  </p>
                  <p className="font-mono text-base text-foreground/80 text-center">
                    Details for Round 2 will be announced after Round 1 results.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* RESULTS COUNTDOWN */}
            <Card className="mt-8 bg-primary/5 border-primary/30">
              <CardContent className="p-8 text-center">
                <p className="mono-label text-primary mb-4">ROUND 1 RESULTS</p>
                <ResultsCountdown />
                <p className="font-mono text-base text-foreground/80 mt-4">
                  30 January 2026 · 9:00 AM IST
                </p>
              </CardContent>
            </Card>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
