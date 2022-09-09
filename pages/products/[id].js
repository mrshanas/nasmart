import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { addCart, getProduct, getCartItem } from "@/store/shop/shopSlice";
import { CartAdjuster } from "@/components/index";

export default function Product() {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    dispatch(getProduct(id));
    // if (cartItem) dispatch(getCartItem(id));
  }, [cart]);

  const [amount, setAmount] = useState(1);

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
                  <CartAdjuster
                    increment={increment}
                    decrement={decrement}
                    amount={amount}
                  />
                </div>
                <div className="basis-1 md:basis-1/4">
                  <button onClick={addToCart}>
                    Add to Cart
                    <AiOutlineShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
