# Output


## 2026-02-13 16:26 — content-strategist

Top Issues
- High: Selected project "Card-Present Gateway" shows timeframe "2026" (future-dated); verify/adjust to avoid credibility risk.
- High: "<250ms checkout decisioning" appears only in Impact Wins with no nearby attribution; either support it in experience/project copy or remove.
- Medium: Summary + highlights repeat "reliability/merchant" without concrete scope; tighten to emphasize payments platform and migration safety.
- Medium: Shopify (2022–2024) bullets read generic; add payments-specific nouns (refunds, operations) already present in project history.
- Low: Header tagline/meta line leans inspirational vs. proof; replace with value/scope to improve 6-second scan.

Exact Copy Rewrites (old -> new)
1) "Senior Software Engineer · Payments · Small Business Software" -> "Senior Software Engineer · Payments Platform · Merchant Reliability"
2) "Empowering the world one line of code at a time · Detroit Metropolitan Area" -> "Payments platform engineer focused on merchant trust · Detroit Metropolitan Area"
3) "Senior Software Engineer focused on payments platforms, reliability, and practical software that helps merchants and local businesses operate with confidence." -> "Senior payments platform engineer focused on payout reliability, migration safety, and merchant-facing systems for small businesses."
4) "Shopify payments platform reliability and migration execution at global scale." -> "Payments platform reliability and migration execution at global scale (Shopify)."
5) "End-to-end product builds across startup and enterprise environments." -> "End-to-end product builds across startup and enterprise settings."
6) "Operational focus: idempotency, observability, and incident readiness." -> "Operational focus on idempotency, observability, and incident readiness."
7) "Lead payouts and payments-platform capabilities used by global merchants." -> "Lead payouts and payments-platform capabilities for global merchants; drive reliability and incident response."
8) "Built and maintained platform services across Rails and React surfaces." -> "Built and maintained Rails services and React admin surfaces for payment operations."
9) "Supported payment-method migrations and operational improvements across core payment flows." -> "Shipped payment-method migrations and refund flow improvements across core payment paths."
10) "Focus: provider-agnostic EMV foundations for resilient card-present payment processing." -> "Focus: provider-agnostic EMV foundation enabling resilient card-present payments."

Suggested patch targets (variables/arrays in page.tsx)
- `experience` (Shopify bullets for 2024–present and 2022–2024 roles)
- `highlights`
- Summary paragraph text in the Summary block (static JSX)
- Header tagline and meta line (static JSX)
- `projectImpactNotes`
