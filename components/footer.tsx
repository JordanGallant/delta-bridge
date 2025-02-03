import React from "react";
import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import FooterLogo from "./footerLogo";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 sm:px-8">
        <span className={`${subtitle()} sm:text-left text-center mt-8`}>
          info@deltabridge.io
          <div className="flex mt-5 justify-center space-x-6 md:space-x-1 md:justify-start">
            <Link href="https://www.linkedin.com/company/deltabridge-io">
              <FaLinkedin className="mr-8 w-6 h-6" />
            </Link>
            <Link href="https://x.com/deltabridge_io">
              <FaSquareXTwitter className="mr-6 w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/deltabridge.io/">
              <FaInstagramSquare className="mr-6 w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/deltabridge.io">
              <FaFacebookSquare className="w-6 h-6" />
            </Link>
          </div>
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
