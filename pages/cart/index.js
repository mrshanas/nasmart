import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCart, removeCartItem } from "@/store/shop/shopSlice";
import { NoCart } from "@/components/index";

export default function Cart() {
  const { cart, computedCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [cart]);

  // const decrement = (id) => {
  //   dispatch(addCart({ product: id, quantity: -1 }));
  // };
  // const increment = (id) => {
  //   dispatch(addCart({ product: id, quantity: 1 }));
  // };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <section className="w-full my-6">
        <header>
          <h1 className="font-bold text-3xl text-center">Shopping Cart</h1>
        </header>
        {!cart.length ? (
          <NoCart />
        ) : (
          <article className="w-[99%] md:w-[90%] flex gap-x-6 flex-col md:flex-row mx-auto justify-between">
            <div className="flex-[1]">
              <table className="w-full text-center">
                <thead>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </thead>
                <tbody>
                  {computedCart.newCart.map(
                    ({ product, subTotal, quantity }) => (
                      <tr key={product.id} className="border-b-[1px]">
                        <td>
                          <button
                            className="border-none"
                            onClick={() =>
                              dispatch(removeCartItem(product?.id))
                            }
                          >
                            X
                          </button>
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
                          {/* <CartAdjuster
                        amount={quantity}
                        increment={increment(product.id)}
                        decrement={decrement(product.id)}
                      /> */}
                          {quantity}
                        </td>
                        <td>
                          <small>{subTotal}</small>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
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
                <Link href="/cart/checkout">
                  <button className="border-none">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </article>
        )}
      </section>
    </>
  );
}
