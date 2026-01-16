"use client";

import { useState, useEffect } from "react";

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
      <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-medium tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-mono text-2xl sm:text-3xl md:text-4xl text-primary">
      :
    </span>
  );
}

function CountdownDisplay() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(new Date("2026-01-28T00:00:00")));

  useEffect(() => {
    const targetDate = new Date("2026-01-28T00:00:00");

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <Separator />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 sm:gap-4">
        <TimeBlock value={0} label="Days" />
        <Separator />
        <TimeBlock value={0} label="Hours" />
        <Separator />
        <TimeBlock value={0} label="Minutes" />
        <Separator />
        <TimeBlock value={0} label="Seconds" />
      </div>
    );
  }

  return <CountdownDisplay />;
}
