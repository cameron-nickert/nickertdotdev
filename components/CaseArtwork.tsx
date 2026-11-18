import "@/app/case-art.css";

const concepts: Record<string, { number: string; title: string; start: string; center: string; end: string; caption: string; theme: string }> = {
  "payment-methods-rollout-refund-api-ppp": { number: "01", title: "One way back.", start: "Request", center: "Refund API", end: "Provider", caption: "A unified path for refunds", theme: "refund" },
  "update-payments-api-orchestration-3p-gift-cards": { number: "02", title: "Many parts. One payment.", start: "Gift card", center: "Payment", end: "Card", caption: "Flexible payment orchestration", theme: "giftcard" },
  "ford-payment-library": { number: "03", title: "Build once. Go further.", start: "Web", center: "Payment library", end: "Apps", caption: "Shared capabilities across experiences", theme: "library" },
  "hold-for-review": { number: "04", title: "Make time to review.", start: "Risk rule", center: "Review", end: "Fulfillment", caption: "A merchant review connects payment decisions with fulfillment", theme: "review" },
  "mb-way-bizum": { number: "05", title: "Local ways to pay.", start: "Setup", center: "Eligibility", end: "Checkout", caption: "From merchant setup to an eligible local checkout option", theme: "local" }
};

export function hasCaseArtwork(slug: string) {
  return Object.hasOwn(concepts, slug);
}

export default function CaseArtwork({ slug }: { slug: string }) {
  const concept = concepts[slug];
  if (!concept) return null;
  return <div className={`case-art case-art-${concept.theme}`} aria-label={concept.caption} role="img">
    <span className="case-art-number" aria-hidden="true">{concept.number}</span>
    <span className="case-art-kicker" aria-hidden="true">A study in payments</span>
    <div className="case-art-flow" aria-hidden="true">
      <span className="case-node case-node-start"><i />{concept.start}</span>
      <span className="case-connector" />
      <span className="case-node case-node-core"><svg viewBox="0 0 64 64" fill="none"><rect x="8" y="13" width="48" height="38" rx="5" stroke="currentColor" strokeWidth="3" /><path d="M9 24h46M17 39h10m7 0h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>{concept.center}</span>
      <span className="case-connector" />
      <span className="case-node case-node-end"><i />{concept.end}</span>
    </div>
    <strong className="case-art-title" aria-hidden="true">{concept.title}</strong>
    <span className="case-art-caption" aria-hidden="true">{concept.caption}</span>
  </div>;
}
