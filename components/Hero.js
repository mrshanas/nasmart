import Lottie from "lottie-react";
import Link from "next/link";
import { Button } from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ecommerceAnim from "@/assets/animations/ecommerce.json";

const Hero = () => {
  return (
    <section className="w-full my-3">
      <div className="flex w-[98%] md:w-[90%] mx-auto flex-col-reverse md:flex-row text-center md:text-left">
        <div className="flex flex-col gap-y-4 flex-1 self-center">
          <h1 className="text-4xl font-bold">Welcome to Nasmart</h1>
          <p className="text-xl">
            We are here to serve you, Home of quality electronic devices,
            laptops, gaming consoles and other cool stuffs you can think of
          </p>
          <div>
            <Link href="/shop">
              <Button
                leftIcon={<AiOutlineShoppingCart />}
                variant="outline"
                fullWidth={false}
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <Lottie
            animationData={ecommerceAnim}
            loop
            className="w-[60%] md:w-[70%] justify-start"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
