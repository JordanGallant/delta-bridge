"use client";

import React from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";

import { title } from "@/components/primitives";

const FormComponent: React.FC = () => {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <>
      <section className="flex flex-col items-center justify-start gap-8 py-8 md:py-10">
        <div className="flex flex-col items-center max-w-xl text-center gap-8 sm:flex-row sm:justify-center sm:space-x-8 " />
        <span className={title({ color: "blue" })}>Contact Us&nbsp;</span>
        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <Input
            isRequired
            label="First Name:"
            labelPlacement="outside"
            name="First Name"
            placeholder="Enter your first name"
            type="text"
          />

          <Input
            isRequired
            label="Last Name:"
            labelPlacement="outside"
            name="Last Name"
            placeholder="Enter your last name"
            type="text"
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email:"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Textarea
            isRequired
            errorMessage="Please enter a message"
            label="Message:"
            labelPlacement="outside"
            name="message"
            placeholder="Enter your message"
            type="text"
          />
          <div className="flex gap-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
          {action && (
            <div className="text-small text-default-500">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </section>
    </>
  );
};
export default FormComponent;
