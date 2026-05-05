import type { Metadata } from "next";
import { siteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${siteUrl}/obrigado` },
  robots: { index: false, follow: false },
};

export default function ObrigadoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
