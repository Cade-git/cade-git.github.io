export default function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  align = "center",
  tone = "light",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-ember-400" : "text-ember-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}
      >
        {heading}
      </h2>
      {intro && <p className={`mt-4 text-lg ${dark ? "text-navy-100" : "text-navy-700"}`}>{intro}</p>}
    </div>
  );
}
