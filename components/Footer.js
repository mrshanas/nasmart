import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { FiMail, FiTwitter } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-richBlack w-full flex flex-col text-white pt-3">
      <div className=" w-[95%] md:w-[80%] mx-auto gap-y-4 flex flex-col md:flex-row justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl">Nasmart</h3>
          <p className="opacity-[0.8]">We are here to serve you</p>
          {/* Social icons */}
          <div className="flex justify-start gap-4">
            <a
              href="https://instagram.com"
              className="border-white border-[1px] rounded-full p-1"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/mrshanas"
              className="border-white border-[1px] rounded-full p-1"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
            <a
              href="https://web.whatsapp.com"
              className="border-white border-[1px] rounded-full p-1"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold">Information</h2>
          <div className="flex flex-col gap-3">
            <Link href="/about">
              <a>About Nasmart</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold">Contact Us</h2>
          <div className="flex items-center gap-x-2">
            <GoLocation />
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              Buza, Dar es Salaam
            </a>
          </div>
          <div className="flex items-center gap-x-2">
            <BsTelephoneInbound />{" "}
            <a href="tel:+255788277549" target="_blank" rel="noreferrer">
              0788 277 549
            </a>
          </div>
          <div className="flex items-center gap-x-2">
            <FiMail />
            <a
              href="mailto:nassibshaban345@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              nassibshaban345@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[80%] mx-auto flex justify-between border-t-[1px] mt-8 p-1">
        <p>Copyright &copy; {date}</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
