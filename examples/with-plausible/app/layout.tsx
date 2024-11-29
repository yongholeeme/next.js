import PlausibleProvider from "next-plausible";
import Header from "@/_components/Header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain={process.env.NEXT_PUBLIC_DOMAIN}
          trackLocalhost
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}