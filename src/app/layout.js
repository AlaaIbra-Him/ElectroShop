import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "ElectroShop",
  description: "Next.js Store App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        {/* <div className="w-200 h-px bg-gray-600 self-center flex items-center justify-center align-middle"></div> */}
        <div className="flex justify-center ">
          <div className="w-fit h-px bg-gray-600"></div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
