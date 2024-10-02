import { Toaster } from "sonner";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ConvexClientProvider } from "@/components/provider/convex-provier";
import { EdgeStoreProvider } from "../lib/edgestore";

import { ModalProvider } from "@/components/provider/modal-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description:
    "The all-in-one workspace for your notes, tasks, wikis, and databases.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
