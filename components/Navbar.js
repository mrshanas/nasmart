import Link from "next/link";
// import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  // const { pathname } = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="w-full sticky top-0 bg-white z-50">
      <div className="flex w-[95%] md:w-[90%] mx-auto p-3">
        <div className="flex-[1]">
          <Link href="/">
            <h1 className="text-xl  opacity-[0.8]">Nasmart</h1>
          </Link>
        </div>
        <div className="flex-[2] hidden md:block">
          {/* Nav Links */}
          <ul className="flex justify-around items-center w-full">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-[1] justify-evenly items-center">
          <Link href="/shop">
            <a title="Search Products">
              <AiOutlineSearch />
            </a>
          </Link>
          <Link href="/wishlist">
            <a title="Wishlist">
              <AiOutlineHeart />
            </a>
          </Link>
          <Link href="/cart">
            <a title="Cart" className="flex items-center gap-y-2">
              <AiOutlineShoppingCart />
              <small className="opacity-80">
                {cart.length > 0 ? cart.length : ""}
              </small>
            </a>
          </Link>
          {/* <MdOutlineDarkMode /> */}
          <AiOutlineMenu className="block md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
