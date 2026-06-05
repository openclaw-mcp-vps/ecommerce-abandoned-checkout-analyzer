import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheckoutLens – Discover Why Customers Abandon Checkout",
  description: "Record checkout session replays and identify exact friction points causing cart abandonment with heatmaps. Built for e-commerce store owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6c13407f-00bd-498b-b973-a9d1ebe77216"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
