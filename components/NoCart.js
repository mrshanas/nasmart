import Link from "next/link";

const NoCart = () => {
  return (
    <div>
      No Items in the Cart
      <Link href="/shop">
        <a>Continue Shopping</a>
      </Link>
    </div>
  );
};

export default NoCart;
