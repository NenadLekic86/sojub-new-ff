import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar"

export const metadata = {
  title: "Memoland Mayhem",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
