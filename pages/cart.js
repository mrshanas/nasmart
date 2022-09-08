import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";

import { getCart, addCart } from "@/store/shop/shopSlice";
import { CartAdjuster } from "@/components/index";

export default function Cart() {
  const { cart, computedCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const decrement = (id) => {
    dispatch(addCart({ product: id, quantity: -1 }));
  };
  const increment = (id) => {
    dispatch(addCart({ product: id, quantity: 1 }));
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <section className="w-full my-6">
        <header>
          <h1 className="font-bold text-3xl text-center">Shopping Cart</h1>
        </header>
        <article className="w-[99%] md:w-[90%] flex gap-x-6 flex-col md:flex-row mx-auto justify-between">
          <div className="flex-[1]">
            <table className="w-full text-center">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              {computedCart.newCart.map(({ product, subTotal, quantity }) => (
                <tr key={product.id} className="border-b-[1px] my-10">
                  <td>
                    <Button style={{ border: "none" }} variant="default">
                      X
                    </Button>
                  </td>
                  <td>
                    <div className="relative max-w-[50rem] min-h-[5rem]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                      />
                    </div>
                  </td>
                  <td>
                    <h6>{product.name}</h6>
                  </td>
                  <td>
                    <small>{product.price}</small>
                  </td>
                  <td>
                    <CartAdjuster
                      amount={quantity}
                      increment={increment(product.id)}
                      decrement={decrement(product.id)}
                    />
                  </td>
                  <td>
                    <small>{subTotal}</small>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-2xl">Cart Totals</h3>
              <div>
                <p>Subtotal</p> <small>{computedCart.totalPrice}</small>
              </div>
              <div>
                <p>
                  Delivery <small>Free</small>
                </p>
              </div>
              <div>
                <p>Total</p> <small>{computedCart.totalPrice}</small>
              </div>
              <Button variant="outline">Proceed to Checkout</Button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
