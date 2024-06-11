import Link from "next/link";
import React from "react";
import DiscordSvg from "./svg/discord";
import InstagramSvg from "./svg/intagram";
import LinkedInSvg from "./svg/linked-in";
import TwitterSvg from "./svg/twitter";

type SocialType = {
  id: string;
  icon: React.ReactNode;
  url: string;
  title: string;
};

export const SocialLinks = () => {
  const socials: SocialType[] = [
    {
      id: "instagram",
      icon: <InstagramSvg className="size-8" />,
      url: "#",
      title: "@privie-officiel",
    },
    {
      id: "discord",
      icon: <DiscordSvg className="size-8" />,
      url: "#",
      title: "@privie-officiel",
    },
    {
      id: "twitter",
      icon: <TwitterSvg className="size-8" />,
      url: "#",
      title: "@privie-officiel",
    },
    {
      id: "linkedin",
      icon: <LinkedInSvg className="size-8" />,
      url: "#",
      title: "@privie-officiel",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl lg:text-2xl font-extrabold text-black mb-5">
        Satisfait ? 🤩 <br />
        Alors suivez nous sur now réseaux sociaux 🚀 pour plus de nouveau tips
        🌟
      </h3>
      <ul className="w-full grid gird-cols-1 md:grid-cols-2 gap-3">
        {socials.map((social) => (
          <SocialItem key={social.id} social={social} />
        ))}
      </ul>
    </div>
  );
};

const SocialItem = ({ social }: { social: SocialType }) => {
  return (
    <li>
      <Link href={social.url} target="_blank">
        <button className="w-full flex items-center gap-3 border px-4 py-2 rounded-full hover:shadow-lg hover:border-indigo-500">
          <span className="size-8 flex-none block">{social.icon}</span>
          <span className="text-base font-medium md:text-lg text-gray-700">
            {social.title}
          </span>
        </button>
      </Link>
    </li>
  );
};
