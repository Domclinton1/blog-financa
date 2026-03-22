import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "FinançasPro - Finanças Pessoais, Renda Extra e Investimentos",
    template: "%s | FinançasPro",
  },
  description:
    "Aprenda sobre finanças pessoais, investimentos, renda extra e como ganhar dinheiro na internet. Dicas para economizar, investir e melhorar sua vida financeira.",
  keywords: [
    "finanças pessoais",
    "renda extra",
    "investimentos",
    "como economizar dinheiro",
    "ganhar dinheiro online",
    "educação financeira",
    "cartão de crédito",
    "tesouro direto",
  ],
  authors: [{ name: "FinançasPro" }],
  creator: "FinançasPro",
  metadataBase: new URL("https://www.financaspro.com"),
  openGraph: {
    title: "FinançasPro",
    description: "Blog sobre finanças pessoais, investimentos e renda extra.",
    url: "https://www.financaspro.com",
    siteName: "FinançasPro",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
