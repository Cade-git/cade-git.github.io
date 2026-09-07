import {
  Snowflake,
  Flame,
  Package,
  RefreshCw,
  Wind,
  Gauge,
  Building2,
  Leaf,
  Wrench,
  Handshake,
  Clock,
  BadgeCheck,
  ShieldCheck,
  Phone,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

/** Maps serializable icon names from lib/content.ts to lucide components. */
const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  snowflake: Snowflake,
  flame: Flame,
  package: Package,
  refresh: RefreshCw,
  wind: Wind,
  gauge: Gauge,
  building: Building2,
  leaf: Leaf,
  wrench: Wrench,
  handshake: Handshake,
  clock: Clock,
  badge: BadgeCheck,
  shield: ShieldCheck,
  phone: Phone,
};

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" focusable="false" {...props} />;
}
