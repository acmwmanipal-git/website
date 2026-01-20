"use client";

import { useState } from "react";
import { HelpCircle, Send, User, Mail, MessageSquare, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className={cn(
        "border-border bg-card/50 transition-all duration-300 overflow-hidden cursor-pointer",
        isOpen ? "border-primary/50" : ""
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center justify-between p-5 text-left">
        <span className="font-mono text-sm">{question}</span>
        {isOpen ? (
          <ChevronUp className="size-4 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="size-4 text-muted-foreground flex-shrink-0" />
        )}
      </div>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-0">
          <div className="h-px w-full bg-primary/20 mb-4" />
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </Card>
  );
}

const faqs = [
  {
    question: "What is ACM-W Tech Week 2026?",
    answer:
      "ACM-W Tech Week 2026 is a multi-day technical event organized by the ACM-W MIT Manipal Chapter. It includes a 24-hour hackathon, offline workshops, expert talks, and competitive learning-based events aimed at encouraging innovation and collaboration."
  },
  {
    question: "Who can participate in ACM-W Tech Week?",
    answer:
      "Participation is open exclusively to students of MIT Manipal across all branches and academic years."
  },
  {
    question: "Is Tech Week only for women?",
    answer:
      "No. While the event is organized by ACM-W, all Tech Week events are open to participants of all genders."
  },
  {
    question: "Is Tech Week suitable for beginners?",
    answer:
      "Yes. Tech Week is designed for students of all skill levels. Beginners are encouraged to participate, as workshops and sessions are structured to be beginner-friendly while still offering value to experienced participants."
  },
  {
    question: "What events are included in Tech Week?",
    answer:
      "Tech Week 2026 includes a 24-hour hackathon, offline technical workshops, expert-led insight sessions, and competitive learning events such as Kaggle challenges. Detailed information for each event will be available on the Events page."
  },
  {
    question: "How do I register for Tech Week events?",
    answer:
      "Registration links will be available on the respective event pages. Some events may require individual registration, while others may require team registration."
  },
  {
    question: "Can I participate in more than one event?",
    answer:
      "Yes, participants may register for multiple events as long as the event timings do not overlap."
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes, participation certificates will be provided for selected events. Winners and shortlisted teams may receive additional recognition or certificates."
  },
  {
    question: "Where will the events be conducted?",
    answer:
      "Events during Tech Week will be conducted in online, offline, or hybrid modes. The mode of each event will be clearly mentioned on its respective page."
  },
  {
    question: "How will announcements and updates be shared?",
    answer:
      "All important updates and announcements will be shared through the official Tech Week website and ACM-W MIT Manipal social media channels."
  },
  {
    question: "Who can I contact for queries or support?",
    answer:
          "For any queries or assistance, you can contact the ACM-W MIT Manipal team via email at acmw.manipal@gmail.com or through our official social media channels. You may also reach out to us using the contact numbers provided in the website footer or by submitting the Contact Us form available below on this page."
  }
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.open(`mailto:acmw.manipal@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="pl-10 font-mono bg-card/50 border-border/50"
          required
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="pl-10 font-mono bg-card/50 border-border/50"
          required
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
        <Textarea
          placeholder="Share your thoughts"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="pl-10 font-mono bg-card/50 border-border/50 min-h-[100px]"
          required
        />
      </div>
      <Button type="submit" className="w-full mono-label">
        <Send className="size-4 mr-2" />
        Send
      </Button>
    </form>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 mono-label">
                SUPPORT
              </Badge>
              <div className="flex items-center justify-center gap-3 mb-4">
                <HelpCircle className="size-8 text-primary" />
                <h1 className="font-display-bold text-4xl sm:text-5xl">
                  FAQ
                </h1>
              </div>
            </div>

            <div className="space-y-3 mb-16">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display-bold text-2xl mb-6">Contact Us</h2>
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
                </p>
                <ContactForm />
              </div>

              <div>
                <Card className="bg-card/50 border-border/50 h-full">
                  <CardContent className="p-6">
                    <h3 className="font-display-bold text-xl mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="mono-label text-primary mb-2">EMAIL</p>
                        <a href="mailto:acmw.manipal@gmail.com" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                          acmw.manipal@gmail.com
                        </a>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <p className="mono-label text-primary mb-4">Connect With Us</p>
                        <div className="flex gap-4">
                          <a href="https://in.linkedin.com/company/acm-w-manipal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="https://www.instagram.com/acmwmanipal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
