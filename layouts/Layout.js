import { Footer, Navbar } from "@/components/index";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
