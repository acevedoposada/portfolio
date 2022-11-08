import type { LinksFunction } from "@remix-run/node";
import Lottie from "react-lottie";

import animationData from "~/assets/lottie/working.json";

import styles from "~/styles/pages/works.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Works() {
  return (
    <div className="mx-auto min-h-screen w-full text-center md:w-1/2">
      <div className="w-full md:-mt-40">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height="100%"
          width="100%"
        />
      </div>
      <h1 className="-mt-10 text-3xl font-medium tracking-tighter text-cyan-900 md:-mt-24">
        Woking on this page
      </h1>
    </div>
  );
}
