import { title, subtitle } from "@/components/primitives";
import { CiLock } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { PiLightbulbLight } from "react-icons/pi";

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
      <section className="flex flex-col items-center justify-start gap-8 py-8 md:py-10">
        <div className="flex flex-col items-center max-w-xl text-center gap-8 sm:flex-row sm:justify-center sm:space-x-8 ">
          <div className="flex flex-col items-center min-h-[700px] justify-start min-w-[300px] gap-12">
            <CiClock1 className="w-32 h-32" />
            <span className={title({ color: "blue" })}>
              Real Time Intelligence. On Demand.&nbsp;
            </span>
            <span className={subtitle()}>
              Access a global network of expert intelligence analysts anytime,
              anywhere. DeltaBridge connects businesses with highly skilled
              analysts who provide real-time, data-driven intelligence across
              industries. Our on-demand marketplace ensures you get actionable
              insights, fast.
            </span>
          </div>
          <div className="flex flex-col items-center min-h-[700px] justify-start gap-6">
            <CiLock className="w-32 h-32" />
            <span className={title({ color: "blue" })}>
              Secure Transactions, Trusted Experts.&nbsp;
            </span>
            <span className={subtitle()}>
              Every transaction is handled securely, ensuring confidentiality
              and trust. With our secure payment system and verified analysts,
              businesses can confidently access high-quality intelligence while
              protecting sensitive information.
            </span>
          </div>
          <div className="flex flex-col items-center min-h-[700px] min-w-[300px] justify-start gap-6">
            <PiLightbulbLight className="w-32 h-32 mb-[1px]" />
            <span className={title({ color: "blue" })}>
              Tailored Insights for Your Business. &nbsp;
            </span>
            <span className={subtitle()}>
              Customized intelligence solutions designed to fit your exact
              requirements. Unlike generic reports, DeltaBridge analysts compete
              for your requests, offering tailored intelligence solutions based
              on your requirements.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
