import { midText } from "./primitives";
const getContentForPage = (page: string) => {
  switch (page) {
    case "general":
      return (
        <>
          <span className={`${midText()}`}>
            What is a two-sided marketplace?
          </span>
          <p>
            A two-sided market exists when both buyers and sellers meet to
            exchange a product or service, creating both bids (requests) to buy
            and offers to sell.
          </p>
          <br />
          <span className={`${midText()}`}>
            What is Open-Source Intelligence (OSINT)?
          </span>
          <p>
            Open-source intelligence (OSINT) is the practice of collecting and
            analyzing publicly available information to generate actionable
            intelligence.
            <br />
            <br /> With the increasingly interconnectedness of our society, and
            the vast volumes of publicly available data and information, OSINT
            has become a critical function within the broader craft of
            intelligence. Both public- and private-sectors have recognized the
            value of OSINT as the &quot;INT of First Resort&quot;.
          </p>
          <br />
          <span className={`${midText()}`}>
            How can my business benefit from intelligence?
          </span>
          <p>
            Intelligence can help businesses by:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1. Identifying risks and threats before they
            impact operations.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2. Monitoring competitors and market trends
            to gain a strategic edge.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;3. Conducting due diligence before making
            high-stakes business decisions.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;4. Enhancing information and cyber security
            by detecting vulnerabilities and potential breaches.
          </p>
          <br />
          <span className={`${midText()}`}>
            What industries benefit from intelligence services?
          </span>
          <p>
            Industries such as finance, tech, energy, manufacturing, government,
            and defense rely on intelligence to make informed, risk-based
            decisions. Whether you&apos;re a startup, investment firm, or
            multinational company, intelligence can help you anticipate risks
            and seize opportunities.
          </p>
          <br />
          <span className={`${midText()}`}>
            What is an intelligence customer?
          </span>
          <p>
            What is an intelligence customer? An intelligence customer (or
            consumer) is the party for whom intelligence products are produced
            and disseminated to. In traditional, nation-state level
            intelligence, the customer would be government officials and
            policymakers. In the private sector, the customer would typically be
            business executives, managers, and other decision makers.
          </p>
        </>
      );
    case "about":
      return (
        <>
          <span className={`${midText()}`}>What is DeltaBridge?</span>
          <p>
            DeltaBridge is a two-sided marketplace that connects businesses with
            expert intelligence analysts. Customers post intelligence requests
            (otherwise referred to &quot;Requests for Information&quot; or
            &quotRFIs&quot), analysts submit proposals, and transactions are
            completed securely through the platform.
          </p>
          <br />
          <span className={`${midText()}`}>How does DeltaBridge work?</span>
          <p>
            1. Post a request – Customers describe their intelligence
            requirements.
            <br />
            2. Receive proposals – Analysts bid on the request, offering custom
            insights.
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
          <br />
          <span className={`${midText()}`}>
            What are DeltaBridge&apos;s fees?
          </span>
          <p>
            DeltaBridge has one mission: to foster a democratized, modern
            intelligence community by making intelligence accessible to all. As
            such, we understand the importance of creating a fair and equal fee
            structure. DeltaBridge charges a flat 10% platform fee on all
            transactions. This fee is used to maintain the DeltaBridge platform
            and further develop it to best accommodate our users.
            <br />
            <br /> The analyst receives 100% of the total listing price, with
            the platform fee charged to the customer on top of the listing
            price. <br /> <br />
            Example: For a request listed at $500, the customer would pay $550.
            The analyst would receive the full listing price of $500, while
            DeltaBridge would receive $50.
          </p>
          <br />
          <span className={`${midText()}`}>
            Who are the analysts on DeltaBridge?
          </span>
          <p>
            DeltaBridge Expert Analysts are vetted intelligence professionals,
            including:
            <br />
            1. OSINT specialists. 2. Geopolitical risk analysts 3. Cyber
            security experts. 4. Competitive intelligence professionals. 5. Due
            diligence and financial intelligence consultants.
          </p>
          <br />
          <span className={`${midText()}`}>
            How does DeltaBridge ensure confidentiality?
          </span>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; 1. All transactions take place within the
            DeltaBridge platform.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; 2. Analysts sigh Non-Disclosure Agreements
            (NDAs) before accessing the platform and engaging on requests.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; 3. DeltaBridge enforces strict
            confidentiality policies to protect sensitive data. <br />
            <br />
            You can find our policies, Terms of Service, and Code of Conduct
            here.
          </p>
          <br />
          <span className={`${midText()}`}>
            What types of intelligence requests can I make?
          </span>
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
          <br />
          <span className={`${midText()}`}>
            How do I know which analyst to choose?
          </span>
          <p>
            Customers can review analyst profiles, past work, customer reviews,
            and ratings before selecting the best expert. DeltaBridge ensures
            analysts have verified credentials and experience.
          </p>
        </>
      );
    case "getting-started":
      return (
        <>
          <span className={`${midText()}`}>
            How do I sign up for DeltaBridge?
          </span>
          <p>
            Head over to this page to choose whether you want to sign up as a
            customer or an analyst.
            <br />
            <br /> Alternatively, customers can fill out this form or contact
            sales to get started. In order for us to ensure you are getting the
            most out of DeltaBridge, our team will sit down with you and discuss
            your intelligence requirements and expectations. We&apos;ll explain
            in detail how to use the platform efficiently, ensuring that you are
            well equipped to become a part of a modern intelligence community.
            <br />
            <br />
            Analysts must apply to the DeltaBridge Expert Analyst Affiliate
            Program and be approved before joining.
          </p>
          <br />
          <span className={`${midText()}`}>
            What happens after I submit a request?
          </span>
          <p>
            Your request becomes visible to vetted analysts, who submit
            proposals based on your requirements. You can then review offers,
            select the best expert, and proceed with the project.
          </p>
          <br />
          <span className={`${midText()}`}>
            Can analysts work on multiple projects at once?
          </span>
          <p>
            Yes, analysts can work on multiple intelligence projects
            simultaneously, provided they meet deadlines and maintain quality
            standards.
          </p>
        </>
      );
    case "for-analyst":
      return (
        <>
          <span className={`${midText()}`}>
            How do I become an analyst on DeltaBridge?
          </span>
          <p>
            DeltaBridge welcomes intelligence professionals from all walks of
            life to join the community and offer their services on the platform.
            In order to maintain high quality standards, we have an Expert
            Analyst Affiliate Program. In order to join DeltaBridge as an Expert
            Analyst, you have to go through the application process. You can
            find the application form here. During this process, we conduct a
            thorough review of your application, your online profiles, and any
            past work you provide us in your application.
            <br />
            <br /> After you&apos;ve successfully submitted your application,
            you&apos;ll hear from us within 1-3 business days. We may require
            additional information from you, but this will be communicated with
            you via email if necessary.
            <br />
            <br /> Should you be accepted into the DeltaBridge Expert Analyst
            Affiliate Program, you will hear from us in no more than 7 business
            days.
          </p>
          <br />
          <span className={`${midText()}`}>How do analysts get paid?</span>
          <p>
            Payments are processed through DeltaBridge&apos;s integrated payment
            processor.
            <br /> Analysts receive 100% of the total listing price. <br />
            Payouts can take 3-7 business days, depending on banking
            institutions.
          </p>
          <br />
          <span className={`${midText()}`}>
            Can analysts see all customer requests?
          </span>
          <p>
            Only vetted and approved analysts can view and bid on customer
            requests.
          </p>
          <br />
          <span className={`${midText()}`}>
            What if a customer disputes my work?
          </span>
          <p>
            Analysts should attempt to resolve disputes professionally. If no
            agreement is reached, DeltaBridge will mediate the issue. If an
            analyst consistently receives disputes, they may be removed from the
            platform pending review.{" "}
          </p>
        </>
      );
    case "Payment":
      return (
        <>
          <span className={`${midText()}`}>
            Can I post intelligence reports I complete on my portfolio?
          </span>
          <p>
            Payments are made securely through DeltaBridge&apos;s integrated
            payment processor.
            <br /> DeltaBridge holds payments until the customer confirms work
            is completed.
            <br />
            Analysts receive 90% of the total listing price, with a 10% service
            fee deducted.
          </p>
          <br />
          <span className={`${midText()}`}>
            Can I pay outside of DeltaBridge?
          </span>

          <p>
            No. All transactions must go through DeltaBridge&apos;s secure
            payment system. <br />
            Off-platform payments violate our Terms of Service and result in
            account suspension or banning.
          </p>
          <br />
          <span className={`${midText()}`}>Are refunds available?</span>

          <p>
            Refunds are not guaranteed and are assessed case by case. If an
            issue arises, customers and analysts should first attempt to resolve
            it. If no agreement is reached, DeltaBridge may act as a mediator.
          </p>
          <br />
          <span className={`${midText()}`}>Is DeltaBridge safe to use?</span>

          <p>
            Yes! DeltaBridge uses encryption, secure transactions, and verified
            analyst credentials to ensure a trusted environment for intelligence
            work.
          </p>
        </>
      );
    case "polocies":
      return (
        <>
          <span className={`${midText()}`}>
            Can I post intelligence reports I complete on my portfolio?
          </span>

          <p>
            No. All customer intelligence work is strictly confidential. <br />
            You cannot share, republish, or use completed reports outside of
            DeltaBridge.
          </p>
          <br />
          <span className={`${midText()}`}>
            Does DeltaBridge comply with data protection laws?
          </span>

          <p>
            Yes! We follow the General Data Protection Regulation (GDPR),
            Protection of Personal Information Act (POPIA),
            <br /> and other global data privacy regulations. All user data is
            protected, encrypted, and never sold to third parties.
          </p>
          <br />
          <span className={`${midText()}`}>
            What happens if I break the Terms of Service?
          </span>

          <p>
            Violating DeltaBridge&apos;s policies (e.g., off-platform
            transactions, confidentiality breaches) may result in warnings,
            <br />
            account suspension, or permanent bans.
          </p>
          <br />
          <p>We encourage you to read our Terms of Service.</p>
        </>
      );
    case "contact":
      return (
        <>
          <span className={`${midText()}`}>
            How do I contact DeltaBridge support?
          </span>
          <p>For general inquiries, email us at info@deltabridge.io.</p>
          <br />
          <p>
            For support-related inquiries, email us at support@deltabridge.io.
          </p>
          <br />
          <p>Alternatively, you can use this form to get in touch with us.</p>
          <br />
          <span className={`${midText()}`}>
            Where can I learn more about intelligence?
          </span>
          <p>
            We regularly publish industry insights, intelligence best practices,
            and expert analyses on our blog and forum.{" "}
          </p>
        </>
      );
    default:
      return "Select a Topic to see more information.";
  }
};

export default getContentForPage;
