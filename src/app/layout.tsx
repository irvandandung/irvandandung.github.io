import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./contexts/I18nContext";

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhamad Irvan Dandung — Full-Stack Developer",
  description: "3+ years of experience building scalable infrastructure and creating fast, secure applications",
  metadataBase: new URL("https://irvandandung.github.io"),
  openGraph: {
    title: "Muhamad Irvan Dandung — Full-Stack Developer",
    description: "3+ years of experience building scalable infrastructure and creating fast, secure applications",
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.variable}>
      <head>
        <meta name="theme-color" content="#C778DD" />
      </head>
      <body className={`${firaCode.className}`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
