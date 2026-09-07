/**
 * Marine-inspired "Veteran Owned" badge: scarlet ring, gold star, navy field.
 * Deliberately avoids the trademarked Eagle, Globe & Anchor.
 */
export default function VeteranBadge({
  size = 96,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Veteran Owned and Operated — USMC"
      className={className}
    >
      <defs>
        <path id="vb-top" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0" />
        <path id="vb-bottom" d="M 60,60 m 44,0 a 44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#0f1f3a" />
      <circle cx="60" cy="60" r="55" fill="none" stroke="#c8431f" strokeWidth="3" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="#d9b25a" strokeWidth="1.5" opacity="0.7" />
      {/* Chevron marks — nod to enlisted rank insignia */}
      <path d="M46 76 L60 84 L74 76" fill="none" stroke="#d9b25a" strokeWidth="3" strokeLinecap="round" />
      <path d="M49 84 L60 90 L71 84" fill="none" stroke="#d9b25a" strokeWidth="3" strokeLinecap="round" />
      {/* Star */}
      <path
        d="M60 32 l6.2 12.7 14 2 -10.1 9.9 2.4 13.9 -12.5 -6.6 -12.5 6.6 2.4 -13.9 -10.1 -9.9 14 -2z"
        fill="#d9b25a"
      />
      <text
        fill="#ffffff"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="2"
        fontFamily="Inter, system-ui, sans-serif"
      >
        <textPath href="#vb-top" startOffset="50%" textAnchor="middle">
          VETERAN OWNED
        </textPath>
      </text>
      <text
        fill="#ffffff"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="2"
        fontFamily="Inter, system-ui, sans-serif"
      >
        <textPath href="#vb-bottom" startOffset="50%" textAnchor="middle">
          USMC · EST 1989
        </textPath>
      </text>
    </svg>
  );
}
