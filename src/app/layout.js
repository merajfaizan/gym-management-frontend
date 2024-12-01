import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "../redux/provider/ReduxProvider";
import AuthWrapper from "@/redux/provider/AuthWrapper";

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

export const metadata = {
  title: "Gymnasia",
  description: "a heaven for gym lovers",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
            <AuthWrapper>{children}</AuthWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
