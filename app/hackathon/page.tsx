"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  CalendarDays,
  Clock,
} from "lucide-react";

/* ---------------- RULES ---------------- */

const rules = [
  "Participation is open exclusively to MIT, Manipal students.",
  "All participants must register and compete in teams of 2 to 4 members.",
  "Each team must include at least one female member.",
  "A participant may be part of only one team.",
  "Teams must adhere strictly to the hackathon timelines and submission deadlines.",
  "All submissions must be original. Plagiarism will result in disqualification.",
  "Solutions must align with the hackathon theme.",
  "External libraries and tools must be acknowledged.",
  "Judges’ decisions will be final and binding.",
];

/* ---------------- ROUND 1 RESULTS ---------------- */

const round1Results = [
  { code: "KT2639", name: "Kasukabe Defence Force" },
  { code: "KT2605", name: "Dronaid" },
  { code: "KT2630", name: "CodeBlooded" },
  { code: "KT2616", name: "The Party" },
  { code: "KT2637", name: "bleach&bubblegum" },
  { code: "KT2640", name: "TensorZ" },
  { code: "KT2620", name: "BratzCode" },
  { code: "KT2635", name: "Team YAKS" },
  { code: "KT2625", name: "8miles" },
  { code: "KT2643", name: "Believers2.0" },
  { code: "KT2623", name: "Team Upside Down" },
  { code: "KT2619", name: "Three Musketeers" },
];

/* ---------------- FINAL RESULTS ---------------- */

const finalResults = [
  {
    place: "1st Place",
    team: "TensorZ",
    members: [
      "Krishna Anand",
      "Ashna Manowar",
      "Varanasi Naga Akhil",
    ],
    highlight: "gold",
  },
  {
    place: "2nd Place",
    team: "BratzCode",
    members: [
      "Gahna Bisht",
      "Aadya Chhavi Mishra",
      "Prisha Maurya",
      "Ankila Bajaj",
    ],
    highlight: "silver",
  },
  {
    place: "3rd Place",
    team: "Dronaid",
    members: [
      "Aditya Javvaji",
      "Mahek Gupta",
    ],
    highlight: "bronze",
  },
];

/* ---------------- COLLAPSIBLE ---------------- */

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card className="bg-card/60 border-border/50 mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 hover:bg-muted/30"
      >
        <span className="font-display-bold text-xl">{title}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && <div className="p-4 pt-0">{children}</div>}
    </Card>
  );
}

/* ---------------- ROUND 1 RESULTS ---------------- */

function Round1Results() {
  return (
    <CollapsibleSection
      title="ROUND 1 RESULTS — QUALIFIED TEAMS"
      defaultOpen
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {round1Results.map((team) => (
          <Card
            key={team.code}
            className="bg-muted/30 border-border/40 hover:shadow-lg transition"
          >
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-lg">{team.name}</CardTitle>
              <Badge variant="secondary">QUALIFIED</Badge>
            </CardHeader>
            <CardContent className="font-mono text-sm">
              Team Code:{" "}
              <span className="text-primary font-semibold">{team.code}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </CollapsibleSection>
  );
}

/* ---------------- FINAL RESULTS ---------------- */

function FinalResults() {
  return (
    <CollapsibleSection title="FINAL ROUND RESULTS — WINNERS" defaultOpen>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {finalResults.map((result) => (
          <Card
            key={result.team}
            className="bg-muted/30 border-border/40 hover:shadow-lg transition"
          >
            <CardHeader className="space-y-2">
              <Badge
                className={`w-fit ${
                  result.highlight === "gold"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : result.highlight === "silver"
                    ? "bg-gray-400/10 text-gray-300"
                    : "bg-orange-500/10 text-orange-400"
                }`}
              >
                {result.place}
              </Badge>

              <CardTitle className="text-2xl">
                {result.team}
              </CardTitle>
            </CardHeader>

            <CardContent className="font-mono text-lg space-y-2">
              <p className="text-muted-foreground">Team Members:</p>
              <ul className="list-disc list-inside space-y-1">
                {result.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </CollapsibleSection>
  );
}

/* ---------------- ROADMAP ---------------- */

function HackathonRoadmap() {
  const steps = [
    {
      status: "COMPLETED",
      title: "Round 1 · Online Submission",
      description: "Teams submitted their solutions for evaluation.",
      color: "green",
    },
    {
      status: "COMPLETED",
      title: "Final Round · On-Campus",
      description:
        "Top teams competed on campus and presented their solutions to the judges.",
      date: "Sunday, 1st February 2026",
      time: "8:00 A.M. onwards",
      color: "primary",
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-center text-4xl font-display-bold mb-14">
        Hackathon <span className="text-primary">Roadmap</span>
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-[2px] bg-border" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-8"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-4
                ${
                  step.color === "green"
                    ? "bg-green-500 border-green-400"
                    : "bg-primary border-primary/70"
                }`}
              />

              <Card className="flex-1 bg-card/60 border-border/50">
                <CardHeader>
                  <Badge
                    className={`w-fit mb-2 ${
                      step.color === "green"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {step.status}
                  </Badge>

                  <CardTitle className="text-2xl">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-mono text-lg space-y-3">
                  <p>{step.description}</p>

                  {step.date && (
                    <p className="text-xl font-semibold flex items-center gap-2">
                      <CalendarDays className="text-primary" />
                      {step.date}
                    </p>
                  )}

                  {step.time && (
                    <p className="text-xl font-semibold flex items-center gap-2">
                      <Clock className="text-primary" />
                      {step.time}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function HackathonPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <Badge className="mb-4">HACKATHON</Badge>
              <h1 className="text-6xl font-display-bold mb-4">
                <span className="text-primary">Kairo</span>tic
              </h1>
              <p className="font-mono text-lg text-foreground/80">
                Build fast. Think smart. Deliver impact.
              </p>
            </div>

            <CollapsibleSection title="RULES">
              <ol className="space-y-3 font-mono text-lg">
                {rules.map((rule, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">{i + 1}.</span>
                    {rule}
                  </li>
                ))}
              </ol>
            </CollapsibleSection>

            <Round1Results />
            <FinalResults />
            <HackathonRoadmap />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
