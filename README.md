# RB Industrial Connect

RB International Belting & Automation Website

### PROJECT OVERVIEW

Build a multi-page, SEO-driven, B2B industrial website for **RB International Belting & Automation** -- a 20+ year old power transmission, automation, and industrial adhesives company based in Pune, India. Domain: **rbibelting.com**. The website must establish the company as an industry leader, generate high-volume B2B enquiries from domestic Indian manufacturing hubs (Maharashtra, Gujarat, Tamil Nadu, Karnataka, Rajasthan, MP) and export markets (Middle East, Australia, Southeast Asia), and serve as the digital backbone for a future franchise expansion.

This is NOT an ecommerce website. No cart, no pricing, no buy buttons. Every page funnels toward one action: submit an enquiry or message on WhatsApp.

- Responsive: mobile-first, works flawlessly on phone, tablet, desktop
- SEO: proper meta titles, descriptions, Open Graph tags, canonical URLs, structured data (Organization, LocalBusiness, Product schema) on every page
- Fast: lazy load images, code split routes, optimize LCP under 2.5s


### BRAND IDENTITY AND COLOR SYSTEM

**Primary brand color:** Deep Crimson Red #8B1A1A (from logo -- dark red gradient sphere with white "rb" mark)
**Secondary:** White #FFFFFF, Off-white #F5F3F0, Charcoal #1A1A1A

**Three category accent colors:**
- Power Transmission (Belts & Drives): Brand Red #8B1A1A -- core business, stays in brand
- Automation & Motion Control: Steel Blue #2C5F7C -- tech, precision, engineering feel
- Industrial Adhesives & Chemicals: Amber #B8860B -- chemical, industrial, warm

**Typography:** Use a clean sans-serif system. Headings in a bold industrial font (Inter Bold or similar). Body in Inter Regular. No decorative fonts.

**Color tokens:** Define all colors as CSS custom properties on :root. Dark mode is NOT needed -- this is a B2B industrial site viewed on office desktops and factory floor phones during daytime.

Maintain strict consistency: every button, link, accent, section header uses the category color when inside that category's pages, and the brand red on shared/global pages.

---

### LOGO PRELOADER

On initial site load only (not between page transitions), show a 2-3 second preloader animation: the "rb" logo mark (white on deep red gradient circle) fades in with a subtle scale-up, then the full company name types in below it, then the preloader slides up to reveal the homepage. Smooth, premium, quick. Store a sessionStorage flag so it only plays once per session.

---

### INDUSTRIAL BACKGROUND ELEMENTS

Do not use plain white backgrounds. Each section and page should have subtle, non-distracting industrial texture or pattern elements in the background:
- Power Transmission pages: faint gear/belt pattern watermark at 3-5% opacity
- Automation pages: subtle grid/circuit-line pattern at 3-5% opacity
- Adhesives pages: subtle molecular/hexagonal pattern at 3-5% opacity
- Homepage and shared pages: light diagonal crosshatch industrial texture

These must NOT affect readability. They sit behind content at very low opacity, adding visual depth without clutter. Consider subtle parallax scroll on some hero section backgrounds using industrial photography (stock images of factory floors, CNC machines, conveyor lines).

---

### SITE STRUCTURE (PAGES AND ROUTES)

```
/ -- Homepage
/about -- About Us (Journey, Vision, Mission, Founders)
/power-transmission -- Category Landing: Belts & Drives
/power-transmission/[sub-category] -- Sub-category pages (see taxonomy below)
/automation -- Category Landing: Automation & Motion Control
/automation/[sub-category] -- Sub-category pages
/adhesives -- Category Landing: Industrial Adhesives & Chemicals
/adhesives/[sub-category] -- Sub-category pages
/brands -- Brands We Stock (with authorized dealer badges)
/industries -- Industries We Serve
/contact -- Contact, Map, Enquiry Form
/franchise -- Franchise Opportunity (Coming Soon style)
```

---

### PRODUCT TAXONOMY

This is the critical structure. Three pillars, each with sub-categories. NOT every sub-category will have further nesting. The system must handle 2-level deep (Category > Sub-category) and sometimes 3-level deep (Category > Sub-category > Product Type) gracefully without forcing empty pages.

