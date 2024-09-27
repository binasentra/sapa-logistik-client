import type { Metadata } from "next";
import { createTheme, MantineProvider } from "@mantine/core";

import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import LayoutMain from "@/components/partials/main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sistem Aplikasi Pialang Asuransi",
  description: "SAPA - PT Binasentra Purna",
  icons: {
    icon: "/images/app-logo.png",
  },
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <LayoutMain>{children}</LayoutMain>
        </MantineProvider>
      </body>
    </html>
  );
}
