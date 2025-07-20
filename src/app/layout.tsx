import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LucidQuant - Crafted for the Unconventional",
  description: "Early-stage, unconventional, and underexplored investment signals. Surface indicators and metrics that traditional platforms overlook.",
  keywords: ["stock research", "investment signals", "financial data", "market analysis"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
