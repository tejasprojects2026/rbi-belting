import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Factory,
  Globe2,
  Handshake,
  Quote,
  Star,
  MessageSquareText,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandStrip, PillarCards, SectionHeading } from "@/components/page-sections";
import { EnquiryDialog } from "@/components/enquiry";
import { allBrands, industries } from "@/lib/site-data";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/factory-hero.jpg";

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RB International Belting & Automation",
  url: "https://rbibelting.com",
  telephone: "+91 87881 95839",
  email: "response@rbibelting.in",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No 5, Kamath Complex, Telco Road, Landewadi, Bhosari Industrial Estate",
    addressLocality: "Pune",
    postalCode: "411026",
    addressCountry: "IN",
  },
};

const stats = [
  ["20+", "Years in industry"],
  ["500+", "Active clients"],
  ["50+", "Brand partnerships"],
  ["3", "Product divisions"],
  ["PAN India", "+ Export service"],
];

const featuredBrands = ["Gates", "Fenner", "PIX", "Pidilite"];
const customerReviews = [
  {
    name: "Vetri",
    source: "Justdial",
    date: "16 Mar 2026",
    title: "Reliable product quality",
    text: "Public review feedback highlights dependable industrial belting quality and service support from the RB International team.",
  },
  {
    name: "Samrudhi",
    source: "Justdial",
    date: "16 Dec 2025",
    title: "Technical support",
    text: "Customers mention helpful technical guidance and practical price support while choosing replacement products.",
  },
  {
    name: "Aditya",
    source: "Justdial",
    date: "8 Jul 2024",
    title: "Fast response",
    text: "Buyer feedback points to reasonable pricing and quick service for urgent industrial requirements.",
  },
];
const brandThemes = [
  "border-primary/25 bg-primary/10 text-primary",
  "border-foreground/10 bg-muted text-foreground",
  "border-category/25 bg-background text-primary",
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Industrial Belts, Automation & Adhesives | RB International Pune",
      "RB International supplies power transmission belts, automation components and industrial adhesives from Pune to 500+ manufacturers across India and export markets.",
      "/",
      org,
    ),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="home-hero">
        <img
          src={hero}
          alt="Modern Indian factory floor with CNC machinery and production lines"
          width={1600}
          height={912}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="site-container relative flex min-h-[82vh] items-end pb-8 pt-24 text-background md:pb-10">
          <div className="w-full max-w-6xl">
            <div className="max-w-5xl">
              <p className="eyebrow text-primary-soft">Powering industry since 2003</p>
              <h1 className="mt-5 text-4xl font-black leading-[1.08] md:text-6xl lg:text-7xl">
                India's trusted partner in power transmission, automation & industrial adhesives
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-background/80">
                Supplying critical belts, automation components and MRO adhesives from Pune to manufacturers across India and export markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12">
                  <a href="#divisions">
                    Explore our range <ArrowRight />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-background/40 bg-background/10 text-background hover:bg-background hover:text-foreground"
                  onClick={() => setOpen(true)}
                >
                  <MessageSquareText />
                  Get a quote
                </Button>
              </div>
            </div>

            <div className="mt-10 grid overflow-hidden border border-background/25 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map(([number, label]) => (
                <div
                  key={label}
                  className="border-b border-r border-background/25 px-3 py-5 text-center last:border-r-0 sm:[&:nth-child(even)]:border-r-0 lg:border-b-0 lg:[&:nth-child(even)]:border-r lg:last:border-r-0"
                >
                  <strong className="block text-2xl font-black text-primary-soft md:text-3xl">{number}</strong>
                  <span className="mt-1 block text-xs font-bold uppercase text-background/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="divisions" className="pattern-shared py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Complete industrial supply"
            title="Three divisions. One trusted source."
            text="Choose the product family you need or send the exact code, size or application directly to our team."
          />
          <PillarCards />
        </div>
      </section>

      <section className="bg-foreground py-16 text-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Authorized supply"
            title={
              <>
                 <span className="block whitespace-nowrap text-[1.05rem] leading-[1.08] min-[390px]:text-[1.25rem] sm:hidden">Fast-moving brands for</span>
                 <span className="block whitespace-nowrap text-[1.05rem] leading-[1.08] min-[390px]:text-[1.25rem] sm:hidden">urgent industrial requirements</span>
                <span className="hidden sm:inline">Fast-moving brands for urgent industrial requirements</span>
              </>
            }
          />
          <BrandStrip brands={featuredBrands} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBrands.map((brand) => (
              <div key={brand} className="border border-background/20 p-5 text-center">
                <div className="grid h-20 place-items-center bg-background/5 text-xl font-black">{brand}</div>
                <p className="mt-4 text-xs font-bold uppercase text-background/60">Stock and supply support</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <SectionHeading eyebrow="Industry coverage" title="Trusted across manufacturing sectors" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry} className="bg-background p-7">
                <Factory className="text-primary" />
                <h3 className="mt-5 text-lg font-black">{industry}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Belting, motion control and maintenance products selected for your production environment.
                </p>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/industries">
              See all industries <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="pattern-shared bg-muted py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why manufacturers call us"
            title={
              <>
                <span className="block whitespace-nowrap text-[1.05rem] leading-[1.08] min-[390px]:text-[1.25rem] sm:hidden">Fast answers. Genuine products.</span>
                <span className="block whitespace-nowrap text-[1.05rem] leading-[1.08] min-[390px]:text-[1.25rem] sm:hidden">Practical support.</span>
                <span className="hidden sm:inline">Fast answers. Genuine products. Practical support.</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {(
              [
                [PackageCheck, "Stock depth", "A broad multi-brand range for planned maintenance and urgent replacements."],
                [Handshake, "Application support", "Tell us the machine, size or part code. We help narrow the options."],
                [Globe2, "Wide service reach", "Supply across India, with support for Middle East, Australia and Southeast Asia enquiries."],
              ] as [LucideIcon, string, string][]
            ).map(([Icon, title, description]) => (
              <article key={title} className="border-t-4 border-primary bg-background p-7">
                <Icon className="text-primary" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="border-t-4 border-primary bg-foreground p-7 text-background">
              <p className="eyebrow text-primary-soft">Customer reviews</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Trusted by industrial buyers and maintenance teams</h2>
              <p className="mt-5 leading-7 text-background/70">
                Public platform feedback points to product quality, fast support and practical guidance for industrial belting requirements.
              </p>
              <div className="mt-8 grid gap-4 border-y border-background/15 py-6 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <div className="flex items-center gap-1 text-primary-soft" aria-label="4.9 out of 5 rating">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <Star key={item} className="size-5 fill-current" />
                    ))}
                  </div>
                  <strong className="mt-3 block text-4xl font-black">4.9/5</strong>
                  <span className="mt-1 block text-sm font-bold uppercase text-background/60">909 Justdial ratings</span>
                </div>
                <div className="text-sm leading-6 text-background/70">
                  Rating snapshot from the public Justdial listing for R B International Belting, Bhosari Industrial Estate.
                </div>
              </div>
              <Button asChild variant="secondary" className="mt-6">
                <a
                  href="https://www.justdial.com/Pune/R-B-International-Belting-Nr-Hotel-Sai-Palace-Bhosari-Industrial-Estate/020PXX20-XX20-170107164555-T5D4_BZDET"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Justdial listing <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {customerReviews.map((review) => (
                <article key={review.title} className="border border-border bg-background p-6 shadow-sm">
                  <Quote className="text-primary" />
                  <div className="mt-5 flex items-center gap-1 text-primary">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <Star key={item} className="size-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{review.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{review.text}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <strong className="block text-sm font-black">{review.name}</strong>
                    <span className="text-xs font-bold uppercase text-muted-foreground">
                      {review.source} review theme | {review.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="site-container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Have a specific requirement?</h2>
            <p className="mt-2 text-primary-foreground/75">
              Send the brand, code, size or application. Our team aims to respond within 2 business hours.
            </p>
          </div>
          <Button size="lg" variant="secondary" onClick={() => setOpen(true)}>
            Submit enquiry
          </Button>
        </div>
      </section>

      <section className="pattern-shared py-16">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Brand network</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Brands associated with RBI Belting</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A broad supply network for belts, motion control, adhesives, maintenance chemicals and industrial MRO requirements.
              </p>
              <Button variant="outline" className="mt-5" onClick={() => setOpen(true)}>
                <MessageSquareText />
                Ask for a brand
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
              {allBrands.map((brand, index) => (
                <div
                  key={brand}
                  className={`inline-flex min-h-10 items-center border px-3 py-1.5 text-xs font-black leading-tight shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:min-h-12 sm:px-4 sm:py-2 sm:text-sm ${brandThemes[index % brandThemes.length]}`}
                >
                  <span className="mr-3 text-xs font-black opacity-50">{String(index + 1).padStart(2, "0")}</span>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryDialog open={open} onOpenChange={setOpen} seed={{}} />
    </>
  );
}