**PILLAR 1: POWER TRANSMISSION (Belts & Drives)** -- Color: Brand Red #8B1A1A
Route: /power-transmission

Sub-categories (each gets its own page):
1. **V-Belts** -- /power-transmission/v-belts
   - Includes: Classical V-Belts, Narrow V-Belts, Micro V-Belts, Banded V-Belts, Variable Speed Belts, Link/Nutlink V-Belts, Cogged V-Belts
2. **Timing Belts** -- /power-transmission/timing-belts
   - Includes: Rubber Timing Belts, PU Timing Belts, PU Coated Timing Belts, Eagle PD Timing Belts, Gates Polychain GT Carbon, Gates Polyflex JB, HTD Belts, Special Timing Belts
3. **Conveyor Belts** -- /power-transmission/conveyor-belts
   - Includes: PU Conveyor Belts, PVC Conveyor Belts, Food Grade Belts, Plastic Modular Belts, Steel Modular Belts, Rubber Conveyor Belts, Elevator/Lift Belts, Vacuum Belts
4. **Flat Belts** -- /power-transmission/flat-belts
   - Includes: Flat Transmission Belts, Steel Cord Flat Belts, Round PU Cords/Belts, Woven Belts
5. **Pulleys & Bushes** -- /power-transmission/pulleys-and-bushes
   - Includes: Timing Pulleys, CI Timing Pulleys, V-Pulleys, Taper Lock Bushes, Keyless Bushes
6. **Couplings** -- /power-transmission/couplings
   - Includes: Eurogrip Flexible Couplings, Servo Couplings, Encoder Couplings
7. **Accessories & Tools** -- /power-transmission/accessories
   - Includes: Belt Tension Testers, Maintenance Tools, Rust Preventives & Cleaners

Brands for this pillar: Fenner, Gates, Optibelt, Goodyear Eagle NRG, Continental ContiTech, Megadyne, Carlisle, PIX, Hutchinson, Mitsubishi, Polymaxx
Plus: RB International's own branded products (placeholder section -- "Our Own Range: Coming Soon")

**PILLAR 2: AUTOMATION & MOTION CONTROL** -- Color: Steel Blue #2C5F7C
Route: /automation

Sub-categories:
1. **Linear Motion Systems** -- /automation/linear-motion
   - Includes: Ball Screws, Ball Screw Support Units, Linear Guideways, Linear Shafts, Racks & Pinions
2. **Robotics & Actuators** -- /automation/robotics
   - Includes: Gantry Robots/Actuators, XYTH Series, Mono Stage Systems
3. **Motors & Drives** -- /automation/motors-and-drives
   - Includes: Servo Motors & Drives, Stepper Motors, Gearbox PAB/PPG/PPGA Series
4. **Controllers** -- /automation/controllers
   - Includes: CNC Controllers, DSP Controllers

Brands for this pillar: Gates, Megadyne, Polymaxx, Mitsubishi
Plus: RB International's own branded automation products (placeholder section)

**PILLAR 3: INDUSTRIAL ADHESIVES & CHEMICALS** -- Color: Amber #B8860B
Route: /adhesives

Sub-categories:
1. **Threadlockers & Retaining Compounds** -- /adhesives/threadlockers
   - Key brands: Loctite, Anabond, 3M
2. **Silicone Sealants & Gasket Makers** -- /adhesives/sealants
   - Key brands: Boss Silicone, Anabond, Polymaxx
3. **Structural & Epoxy Adhesives** -- /adhesives/structural
   - Key brands: Araldite, Lapox, Loctite, Lord Adhesive, Bond Tide, Metlok, MxBon
4. **General Purpose & Wood Adhesives** -- /adhesives/general-purpose
   - Key brands: Fevicol SH, Fevicol RS 998, Fevicol MRO, Pidilite IBS, Fevi Kwik, Dr. Fixit, Polygrip
5. **Specialty Chemicals & MRO** -- /adhesives/specialty
   - Key brands: WD-40, CRC, Speb 7, M-Seal Steel Putty, Hot Melt Adhesives, Arofine Polymers, SAV Chemicals
6. **Industrial Tapes & Compounds** -- /adhesives/tapes
   - Key brands: 3M, Polymaxx

