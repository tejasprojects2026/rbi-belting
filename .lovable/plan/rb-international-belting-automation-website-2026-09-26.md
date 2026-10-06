# RB International Belting & Automation Website

## Goal
Build a fast, multi-page industrial website that establishes trust, helps buyers find product families quickly, and directs every enquiry to either email or WhatsApp. The first version will not store submissions.

## Information architecture
- Create the shared site shell with desktop navigation, mobile accordion navigation, category dropdowns, smart search, breadcrumbs, footer, preloader, scroll-to-top, WhatsApp, and quick enquiry controls.
- Build dedicated routes for Home, About, Brands, Industries, Contact, Franchise, and all three category landing pages.
- Build SEO-visible sub-category pages for all 17 supplied slugs, using a reusable data-driven template that supports product-type lists without creating empty third-level pages.
- Add parent and sibling links to every sub-category page.

## Visual direction
- Use the supplied deep crimson, steel blue, amber, white, off-white, and charcoal palette as semantic tokens, with Inter throughout and no dark mode.
- Create a serious industrial editorial style: crisp grids, restrained borders, high-contrast typography, industrial photography, and low-opacity category-specific patterns.
- Use the uploaded RB logo in the header, footer, and once-per-session opening animation. Implementation will use the real file once uploaded.
- Generate and optimize a cohesive set of industrial images for category heroes and key sections; use named placeholders for brand logos, certificates, clients, brochures, and founder portraits as requested.
- Keep motion purposeful and reduced-motion safe: opening reveal, count-up stats, logo strips, restrained section entrances, and subtle hero depth.

## Smart enquiry experience
- Build one shared enquiry model used by the floating prompt, page CTAs, product-type quote buttons, search fallback, contact form, and franchise form.
- Let visitors choose one of two final actions:
  - **Email requirement:** open a pre-addressed email draft to `response@rbibelting.in` containing their entered details.
  - **Send on WhatsApp:** open a pre-filled message to `+91 87881 95839` containing the current page context and entered requirement.
- Add searchable aliases for product families and examples such as timing belts, PU timing belts, timing pulleys, Gates codes, and Loctite products.
- Make forms mobile-friendly, validated in the browser, and explicit that no data is stored in this version.

## Page content
- Implement the supplied homepage sections, company story, founders, vision, mission, values, category grids, brand directory, industries, contact details, and franchise interest content.
- Use all supplied taxonomy, applications, brands, addresses, phone numbers, links, and placeholder labels.
- Keep the copy direct, short, and technical. Avoid em dashes, buzzwords, invented claims, and unmarked placeholder material.
- Label approximate timeline milestones, testimonials, client logos, certificates, social links, brochures, and missing Google review details as placeholders where appropriate.

## SEO and discoverability
- Give every route a unique title, 150–160 character description, canonical URL on `https://rbibelting.com`, Open Graph metadata, Twitter card, one H1, and descriptive image text.
- Add Organization schema on Home, LocalBusiness schema on Contact, Product schema on sub-category pages, and BreadcrumbList schema below Home.
- Generate a complete sitemap for all public routes and keep robots.txt open to crawlers with the production sitemap URL.
- Structure headings, body copy, internal links, and page-specific descriptions around the supplied keyword themes without keyword stuffing.

## Performance and responsive quality
- Keep route files code-split through the existing file router, lazy-load non-critical images, reserve image dimensions, and avoid heavy animation dependencies.
- Prioritize the homepage hero image and defer below-the-fold media to protect LCP.
- Verify phone, tablet, and desktop layouts, navigation, overlays, forms, search, email links, WhatsApp links, keyboard access, and reduced-motion behavior.
- Check the final preview for missing images, overflow, overlap, console errors, and metadata output.

## Technical structure
- Centralize taxonomy, brand, industry, navigation, search alias, and metadata content in typed data modules so all pages stay consistent.
- Build focused reusable UI for category cards, product grids, enquiry forms, patterns, logo strips, testimonials, and schema generation.
- Record the data-driven content and enquiry-delivery architecture in the project’s technical decision file.
- Replace the starter placeholder and generic head metadata completely.

## Deferred by design
- No database, CRM, transactional email service, ecommerce, pricing, downloadable brochure files, or real customer/testimonial/certificate assets in this version.
- Email submission uses the visitor’s email application until a real mail endpoint is configured.
