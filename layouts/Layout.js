import { Footer, Navbar } from "@/components/index";

function Layout({ children }) {
  return (
    <>
      <main className="min-h-[70vh]">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
