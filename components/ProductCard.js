import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { addCart } from "@/store/shop/shopSlice";

const ProductCard = ({ name, price, pic, id }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart({ product: id, quantity: 1 }));
  };

  return (
    <div className="flex-[1] w-[90%] self-center mx-auto md:w-full max-w-full text-center gap-y-2">
      <div className="w-full relative min-h-[12rem]">
        <Image src={pic} layout="fill" alt={name} style={{ borderRadius: 5 }} />
      </div>
      <div className="flex w-full flex-col gap-y-3">
        <h4>{name}</h4>
        <small>Tsh {price}</small>
        <div className="flex justify-between w-[50%]">
          <Link href={`/products/${id}`}>
            <AiOutlineEye className="cursor-pointer" />
          </Link>
          <AiOutlineHeart />
          <AiOutlineShoppingCart
            onClick={addToCart}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
