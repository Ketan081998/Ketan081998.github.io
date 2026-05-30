import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ketan Khandagale | Data Analyst Portfolio",
  description:
    "Data enthusiast skilled in Python, SQL & Tableau. AWS Certified Cloud Practitioner. Master's graduate in Information Systems from Stevens Institute of Technology.",
  keywords: [
    "Ketan Khandagale",
    "Data Analyst",
    "Python",
    "SQL",
    "Tableau",
    "Portfolio",
    "Data Science",
  ],
  authors: [{ name: "Ketan Khandagale" }],
  openGraph: {
    title: "Ketan Khandagale | Data Analyst Portfolio",
    description:
      "Data enthusiast skilled in Python, SQL & Tableau. AWS Certified Cloud Practitioner.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
