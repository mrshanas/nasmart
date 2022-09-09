import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

import { Hero, ProductCard } from "@/components/index";

export default function Home() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />

      <section className="my-8">
        <div className="flex w-[90%] mx-auto justify-between">
          <h5>Popular Products</h5>
          <Link href="/shop">
            <button>See All</button>
          </Link>
        </div>
        <div className="flex gap-x-3 md:w-[90%] w-[95%] flex-col md:flex-row mx-auto my-5">
          {products.slice(4).map(({ name, id, price, image }) => (
            <ProductCard
              key={id}
              pic={image}
              name={name}
              price={price}
              id={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