Brands for this pillar (display as operated under "RB Adhesive Company, a division of RB Traders"): Pidilite, Loctite, 3M, Anabond, Araldite, Amico, Polymaxx, Speb 7, WD-40, Arofine Polymers, SAV Chemicals, Atul, Metlok

---

### THE SMART ENQUIRY SYSTEM (Key differentiator)

This is what makes this site different from every other industrial trader website. The problem: thousands of SKUs across hundreds of product types. Listing every belt size, every adhesive variant, every motor spec is impossible and creates a horrible browsing experience. The solution: a "Smart Enquiry" system that works at every level of the site.

**Component 1: Floating "Quick Enquiry" Button**
A persistent floating button on the bottom-left of the screen (bottom-right is reserved for WhatsApp). Pill-shaped, brand red, with text "Can't find what you need?" When clicked, it opens a modal with:
- A large search/text input: "Describe what you're looking for..."
- Dropdown: Select category (Power Transmission / Automation / Adhesives / Not Sure)
- Name, Company, Phone, Email fields
- Submit button that sends form data to a configured endpoint
- OR a "Send via WhatsApp" button that takes whatever they typed in the search field and pre-fills a WhatsApp message to the business number

**Component 2: Sticky WhatsApp Button**
Bottom-right corner. Green WhatsApp icon. Always visible. On click, opens WhatsApp with pre-filled message: "Hi, I'm reaching out from your website. I'm looking for: [auto-insert current page product category if on a product page, or leave blank on homepage]". Link: https://wa.me/918788195839?text=[prefilled message]

**Component 3: Page-Level Enquiry Sections**
Every sub-category page ends with a prominent CTA section: "Looking for [Category Name]? Tell us your requirement." with an inline form (text area for requirement description, name, company, phone, email, submit). Also a button "Or WhatsApp us directly" that pre-fills the message with the sub-category name.

**Component 4: Smart Search Bar in Header**
A search icon in the main navigation that expands into a search overlay. As the user types, show smart suggestions mapped to sub-categories: e.g., typing "timing" shows "Timing Belts", "PU Timing Belts", "Timing Pulleys". If the typed text does not match any suggestion, show: "No exact match? Submit an enquiry for '[typed text]'" -- clicking this opens the Quick Enquiry modal with their search text pre-filled. This way, even if a product is not listed on the website, the visitor's intent is captured and converted into a lead.

**Why this works:** An Indian manufacturing buyer often knows the part number or brand code they need (e.g., "Gates 8M 1200" or "Loctite 243"). They do not want to click through 4 levels of navigation. This system lets them type exactly what they need and either find the right page or immediately submit an enquiry. Zero friction.

### PAGE-BY-PAGE CONTENT BRIEF

**PAGE: HOMEPAGE ( / )**

**Hero Section:**
Full-width hero with dark industrial background image (stock: factory floor with conveyor belts or CNC machines, dark overlay). Animated text entry.

Headline: "India's Trusted Partner in Power Transmission, Automation & Industrial Adhesives"
Sub-headline: "Supplying 500+ manufacturing units across India and abroad since 2003. Authorized dealers for Fenner, Gates, Optibelt, Pidilite, Loctite, 3M and more."
CTA buttons: "Explore Our Range" (scrolls to category section) | "Get a Quote" (opens enquiry modal)

**Stats Counter Bar (animated count-up on scroll):**
- 20+ Years in Industry
- 500+ Active Clients
- 50+ Brand Partnerships
- 3 Product Divisions
- PAN India + Export Service

**Three Pillar Cards Section:**
Heading: "Three Divisions. One Trusted Source."
Three large cards, each with category accent color, icon, title, 2-line description, and "Explore" CTA:

Card 1 -- Power Transmission (Red)
"V-Belts, Timing Belts, Conveyor Belts, Pulleys, Couplings -- everything that keeps your machines running. Authorized dealers for Fenner, Gates, PIX, Continental, Megadyne, and more."

Card 2 -- Automation & Motion Control (Steel Blue)
"Ball Screws, Linear Guideways, Gantry Robots, Servo Motors, CNC Controllers -- precision components for the factories of tomorrow."

