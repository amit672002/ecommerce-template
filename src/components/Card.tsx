import cartIcon from "../assets/shopping-cart.png";

type Props = {
  imgUrl: string;
  name: string;
  price: number;
};

const Card = ({ imgUrl, name, price }: Props) => {
  return (
    <div className="w-[380px] relative cursor-pointer">
      <img src={imgUrl} className="rounded-lg" />
      <p className="absolute top-4 left-6 text-2xl text-gray-700">{name}</p>
      <p className="absolute top-12 left-6 text-xl text-gray-700">{price} $</p>
      <div className="absolute bottom-3 w-full flex justify-center">
        <button className="flex px-4 py-2 rounded-3xl items-center gap-1 bg-white hover:bg-gray-100 hover:scale-105">
          <p>Add to cart</p> <img src={cartIcon} className="w-5 h-5 mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;
