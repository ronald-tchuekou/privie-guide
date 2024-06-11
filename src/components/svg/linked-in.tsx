import { SVGProps } from "react";

const LinkedInSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle
      cx={16}
      cy={16}
      r={16}
      fill="#007BB5"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <g fill="#FFF">
      <path d="M7 11h4v14H7zM20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z" />
      <circle cx={9} cy={8} r={2} />
    </g>
  </svg>
);

export default LinkedInSvg;