Card 3 -- Industrial Adhesives & Chemicals (Amber)
"From Loctite threadlockers to Pidilite structural adhesives, WD-40 to 3M tapes -- the complete MRO adhesive range under one roof. Operated as RB Adhesive Company."

**Authorized Dealer Certificates Strip:**
Heading: "Authorized Dealers & Distributors"
Horizontal scrolling logo strip with placeholder badge images for: Gates, Fenner, PIX, Pidilite (and space for more). Each logo sits inside a subtle card with "Authorized Dealer" text below it. These are scanned certificates converted to clean badge-style graphics.

**Brand Logo Carousel:**
Auto-scrolling continuous strip of all partner brand logos: Fenner, Gates, Optibelt, Goodyear Eagle NRG, Continental ContiTech, Megadyne, Carlisle, PIX, Hutchinson, Mitsubishi, Polymaxx, Pidilite, Loctite, 3M, Anabond, Araldite, WD-40, CRC, Amico, Arofine Polymers, SAV Chemicals, Atul, Metlok, Speb 7. Use brand logos where available (stock/placeholder).

**Industries We Serve Section:**
Heading: "Trusted Across Industries"
Icon cards in a horizontal scroll or grid: Automotive, Packaging, Food & Beverage, Pharmaceuticals, Textiles, Cement & Mining, Logistics & Warehousing, General Manufacturing, OEM & Machine Building
Each icon card has a subtle hover effect showing 1-line text about what RB International supplies to that industry.

**Customer Logo Strip:**
Heading: "Trusted By Leading Manufacturers"
Placeholder logos for 12-15 dummy client names. Use generic industrial company logo placeholders. Names: "[Client Name]" repeated with different placeholder icons. To be replaced with real logos later.

**Testimonial Carousel:**
3-4 placeholder testimonials. Each card: quote text, person name, company name, designation. Subtle category tag on each (e.g., "Power Transmission Client" or "Adhesives Client").

Placeholder testimonials:
- "[Placeholder] -- We've been sourcing all our belting needs from RB International for over 8 years. Their stock availability and technical support are unmatched in Pune." -- [Name], [Company], Pune
- "[Placeholder] -- RB Adhesive Company has been our sole supplier for Loctite and Pidilite products. Reliable, fast, and always in stock." -- [Name], [Company], Chakan
- "[Placeholder] -- Their automation range helped us set up a complete linear motion system for our packaging line. One vendor for everything." -- [Name], [Company], Chennai

**CTA Banner:**
Dark background, full width. "Have a specific requirement? Our team responds within 2 hours." Two buttons: "Submit Enquiry" | "WhatsApp Us"

