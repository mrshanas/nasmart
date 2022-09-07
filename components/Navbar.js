import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="w-full sticky top-0">
      <div className="flex w-[95%] md:w-[90%] mx-auto p-3">
        <div className="flex-[1]">
          <h1 className="text-xl  opacity-[0.8]">Nasmart</h1>
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
            <a>
              <AiOutlineSearch />
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <AiOutlineHeart />
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <AiOutlineShoppingCart />
            </a>
          </Link>
          <MdOutlineDarkMode />
          <AiOutlineMenu className="block md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
