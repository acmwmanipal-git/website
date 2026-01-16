import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    href: "https://in.linkedin.com/company/acm-w-manipal",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/acmwmanipal/",
    label: "Instagram",
    icon: Instagram,
  },
  { href: "mailto:acmw.manipal@gmail.com", label: "Email", icon: Mail },
  { href: "tel:+919620982968", label: "Phone", icon: Phone },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Image
              src="/acmw.png"
              alt="ACMW Logo"
              width={96}
              height={96}
              className="rounded-full"
            />
            <div>
              <p className="font-display-bold text-lg">KairOS</p>
              <p className="font-mono text-sm text-muted-foreground">
                &lt;CODE_THE_MOMENT&gt;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center text-xs font-mono text-muted-foreground">
          <p>ACMW MIT MANIPAL TECH WEEK 2026</p>
        </div>
      </div>
    </footer>
  );
}
