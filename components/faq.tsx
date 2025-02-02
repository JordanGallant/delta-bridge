"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

import getContentForPage from "./getContentForPage";

import { title, subtitle } from "@/components/primitives";

const Faq: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("music");

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="mb-4">
          <span className={`${title({ color: "blue" })}`}>
            Frequently Asked Questions&nbsp;
          </span>
        </div>
        <Breadcrumbs
          hideSeparator
          classNames={{
            list: "gap-2",
          }}
          itemClasses={{
            item: [
              "px-2 py-0.5 border-small border-default-400 rounded-small",
              "data-[current=true]:border-default-800 data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
              "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
            ],
          }}
          onAction={(key) => setCurrentPage(key)}
        >
          <BreadcrumbItem key="general" isCurrent={currentPage === "general"}>
            General
          </BreadcrumbItem>
          <BreadcrumbItem key="about" isCurrent={currentPage === "about"}>
            About
          </BreadcrumbItem>
          <BreadcrumbItem
            key="getting-started"
            isCurrent={currentPage === "getting-started"}
          >
            Getting Started
          </BreadcrumbItem>
          <BreadcrumbItem
            key="for-analyst"
            isCurrent={currentPage === "for-analyst"}
          >
            For Analysts
          </BreadcrumbItem>
          <BreadcrumbItem key="Payment" isCurrent={currentPage === "Payment"}>
            Payment and Security
          </BreadcrumbItem>
          <BreadcrumbItem key="polocies" isCurrent={currentPage === "polocies"}>
            Policies and Compliance
          </BreadcrumbItem>
          <BreadcrumbItem key="contact" isCurrent={currentPage === "contact"}>
            Contact and Support
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="text-left sm: w-full md:w-[70%] mt-6">
          <span>{getContentForPage(currentPage as string)}</span>
        </div>
      </section>
    </>
  );
};
export default Faq;
