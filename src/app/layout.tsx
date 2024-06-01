import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Adivinhe Me",
  description: "Quizzes diários para você testar seus conhecimentos sobre diversos assuntos.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}>
        {children}
      </body>
    </html>
  );
}
