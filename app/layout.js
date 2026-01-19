import { Cherry_Cream_Soda } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const cherryCreamSoda = Cherry_Cream_Soda({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "AI Recipe Planner",
  description: "Generate custom meals with AI based on your ingredients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cherryCreamSoda.className} antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
