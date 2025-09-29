export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>NavBar</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
