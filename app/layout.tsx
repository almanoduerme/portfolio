import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cx } from "@/lib/utils";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(`${GeistSans.className} w-full sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto min-h-screen flex flex-col border-l-2 border-r-2 pt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28`)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
