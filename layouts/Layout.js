import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Footer, Navbar } from "@/components/index";
import { getProducts } from "@/store/shop/shopThunk";

function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
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
