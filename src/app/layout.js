import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { ReduxProvider } from "@/store"; 
export const metadata = { 
  title: "internet store project",
  description: "FakeStore demo with App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        {}
        <ReduxProvider>
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
        </ReduxProvider>
      </body>
    </html>
  );
}
