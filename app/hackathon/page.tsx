"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

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

const submissionGuidelines = [
  "The submission must strictly follow the provided PPT template.",
  "Problem understanding",
  "Proposed solution and overall approach",
  "Technical feasibility",
  "Potential impact and real-world relevance",
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
  const difference = targetDate.getTime() - istNow.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
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
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 100);

    const targetDate = new Date("2026-01-30T09:00:00");

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-4 sm:gap-8">
        {["Days", "Hrs", "Min", "Sec"].map((label) => (
          <TimeBlock key={label} value={0} label={label} />
        ))}
      </div>
    );
  }

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
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-display-bold text-lg">{title}</span>
        {isOpen ? (
          <ChevronUp className="size-5 text-primary" />
        ) : (
          <ChevronDown className="size-5 text-foreground/80" />
        )}
      </button>

      {/* FIXED CONTENT */}
      {isOpen && (
        <div className="p-4 pt-0">
          {children}
        </div>
      )}
    </Card>
  );
}
function ProblemStatements() {
  const [released, setReleased] = useState(false);

  useEffect(() => {
    const releaseTime = new Date("2026-01-24T23:59:00+05:30");

    const checkTime = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
      );
      setReleased(now >= releaseTime);
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!released) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="p-8 border border-border/50 rounded-lg flex items-center justify-center"
          >
            <p className="font-display-bold text-xl text-primary">
              Coming Soon
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="font-display-bold text-xl text-primary mb-4">
        Problem Statements are Live 
      </p>

      <a
        href="/problemStatement.docx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="mono-label">
          <Download className="size-5 mr-2" />
          Download Problem Statements
        </Button>
      </a>
    </div>
  );
}

export default function HackathonPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                HACKATHON
              </Badge>
              <h1 className="font-display-bold text-5xl sm:text-6xl md:text-7xl mb-4 text-shadow">
                <span className="text-primary">Kairo</span>
                <span className="text-foreground">tic</span>
              </h1>
              <p className="font-mono text-foreground/80 max-w-2xl mx-auto">
                Build fast. Think smart. Deliver impact.
              </p>
              <div className="mt-8">
  <a
    href="https://forms.gle/PnPknEVNU33Ce6vd8"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="px-12 py-6 text-lg font-medium card-hover glow-effect"
    >
      Register Now
      <ExternalLink className="ml-2 size-5" />
    </Button>
  </a>
</div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Card className="text-center card-hover bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <p className="font-display-bold text-3xl mb-1">10</p>
                  <p className="mono-label text-foreground/80">Hours</p>
                </CardContent>
              </Card>
              <Card className="text-center card-hover bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <p className="font-display-bold text-3xl mb-1">2-4</p>
                  <p className="mono-label text-foreground/80">Team Size</p>
                </CardContent>
              </Card>
              <Card className="text-center card-hover bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <p className="font-display-bold text-2xl mb-1">8K</p>
                  <p className="mono-label text-foreground/80">Prize Pool</p>
                </CardContent>
              </Card>
              <Card className="text-center card-hover bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <p className="font-display-bold text-3xl mb-1">2</p>
                  <p className="mono-label text-foreground/80">Rounds</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="mono-label text-primary">ABOUT</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed font-mono text-base">
                  A fast-paced, online hackathon designed for builders, thinkers, and innovators.
                  Open to students of all skill levels, the event challenges teams to create
                  real-world tech solutions across two competitive rounds. Think smart, build fast,
                  and deliver impact.
                </p>
              </CardContent>
            </Card>

            <CollapsibleSection title="RULES" defaultOpen>
              <ol className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex gap-3 text-base text-foreground/80 font-mono items-start">
                    <span className="font-mono text-primary select-none mt-0.5">{index + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ol>
            </CollapsibleSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>
                    <span className="mono-label text-primary block mb-2">ROUND 1</span>
                    <span className="font-display-bold text-2xl">COMING SOON</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-mono text-base text-foreground/80">
                    January 24, 11:59 PM – January 27, 11:59 PM
                  </p>
                  <CollapsibleSection title="SUBMISSION GUIDELINES">
                    <ol className="space-y-2">
                      {submissionGuidelines.map((item, index) => (
                        <li key={index} className="flex gap-2 text-base text-foreground/80 font-mono items-start">
                          <span className="text-primary">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                    <a
  href="https://1drv.ms/p/c/41C5CF3902C4D8FC/IQAC07KCm9qbRL2Fzq5hk450Ad1bmh0gRpuzceHfS9UKuKc?e=oWisFh"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="mt-4 w-full mono-label">
    <Download className="size-4 mr-2" />
    Download PPT Template
  </Button>
</a>

                  </CollapsibleSection>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle>
                    <span className="mono-label text-primary block mb-2">ROUND 2</span>
                    <span className="font-display-bold text-2xl">FINAL ROUND</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-base text-foreground/80 mb-4">
                    Sunday, 1st February 2026 | 8:00 A.M.
                  </p>
                  <div className="p-4 border border-dashed border-border rounded-lg">
                    <p className="font-mono text-base text-foreground/80 text-center">
                      Details for Round 2 will be announced after Round 1 results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

           {/* PROBLEM STATEMENTS */}
<Card className="mt-8 bg-card/50 border-border/50">
  <CardHeader>
    <CardTitle className="font-display-bold text-2xl">
      PROBLEM STATEMENTS
    </CardTitle>
  </CardHeader>

  <CardContent>
    <ProblemStatements />
  </CardContent>
</Card>

            <Card className="mt-8 bg-primary/5 border-primary/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="mono-label text-primary mb-4">ROUND 1 RESULTS</p>
                  <ResultsCountdown />
                  <p className="font-mono text-base text-foreground/80 mt-4">
                    30 January 2026 · 9:00 AM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
