import "./globals.css";
import { Fredoka, Inter } from "next/font/google";

const fredokaSans = Fredoka({
  variable: "--font-fredoka-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${fredokaSans.variable} ${interSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
