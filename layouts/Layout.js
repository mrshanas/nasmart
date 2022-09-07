import { Footer, Navbar } from "@/components/index";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
