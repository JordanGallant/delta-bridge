import React from "react";
import { title, subtitle } from "@/components/primitives";

const ImageComponent: React.FC = () => {
  return (
    <>
      <section
        className="flex flex-col items-start justify-start gap-16 py-8 md:py-10 min-h-[500px] md:min-h-screen w-screen"
        style={{
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="inline-block max-w-xl text-start justify-center w-full h-ful ml-11 mt-8 ">
          <span className={title({ color: "blue" })}>Connecting&nbsp;</span>

          <br />
          <span className={`${title()} text-black`}>
            Businesses with Trusted Intelligence Experts.
          </span>
          <p className="mt-8 text-black">
            Access high-quality intelligence on demand through
            <br />
            a secure platform designed for seamless
            <br />
            collaboration.
          </p>
        </div>
      </section>
    </>
  );
};

export default ImageComponent;
