import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EventSpark",
  description:
    "Your ultimate event management solution. From planning to execution, simplify every step with intuitive tools. Create, promote, and engage attendees effortlessly. Make your event unforgettable with EventSpark.",
  icons: "/eventSpark.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
