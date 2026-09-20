import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Grettel — Este cuento sí es verdad",
  description:
    "Pretzels artesanales 100% delivery en Arequipa. Clásico, Cheese y Cinnamon, con salsas de Oso, Jabalí y Búho.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${anton.variable} antialiased`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
