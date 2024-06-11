import { HTMLInputTypeAttribute } from "react";
import { SocialLinks } from "./social-links";

export const GetTheGuide = () => {
  return (
    <div className="flex-1">
      <h3 className="text-xl lg:text-2xl font-extrabold text-black mb-5">
        Aller ! 😊 <br />
        Obtenez votre guide gratuitement 📕
      </h3>

      <form>
        <div className="w-full flex flex-col gap-2 mb-3">
          <label
            className="text-base md:text-lg text-gray-600"
            htmlFor="username"
          >
            Comment voulez-vous qu&apos;on vous appelle ?
          </label>
          <Input
            id={"username"}
            name="username"
            placeholder="Entez une valeur"
            type={"text"}
          />
        </div>

        <div className="w-full flex flex-col gap-2 mb-8">
          <label className="text-base md:text-lg text-gray-600" htmlFor="email">
            Quelle est votre adresse e-mail ?
          </label>
          <Input
            id={"email"}
            name="email"
            placeholder="Entez votre address e-mail"
            type={"email"}
          />
        </div>

        <button
          type={"submit"}
          className="bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg rounded-lg w-full lg:w-auto px-8 py-2 text-white text-base lg:text-lg font-medium"
        >
          Obtenir le guide
        </button>
      </form>

      <div className="hidden lg:block">
        <div className="h-8"></div>
        <SocialLinks />
      </div>
    </div>
  );
};

const Input = ({
  placeholder,
  id,
  type,
  name,
}: {
  placeholder: string;
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
}) => {
  return (
    <input
      required
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50"
    />
  );
};
