
import Gstyles from "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "QueenB mentoring matching app", 
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={Gstyles.navBar}>

        </div>
        <div className={Gstyles.container}>
          {children}
        </div>
        
      </body>
    </html>
  );
}
