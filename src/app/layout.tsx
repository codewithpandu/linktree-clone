import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Pandu Setia Darmawan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen w-full bg-[#f4f7fb] relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,29,61,0.16) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
