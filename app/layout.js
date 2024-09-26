
import Gstyles from "./globals.css";
import NavBar from "./components/navBar";

export const metadata = {
  title: "QueenB mentoring matching app", 
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={Gstyles.navBar}>
          <NavBar />
        </div>
        <div >
          {children}
        </div>
      </body>
    </html>
  );
}
