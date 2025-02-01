import { title, subtitle } from "@/components/primitives";
import Icons from "@/components/icons";
import Footer from "@/components/footer";
import FormComponent from "@/components/form";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>Connecting&nbsp;</span>
          <br />
          <span className={title()}>
            Businesses with Trusted Intelligence Experts.
          </span>
        </div>
      </section>
      <Icons />
      <FormComponent />
      <Footer />
    </>
  );
}
