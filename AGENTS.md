<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history.
<!-- LOVABLE:END -->

## Architecture decisions
- Keep all product taxonomy and reusable marketing content in `src/lib/site-data.ts` so navigation, search, routes, and SEO remain consistent.
- Deliver launch enquiries through encoded email and WhatsApp links only because persistent lead storage is intentionally deferred.
- Render category and sub-category pages from shared templates while retaining distinct route files for crawlable URLs and metadata.
- Keep detailed product photography and specifications inside opt-in product showcases so only approved sample ranges gain richer interactions.
