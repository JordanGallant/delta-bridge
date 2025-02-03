import { midText, subtitle } from "./primitives";
import useToggleVisibility from "./useToggleVisibility";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi";

const GetContentForPage = (page: string) => {
  const { visibleState, toggleProps } = useToggleVisibility();

  switch (page) {
    case "general":
      return (
        <>
          <span
            className={`${midText()} flex justify-between`}
            {...toggleProps("question1")}
          >
            What is a two-sided marketplace?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              A two-sided market exists when both buyers and sellers meet to
              exchange a product or service, creating both bids (requests) to
              buy and offers to sell.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span
            className={`${midText()} flex justify-between`}
            {...toggleProps("question2")}
          >
            What is Open-Source Intelligence (OSINT)?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              Open-source intelligence (OSINT) is the practice of collecting and
              analyzing publicly available information to generate actionable
              intelligence.
              <br />
              <br /> With the increasingly interconnectedness of our society,
              and the vast volumes of publicly available data and information,
              OSINT has become a critical function within the broader craft of
              intelligence. Both public- and private-sectors have recognized the
              value of OSINT as the &quot;INT of First Resort&quot;.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span
            className={`${midText()} flex justify-between`}
            {...toggleProps("question3")}
          >
            How can my business benefit from intelligence?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              Intelligence can help businesses by:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;1. Identifying risks and threats before
              they impact operations.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;2. Monitoring competitors and market
              trends to gain a strategic edge.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;3. Conducting due diligence before making
              high-stakes business decisions.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;4. Enhancing information and cyber
              security by detecting vulnerabilities and potential breaches.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question4")}>
            What industries benefit from intelligence services?
            {visibleState["question4"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question4"] && (
            <p>
              Industries such as finance, tech, energy, manufacturing,
              government, and defense rely on intelligence to make informed,
              risk-based decisions. Whether you&apos;re a startup, investment
              firm, or multinational company, intelligence can help you
              anticipate risks and seize opportunities.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question5")}>
            What is an intelligence customer?
            {visibleState["question5"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question5"] && (
            <p>
              What is an intelligence customer? An intelligence customer (or
              consumer) is the party for whom intelligence products are produced
              and disseminated to. In traditional, nation-state level
              intelligence, the customer would be government officials and
              policymakers. In the private sector, the customer would typically
              be business executives, managers, and other decision makers.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "about":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            What is DeltaBridge?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              DeltaBridge is a two-sided marketplace that connects businesses
              with expert intelligence analysts. Customers post intelligence
              requests (otherwise referred to &quot;Requests for
              Information&quot; or &quotRFIs&quot), analysts submit proposals,
              and transactions are completed securely through the platform.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            How does DeltaBridge work?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              1. Post a request – Customers describe their intelligence
              requirements.
              <br />
              2. Receive proposals – Analysts bid on the request, offering
              custom insights.
              <br />
              3. Choose the best expert – Customers select an analyst based on
              expertise, ratings, proposed methodology, and deliverables.
              <br />
              4. Secure transaction – Payment is processed through DeltaBridge,
              ensuring security for both parties.
              <br />
              5. Receive intelligence – The analyst delivers a tailored report
              based on the customer&apos;s needs.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question3")}>
            What are DeltaBridge&apos;s fees?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              DeltaBridge has one mission: to foster a democratized, modern
              intelligence community by making intelligence accessible to all.
              As such, we understand the importance of creating a fair and equal
              fee structure. DeltaBridge charges a flat 10% platform fee on all
              transactions. This fee is used to maintain the DeltaBridge
              platform and further develop it to best accommodate our users.
              <br />
              <br /> The analyst receives 100% of the total listing price, with
              the platform fee charged to the customer on top of the listing
              price. <br /> <br />
              Example: For a request listed at $500, the customer would pay
              $550. The analyst would receive the full listing price of $500,
              while DeltaBridge would receive $50.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question4")}>
            Who are the analysts on DeltaBridge?
            {visibleState["question4"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question4"] && (
            <p>
              DeltaBridge Expert Analysts are vetted intelligence professionals,
              including:
              <br />
              1. OSINT specialists. 2. Geopolitical risk analysts 3. Cyber
              security experts. 4. Competitive intelligence professionals. 5.
              Due diligence and financial intelligence consultants.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question5")}>
            How does DeltaBridge ensure confidentiality?
            {visibleState["question5"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question5"] && (
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; 1. All transactions take place within the
              DeltaBridge platform.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; 2. Analysts sigh Non-Disclosure
              Agreements (NDAs) before accessing the platform and engaging on
              requests.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; 3. DeltaBridge enforces strict
              confidentiality policies to protect sensitive data. <br />
              <br />
              You can find our policies, Terms of Service, and Code of Conduct
              here.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question6")}>
            What types of intelligence requests can I make?
            {visibleState["question6"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question6"] && (
            <p>
              You can request intelligence services related to:
              <br />
              <strong>Geopolitical risk analysis</strong> (monitoring conflicts,
              sanctions, and economic shifts).
              <br /> <strong>Competitive intelligence</strong> (tracking
              competitors, market trends, and industry shifts).
              <br />
              <strong>Cyber threat analysis</strong> (detecting vulnerabilities,
              fraud, and security risks).
              <br /> <strong>Due diligence</strong> (verifying companies,
              individuals, and investment opportunities).
              <br /> <strong>Custom intelligence projects</strong> tailored to
              your business needs.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question7")}>
            How do I know which analyst to choose?
            {visibleState["question7"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question7"] && (
            <p>
              Customers can review analyst profiles, past work, customer
              reviews, and ratings before selecting the best expert. DeltaBridge
              ensures analysts have verified credentials and experience.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "getting-started":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            How do I sign up for DeltaBridge?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              Head over to this page to choose whether you want to sign up as a
              customer or an analyst.
              <br />
              <br /> Alternatively, customers can fill out this form or contact
              sales to get started. In order for us to ensure you are getting
              the most out of DeltaBridge, our team will sit down with you and
              discuss your intelligence requirements and expectations.
              We&apos;ll explain in detail how to use the platform efficiently,
              ensuring that you are well equipped to become a part of a modern
              intelligence community.
              <br />
              <br />
              Analysts must apply to the DeltaBridge Expert Analyst Affiliate
              Program and be approved before joining.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            What happens after I submit a request?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              Your request becomes visible to vetted analysts, who submit
              proposals based on your requirements. You can then review offers,
              select the best expert, and proceed with the project.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question3")}>
            Can analysts work on multiple projects at once?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              Yes, analysts can work on multiple intelligence projects
              simultaneously, provided they meet deadlines and maintain quality
              standards.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "for-analyst":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            How do I become an analyst on DeltaBridge?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              DeltaBridge welcomes intelligence professionals from all walks of
              life to join the community and offer their services on the
              platform. In order to maintain high quality standards, we have an
              Expert Analyst Affiliate Program. In order to join DeltaBridge as
              an Expert Analyst, you have to go through the application process.
              You can find the application form here. During this process, we
              conduct a thorough review of your application, your online
              profiles, and any past work you provide us in your application.
              <br />
              <br /> After you&apos;ve successfully submitted your application,
              you&apos;ll hear from us within 1-3 business days. We may require
              additional information from you, but this will be communicated
              with you via email if necessary.
              <br />
              <br /> Should you be accepted into the DeltaBridge Expert Analyst
              Affiliate Program, you will hear from us in no more than 7
              business days.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            How do analysts get paid?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              Payments are processed through DeltaBridge&apos;s integrated
              payment processor.
              <br /> Analysts receive 100% of the total listing price. <br />
              Payouts can take 3-7 business days, depending on banking
              institutions.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question3")}>
            Can analysts see all customer requests?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              Only vetted and approved analysts can view and bid on customer
              requests.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question4")}>
            What if a customer disputes my work?
            {visibleState["question4"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question4"] && (
            <p>
              Analysts should attempt to resolve disputes professionally. If no
              agreement is reached, DeltaBridge will mediate the issue. If an
              analyst consistently receives disputes, they may be removed from
              the platform pending review.{" "}
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "Payment":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            Can I post intelligence reports I complete on my portfolio?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              Payments are made securely through DeltaBridge&apos;s integrated
              payment processor.
              <br /> DeltaBridge holds payments until the customer confirms work
              is completed.
              <br />
              Analysts receive 90% of the total listing price, with a 10%
              service fee deducted.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            Can I pay outside of DeltaBridge?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              No. All transactions must go through DeltaBridge&apos;s secure
              payment system. <br />
              Off-platform payments violate our Terms of Service and result in
              account suspension or banning.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question3")}>
            Are refunds available?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              Refunds are not guaranteed and are assessed case by case. If an
              issue arises, customers and analysts should first attempt to
              resolve it. If no agreement is reached, DeltaBridge may act as a
              mediator.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question4")}>
            Is DeltaBridge safe to use?
            {visibleState["question4"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question4"] && (
            <p>
              Yes! DeltaBridge uses encryption, secure transactions, and
              verified analyst credentials to ensure a trusted environment for
              intelligence work.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "polocies":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            Can I post intelligence reports I complete on my portfolio?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              No. All customer intelligence work is strictly confidential.{" "}
              <br />
              You cannot share, republish, or use completed reports outside of
              DeltaBridge.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            Does DeltaBridge comply with data protection laws?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              Yes! We follow the General Data Protection Regulation (GDPR),
              Protection of Personal Information Act (POPIA),
              <br /> and other global data privacy regulations. All user data is
              protected, encrypted, and never sold to third parties.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question3")}>
            What happens if I break the Terms of Service?
            {visibleState["question3"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question3"] && (
            <p>
              Violating DeltaBridge&apos;s policies (e.g., off-platform
              transactions, confidentiality breaches) may result in warnings,
              <br />
              account suspension, or permanent bans.
              <br />
              <br />
              We encourage you to read our Terms of Service.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    case "contact":
      return (
        <>
          <span className={`${midText()} flex justify-between`} {...toggleProps("question1")}>
            How do I contact DeltaBridge support?
            {visibleState["question1"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question1"] && (
            <p>
              For general inquiries, email us at info@deltabridge.io.
              <br />
              <br />
              For support-related inquiries, email us at support@deltabridge.io.
              <br />
              <br />
              Alternatively, you can use this form to get in touch with us.
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
          <br />
          <span className={`${midText()} flex justify-between`} {...toggleProps("question2")}>
            Where can I learn more about intelligence?
            {visibleState["question2"] ? (
              <HiOutlineMinus className="w-8 h-8 text-blue-500" />
            ) : (
              <AiOutlinePlus className="w-8 h-8 text-blue-500" />
            )}
          </span>
          {visibleState["question2"] && (
            <p>
              We regularly publish industry insights, intelligence best
              practices, and expert analyses on our blog and forum.{" "}
            </p>
          )}
          <p className="border-b-2 border-blue-500 mt-9" />
        </>
      );
    default:
      return "Select a Topic to see more information.";
  }
};

export default GetContentForPage;
