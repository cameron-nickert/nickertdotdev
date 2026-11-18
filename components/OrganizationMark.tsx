import styles from "./OrganizationMark.module.css";

const marks: Record<string, string> = {
  shopify: "shopify",
  indeed: "indeed",
  ford: "ford",
  "ford motor company": "ford",
  "central michigan university": "central-michigan",
  "university of michigan": "michigan",
  "university of michigan-dearborn": "michigan"
};

export default function OrganizationMark({ organization, className }: { organization: string; className?: string }) {
  const key = organization.trim().toLowerCase().replace(/\s*[-–—]\s*/g, "-");
  const mark = Object.hasOwn(marks, key) ? marks[key] : null;

  if (!mark) return null;

  return (
    <span
      className={className ? `${styles.mark} ${className}` : styles.mark}
      data-organization-mark={mark}
      aria-hidden="true"
    />
  );
}
