import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { addCart, getProduct, getCartItem } from "@/store/shop/shopSlice";

export default function Product() {
  const item = useSelector((state) => state?.cartItem);

  const [amount, setAmount] = useState(item?.quantity || 0);

  const dispatch = useDispatch();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    dispatch(getProduct(id));
    dispatch(getCartItem(id));
  }, []);

  const {
    image,
    id: productId,
    name,
    description,
    quantity,
    price,
  } = useSelector((state) => state.product);

  const decrement = () => {
    if (amount <= 0) return;

    setAmount((prev) => prev - 1);
  };
  const increment = () => {
    if (amount >= quantity) return;
    setAmount((prev) => prev + 1);
  };

  const addToCart = () => {
    dispatch(addCart({ ["product"]: productId, quantity: amount }));
    setAmount(item.quantity);
  };

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <main>
        <section className="w-[90%] mx-auto my-4">
          <h1 className="text-center font-bold text-3xl my-6">{name}</h1>
          <div className="flex flex-col gap-x-4 gap-y-6 md:flex-row">
            <div className="relative w-full min-h-[22rem] flex-[1]">
              <Image src={image} alt={name} layout="fill" />
            </div>
            <div className="flex flex-col flex-[1] gap-y-6">
              <small>Tsh {price}</small>
              <h3 className="font-bold text-2xl">{name}</h3>
              <pre>{description}</pre>
              <div className="flex flex-col md:flex-row justify-between my-5 gap-x-5 gap-y-6 items-center">
                <div className="basis-[1] md:basis-3/4 w-full flex justify-between border items-center p-1">
                  <small>Quantity</small>
                  <div>
                    <Button
                      variant="default"
                      style={{ border: "none" }}
                      onClick={decrement}
                    >
                      &lt;
                    </Button>
                    {amount}
                    <Button
                      variant="default"
                      style={{ border: "none" }}
                      onClick={increment}
                    >
                      &gt;
                    </Button>
                  </div>
                </div>
                <div className="basis-1 md:basis-1/4">
                  <Button
                    rightIcon={<AiOutlineShoppingCart />}
                    variant="outline"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
