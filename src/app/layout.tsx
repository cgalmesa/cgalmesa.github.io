import { globalContent } from "@/content/global";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: globalContent.browserTab.title,
  description: "A Web 1.0 astrophysics portfolio.",
  icons: {
    icon: globalContent.browserTab.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