**Footer:**
Company name, address (Shop No 5, Kamath Complex, Telco Road, Landewadi, Bhosari Industrial Estate, Pune 411026), phone numbers (primary: +91 87881 95839), email: response@rbibelting.in
Quick links to all main pages.
Social icons: Instagram (https://www.instagram.com/rbibelting/), YouTube (placeholder #), Facebook (placeholder #), LinkedIn (placeholder #)
Review badges: "Rated 5.0 on JustDial (483 Reviews)" with JustDial icon linking to: https://www.justdial.com/Pune/R-B-International-Belting-Nr-Hotel-Sai-Palace-Bhosari-Industrial-Estate/020PXX20-XX20-170107164555-T5D4_BZDET
Google Reviews badge (placeholder, link to be added)
Google Map embed or link: https://maps.app.goo.gl/v51wGZH4o8cT1e3D8
"Since 2003" badge

---

**PAGE: ABOUT US ( /about )**

**Hero:** "The RB Story -- Two Decades of Trust, Delivered."

**Journey Timeline Section:**
Vertical scrolling timeline with milestones:
- 2003: Founded in Bhosari, Pune as a belting supply firm by Mr. Vishwanath Baigar and Mr. Omprakash D. Rokhade
- 2006: Became authorized dealer for Fenner and Gates
- 2010: Expanded into industrial adhesives -- launched RB Adhesive Company as a division
- 2014: Entered automation and motion control product range
- 2018: Crossed 300+ active client accounts across Maharashtra
- 2020: Expanded service to PAN India and international markets
- 2023: Completed 20 years. 500+ active clients. 50+ brand partnerships.
Note: These are approximate/placeholder milestones.

**Founders Section:**
Two cards side by side.

Card 1:
- Placeholder image (professional headshot placeholder)
- Name: Mr. Vishwanath B. Rokhade
- Designation: Founder & Director
- Placeholder text: "With over two decades of hands-on experience in industrial power transmission, Mr. Vishwanath built RB International from a single-room shop in Bhosari into a multi-division industrial supply company serving manufacturers across India and abroad. His deep technical knowledge and direct relationships with global brand principals have been the foundation of the company's growth."

Card 2:
- Placeholder image
- Name: Mr. Omprakash D. Rokhade
- Designation: Co-Founder & Director
- Placeholder text: "Mr. Omprakash has been instrumental in expanding RB International's operational scale and client base. His focus on supply chain efficiency, inventory management, and customer relationships has enabled the company to maintain industry-leading stock availability and delivery timelines that larger competitors struggle to match."

**Vision:**
"To be India's most trusted single-source partner for power transmission, automation, and industrial adhesive solutions -- known for stock depth, technical expertise, and speed of service."

**Mission:**
"To simplify industrial procurement for manufacturers of all sizes by offering the widest product range, genuine branded products, expert application support, and the fastest response times in the industry."

**Values Section:**
4 value cards: Stock Availability ("If it exists, we have it or we'll get it"), Technical Expertise ("We don't just sell parts -- we solve application problems"), Speed ("2-hour response. Same-day dispatch on stocked items."), Trust ("20+ years. 500+ clients. Zero compromises on genuineness.")

---

**CATEGORY LANDING PAGES ( /power-transmission, /automation, /adhesives )**

Each follows the same template but uses its own accent color.

**Hero:** Full-width banner with category-specific industrial stock image. Heading + 2-line description. CTA: "Explore Products" | "Get a Quote"

**Sub-category Grid:**
Large cards for each sub-category under this pillar. Each card: stock product image, title, 1-line SEO description, "View Range" button, "Quick Enquiry" button.

For example, on /power-transmission:
- V-Belts card: "Classical, narrow, cogged, banded, and variable speed V-belts from Fenner, Gates, Optibelt, PIX and more."
- Timing Belts card: "Rubber, PU, coated, and carbon fiber timing belts. Gates Polychain, Eagle PD, Megadyne, and custom profiles."
- ...and so on for each sub-category.

**Brands for this Category:**
Logo strip showing only the brands relevant to this specific pillar.

**PDF Brochure Download Section:**
Heading: "Download Product Brochures"
Grid of brochure cards, each showing: brand logo, brochure title, "Download PDF" button. Placeholder for 10-12 brochure slots. These will be populated as brochures are digitized.

**Category Testimonial:**
1-2 testimonials specific to this category (placeholder text).

**Category Customer Logo Strip:**
Placeholder client logos specific to this category.

**CTA Section:**
"Need help selecting the right [Category Name] product? Talk to our technical team." Inline form + WhatsApp button.

**SUB-CATEGORY PAGES ( /power-transmission/v-belts, etc. )**

**Hero:** Sub-category title + 3-4 line SEO-rich description of the product type, its applications, and industries where it is used. Stock product image.

**Product Types Listed (NOT individual SKUs):**
A clean grid or accordion showing the product types within this sub-category. Each type has: name, 2-line description, representative stock image.

For example, /power-transmission/v-belts shows:
- Classical V-Belts: "Standard A, B, C, D, E section V-belts for general industrial drives. Available in all standard and non-standard sizes."
- Narrow V-Belts: "SPA, SPB, SPC, SPZ profile belts for high-power, compact drive systems."
- Micro V-Belts: "Multi-rib PJ, PK, PL, PM series for light-duty and precision applications."
- Variable Speed Belts: "Wide-angle belts for variable speed drive systems in textile, packaging, and food processing machinery."
- Link/Nutlink V-Belts: "Adjustable length V-belts. Cut to size on site. No downtime waiting for specific belt lengths."
- Cogged V-Belts: "Improved flexibility and heat dissipation for high-speed and high-load applications."

Each type card has a "Request Quote for [Type Name]" button that opens the enquiry modal with the product type pre-filled.

**Brands Available:**
"Available from: Fenner, Gates, Optibelt, PIX, Continental ContiTech, Carlisle, Hutchinson, Goodyear"

**Application Note:**
A short paragraph (SEO content): "V-Belts are used in [list common applications]. RB International stocks the full range of V-belt profiles and sizes from India's most trusted brands. Whether you need a single replacement belt or a bulk order for a new production line, we deliver across India with same-day dispatch on stocked items."

**Related Brochures:**
1-2 relevant PDF brochure download links.

**Enquiry Section:**
Full inline enquiry form with pre-filled category and sub-category. + WhatsApp button.

**PAGE: BRANDS WE STOCK ( /brands )**

**Hero:** "50+ Global & Indian Brands. One Trusted Source."

**Brand Grid:**
All brands organized by category. Each brand card: logo (placeholder), brand name, 1-line description of what RB International supplies from them, which category they fall under, and a "View Products" link to the relevant category page.

**Authorized Dealer Highlight Section:**
Heading: "Authorized Dealers & Distributors"
Larger cards for Gates, Fenner, PIX, Pidilite showing the certificate image placeholder + "Authorized Dealer since [Year]" text.

**Own Brand Section:**
Heading: "RB International -- Our Own Range"
Placeholder section: "We are developing our own line of automation components and select belting products. Details coming soon." With a "Register Interest" CTA.

---

**PAGE: INDUSTRIES WE SERVE ( /industries )**

**Hero:** "From Assembly Lines to Packaging Lines -- We Keep India's Factories Moving."

**Industry Cards (8-9 cards, full width, alternating layout):**
Each industry card: stock image, industry name, 3-4 lines describing what RB International supplies to that industry, list of relevant product categories, CTA "Get Solutions for [Industry]".

Industries:
1. Automotive & Auto Components
2. Food & Beverage Processing
3. Packaging & Printing
4. Pharmaceuticals
5. Textiles & Garments
6. Cement, Mining & Heavy Industries
7. Logistics, Warehousing & Material Handling
8. OEM & Machine Building
9. General Manufacturing & Job Shops

**PAGE: CONTACT ( /contact )**

**Two-column layout:**

Left: Full enquiry form. Fields: Name, Company Name, Designation, Phone, Email, Category dropdown (Power Transmission / Automation / Adhesives / Other), Requirement (textarea), How did you hear about us? (dropdown: Google, IndiaMART, JustDial, Referral, Trade Fair, Other). Submit button.

Right: Company details.
- Address: Shop No 5, Kamath Complex, Telco Road, Landewadi, Bhosari Industrial Estate, Pune 411026
- Phone: +91 87881 95839 (Sales), +91 98909 61752 (Director)
- Email: response@rbibelting.in
- Working Hours: Monday to Saturday, 9:30 AM to 6:30 PM IST
- Google Map embed: https://maps.app.goo.gl/v51wGZH4o8cT1e3D8

Social links and review badges below the map.

---

**PAGE: FRANCHISE ( /franchise )**

This is a "Coming Soon" style page but with enough content to capture interest.

**Hero:** "Partner With Us. Build Your Own RB International Branch."

**Content:**
"RB International Belting is expanding. With 20+ years of brand trust, 50+ established supplier relationships, and a proven business model, we are now opening the RB International franchise opportunity for entrepreneurs and existing industrial traders across India."

**What We Offer (4 cards):**
- Established Brand & Reputation
- Direct Brand Principal Relationships (Fenner, Gates, PIX, Pidilite, etc.)
- Inventory & Supply Chain Support
- Marketing, Branding & Digital Presence Support

**Ideal Partner Profile:**
"We are looking for partners in: Nashik, Aurangabad, Kolhapur, Nagpur, Ahmedabad, Surat, Rajkot, Chennai, Coimbatore, Bangalore, Indore, and other major manufacturing hubs."

**Interest Form:**
Name, City, Current Business (if any), Phone, Email, Message. Submit button.

---

### GLOBAL COMPONENTS

**Navigation Bar:**
Logo (left). Menu items: Home, About, Power Transmission (dropdown with sub-categories), Automation (dropdown), Adhesives (dropdown), Brands, Industries, Contact, Franchise.
Smart search icon on the right that expands into the search overlay described earlier.
Mobile: hamburger menu with accordion sub-menus.

**Sticky WhatsApp Button:**
Bottom-right, always visible. Green circle, WhatsApp icon. Links to: https://wa.me/918788195839?text=Hi%2C%20I%20am%20reaching%20out%20from%20your%20website.%20I%20am%20looking%20for%3A%20

On product/sub-category pages, auto-append the category name to the pre-filled message.

**Floating Quick Enquiry Button:**
Bottom-left. Brand red pill button. "Can't find what you need?" Opens the smart enquiry modal described earlier.

**Scroll-to-Top Button:**
Appears after scrolling past the first viewport.

---

### SEO REQUIREMENTS

Every page must have:
- Unique meta title (format: "[Page Topic] | RB International Belting & Automation, Pune")
- Unique meta description (150-160 chars, include primary keyword and city)
- H1 tag used once, H2 for section headings, H3 for sub-sections
- Alt text on every image (descriptive, keyword-rich)
- Structured data: Organization schema on homepage, LocalBusiness schema on contact page, Product schema on product pages
- Internal linking: every sub-category page links to its parent category and sibling sub-categories
- Breadcrumbs on all pages below homepage
- Clean URL slugs (no IDs, no query params)
- Sitemap.xml and robots.txt generated properly (do NOT block any crawlers)

Primary keyword targets (for reference, not to be stuffed):
- "timing belt supplier Pune"
- "conveyor belt manufacturer India"
- "V belt dealer Bhosari"
- "industrial adhesives Pune"
- "Loctite dealer Pune"
- "Fenner belts authorized dealer"
- "Gates belts India"
- "ball screw supplier India"
- "linear guideway manufacturer Pune"
- "industrial belting franchise India"

---

### COPYWRITING GUIDELINES

- No corporate buzzwords. No "synergy", "paradigm", "leverage", "holistic solutions".
- Write like a knowledgeable human, not a brochure. Short sentences. Direct statements.
- Every product description must answer: What is it? What is it used for? Why buy from RB International?
- Do not use em dashes anywhere. Use commas, periods, or colons instead.
- No AI-sounding phrases like "In today's fast-paced world" or "We pride ourselves on" or "Our cutting-edge solutions."
- Stats and numbers wherever possible. "20+ years" is better than "extensive experience."
- Every CTA should be action-oriented: "Get a Quote", "Talk to Our Team", "Send Your Requirement", "Download Brochure".

---

### RESPONSIVE BEHAVIOR

- Mobile: single column, hamburger menu, cards stack vertically, search icon prominent, WhatsApp button always visible, Quick Enquiry button always visible but smaller
- Tablet: 2-column grids, full navigation visible
- Desktop: full width sections, 3-4 column grids, hover effects active
- All forms must work perfectly on mobile. No tiny tap targets. Input fields at least 48px height.

---

### PLACEHOLDER AND STOCK IMAGE NOTES

- Use industrial stock photography throughout. Factory floors, CNC machines, conveyor systems, warehouse shelves with products, workers in industrial settings, close-ups of belts/motors/adhesive products.
- For brand logos: use placeholder squares with brand name text until real logos are added.
- For authorized dealer certificates: use placeholder image frames with text "Authorized Dealer Certificate -- [Brand Name]".
- For founder photos: use professional headshot placeholder silhouettes.
- For client logos: use generic placeholder icons with "[Client Name]" text.
- For PDF brochures: use placeholder cards with "Brochure -- [Brand Name]" text and a disabled download button.

---

### WHAT THIS SITE MUST FEEL LIKE

When a manufacturing purchase manager in Chennai or Ahmedabad lands on this site from a Google search for "timing belt supplier India", they should immediately feel:
- This is a serious, established business. Not a one-man shop.
- They stock real brands. They are authorized dealers.
- I can find what I need quickly or just tell them what I need.
- I can WhatsApp them right now and get a response.
- They supply PAN India and internationally.
- I can trust them with a bulk order.

The website must punch above the company's physical size. It should feel like a company 3x its actual scale. That is the job of the design, the content, and the user experience working together.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://prompt-pivot-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e2a08366-85af-4365-a3bd-98821d650175).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
