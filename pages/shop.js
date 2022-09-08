import Head from "next/head";
import { useSelector } from "react-redux";

import { ProductCard } from "@/components/index";

export default function Shop() {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main>
        <header className="text-center">
          <h1 className="text-3xl font-extrabold">Shop</h1>
          {/* Filtering card */}
        </header>
        <section className="w-full my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-x-3 gap-y-4">
            {products.map(({ id, name, price, image }) => (
              <ProductCard
                key={id}
                name={name}
                pic={image}
                price={price}
                id={id}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
