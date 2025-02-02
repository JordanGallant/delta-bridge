import { title, subtitle } from "@/components/primitives";
import Icons from "@/components/icons";
import Footer from "@/components/footer";
import FormComponent from "@/components/form";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <Icons />
      <Faq />
      <FormComponent />
      <Footer />
    </>
  );
}
