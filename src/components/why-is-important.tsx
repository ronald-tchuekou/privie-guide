import Link from "next/link";
import { SocialLinks } from "./social-links";

type ItemType = {
  id: string;
  title: string;
  description: string;
};

const generateItems = () => {
  const items: ItemType[] = [];

  for (let i = 1; i <= 5; i++) {
    items.push({
      id: `importance-${i}`,
      title: `Importance ${i}`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    });
  }

  return items;
};

export const WhyIsImportant = () => {
  const items = generateItems();

  return (
    <div className="flex-1">
      <h3 className="text-xl lg:text-2xl font-extrabold text-black mb-5">
        Pourquoi est-ce important ? 🤔
      </h3>
      <div>
        {items.map((item, index) => (
          <ImportantItem
            key={item.id}
            item={item}
            isTheLast={items.length - 1 === index}
          />
        ))}
      </div>

      <Link href="#get-it" className="lg:hidden">
        <button
          type={"submit"}
          className="bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg rounded-lg w-full lg:w-auto px-8 py-2 text-white text-base lg:text-lg font-medium"
        >
          Obtenir le guide
        </button>
      </Link>

      <div className="lg:hidden">
        <div className="h-8"></div>
        <SocialLinks />
      </div>
    </div>
  );
};

const ImportantItem = ({
  isTheLast,
  item,
}: {
  isTheLast: boolean;
  item: ItemType;
}) => {
  return (
    <div className="flex gap-3 relative z-0">
      {!isTheLast && (
        <div className="absolute top-0 bottom-0 left-[22px] w-1 bg-indigo-300 -z-10"></div>
      )}
      <div className="size-12 rounded-full flex justify-center items-center bg-indigo-500/20 backdrop-blur-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <div className="flex-1 mb-5">
        <h4 className="text-lg font-bold text-indigo-600 mt-1 mb-2">
          {item.title}
        </h4>
        <p className="text-base lg:text-lg text-gray-700">{item.description}</p>
      </div>
    </div>
  );
};
