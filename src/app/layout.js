import "./globals.css"; 
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer";

export const metadata = { title: "Midterm Shop", description: "FakeStore demo with App Router" }; //  მონაცემები

export default function RootLayout({ children }) { // ძირითადი ლეიაუტის ფუნქცია
  return (
    <html lang="ka">
      <body>
        <nav>
          <div className="container">
            <NavBar />
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
