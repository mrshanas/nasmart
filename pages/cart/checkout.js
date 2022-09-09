import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkout } from "@/store/shop/shopThunk";
import { emptyCart } from "@/store/shop/shopSlice";

export default function Checkout() {
  const [details, setDetails] = useState({ email: "", name: "", phone_no: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const { cart, isLoading, computedCart } = useSelector((state) => state);

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      checkout({
        items: cart,
        total_price: String(computedCart.totalPrice),
        ...details,
      })
    );
    dispatch(emptyCart());
    router.push("/shop");
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <section className="w-full my-3">
        <header>
          <h1 className="text-center font-bold text-2xl">Checkout</h1>
        </header>
        <article className="w-[90%] mx-auto">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-3 items-center"
          >
            <input
              type="email"
              placeholder="Email"
              className="border w-[60%] px-3"
              name="email"
              value={details.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Name"
              className="border w-[60%] px-3"
              name="name"
              value={details.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="border w-[60%] px-3"
              name="phone_no"
              value={details.phone_no}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col gap-y-2">
              {isLoading && "loading..."}
              <h3>Your Order</h3>
              {computedCart.newCart.map(({ product, quantity, subTotal }) => (
                <div key={product.id} className="flex justify-between gap-x-4">
                  <h6>
                    {product.name} ({quantity})
                  </h6>
                  <small>{subTotal}</small>
                </div>
              ))}
              <button type="submit" className="border">
                Place Order
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}
