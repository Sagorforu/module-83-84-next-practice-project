import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "500"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Next Hero",
  description: "Next Hero",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto mx-auto container`}>{children}</body>
    </html>
  );
};
export default RootLayout;
