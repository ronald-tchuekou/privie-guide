import { SVGProps } from "react";

// Generate a random id with 8 characters
const generateId = () => {
  return Math.random().toString(36).substring(2, 8);
};

const InstagramSvg = (props: SVGProps<SVGSVGElement>) => {
  const id = generateId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 32 32"
      {...props}
    >
      <style>{".st1{fill:#fff}"}</style>
      <linearGradient
        id={id}
        x1={0}
        x2={1}
        y1={32}
        y2={32}
        gradientTransform="rotate(-60 -857.1 520.09) scale(32.0053)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#fec053",
          }}
        />
        <stop
          offset={0.327}
          style={{
            stopColor: "#f2203e",
          }}
        />
        <stop
          offset={0.648}
          style={{
            stopColor: "#b729a8",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#5342d6",
          }}
        />
      </linearGradient>
      <path
        d="M16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16S0 24.8 0 16 7.2 0 16 0z"
        style={{
          fill: `url(#${id})`,
        }}
      />
      <path
        d="M20.7 6h-9.5C8.3 6 6 8.4 6 11.4v9.2c0 2.9 2.3 5.3 5.3 5.4h9.5c2.9 0 5.3-2.4 5.3-5.4v-9.2C26 8.4 23.7 6 20.7 6zm3.5 14.5c0 2-1.6 3.7-3.7 3.7h-9.1c-2 0-3.7-1.7-3.6-3.7v-9c0-2 1.6-3.7 3.6-3.7h9.1c2 0 3.7 1.7 3.7 3.7v9z"
        className="st1"
      />
      <path
        d="M16 10.9c-2.8-.1-5.2 2.2-5.2 5-.1 2.8 2.2 5.2 5 5.2s5.2-2.2 5.2-5V16c.1-2.8-2.2-5.1-5-5.1zm0 8.4a3.4 3.4 0 0 1-3.4-3.2c0-1.8 1.4-3.3 3.2-3.4s3.3 1.4 3.4 3.2v.1c.1 1.8-1.4 3.3-3.2 3.3zM21.3 9.4c.6 0 1.1.5 1.1 1.2s-.5 1.2-1.1 1.2-1.1-.5-1.1-1.2.5-1.2 1.1-1.2z"
        className="st1"
      />
    </svg>
  );
};

export default InstagramSvg;
