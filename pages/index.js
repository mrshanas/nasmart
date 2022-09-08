import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";

import { Hero, ProductCard } from "@/components/index";
import Xbox from "@/assets/images/xbox-controller.jpg";
import Cpu from "@/assets/images/gaming-cpu.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
      <section>
        <div className="flex w-[90%] mx-auto justify-between">
          <h5>Popular Products</h5>
          <Link href="/shop">
            <Button variant="outline">See All</Button>
          </Link>
        </div>
        <div className="flex gap-x-3 w-[90%] mx-auto my-5">
          <ProductCard
            name="Wireless Xbox Controller"
            price="35000"
            pic={Xbox}
            desc="Microsoft Wireless Xbox Controller with solar charger and connects via Bluetooth"
          />
          <ProductCard
            name="Gaming Cpu"
            price="1000000"
            pic={Cpu}
            desc="Microsoft Wireless Xbox Controller with solar charger and connects via Bluetooth"
          />
        </div>
      </section>
    </div>
  );
}
