import Image from "next/image";

const ProductCard = ({ name, price, desc, pic }) => {
  return (
    <div className="flex-[1] max-w-[80%] gap-y-2">
      <div className="max-w-[50%]">
        <Image src={pic} layout="responsive" alt={name} />
      </div>
      <div className="flex w-full flex-col gap-y-3">
        <h4>{name}</h4>
        <small>Tsh {price}</small>
        <p className="max-w-[60%]">{desc}</p>
      </div>
    </div>
  );
};

export default ProductCard;
