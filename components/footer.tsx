import React from "react";
import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import FooterLogo from "./footerLogo";

const Footer: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 sm:px-8">
        <span className={`${subtitle()} sm:text-left text-center`}>
          info@deltabridge.io
        </span>

        <div className="flex justify-center">
          <FooterLogo />
        </div>

        <div className="flex flex-col items-center sm:items-center md:items-start md:text-left sm:text-center md:pl-[200px]">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
