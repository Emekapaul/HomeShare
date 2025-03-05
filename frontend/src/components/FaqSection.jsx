import FaqItem from "./Faq";
import { motion } from "framer-motion";
import arrowRightDark from "../assets/arrow-right.svg";

export default function FaqSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Ensures it only animates once
    >
      <div className="flex flex-col items-center justify-center gap-6 w-full my-20">
        <div className="w-[90%] text-[1.6rem] font-bold text-[#1E1A2FCC]">
          <h1 className="text-center">FAQ</h1>
        </div>
        <div className="w-[90%] flex items-center justify-center">
          <div className="w-full flex flex-wrap align-center justify-between">
            <FaqItem
              question="What is Homeshares?"
              answer="HOMESHARES is a marketplace that allows individuals to invest in real estate by purchasing fractional shares of a property. This enables people to own a stake in real estate with minimal capital while earning passive income from rental profits."
            />
            <FaqItem
              question="How does Homeshares work?"
              answer="Investors purchase fractional shares of a property.
            • The property can be rented out as a serviced apartment or long-term rental.
            • Revenue generated from rentals is distributed among shareholders, with 50-60% of profits allocated to investors.
            "
            />
            <FaqItem
              question="Who owns the property?"
              answer="Each property is co-owned by multiple investors based on the number of shares they hold. Homeshares ensures transparent ownership structures through legally binding agreements."
            />
            <FaqItem
              question="How much can I invest?"
              answer="The minimum investment varies depending on the property. Investors can buy as many shares as they want, up to the total available shares for a given property."
            />
            <FaqItem
              question="How do I earn from my investment?"
              answer="Investors receive returns through rental income. A portion of the revenue (50-60%) is distributed to shareholders based on the number of shares they own."
            />
            <FaqItem
              question="Can I sell my shares?"
              answer="Yes, Homeshares provides a resale marketplace where investors can sell their shares to interested buyers. The value of shares may fluctuate based on property appreciation and market conditions."
            />
            <FaqItem
              question="What happens if a property is sold?"
              answer="If the majority of shareholders agree to sell a property, proceeds from the sale will be distributed proportionally to all investors based on their ownership percentage."
            />
            <FaqItem
              question="Is my investment secured?"
              answer="Yes, investments are backed by physical real estate. Homeshares ensures due diligence, property management, and legal compliance to protect investors."
            />
            <FaqItem
              question="What types of properties are available?"
              answer="HOMESHARES offers a variety of properties, including residential apartments, vacation rentals, and serviced apartments in high-demand locations."
            />
            <FaqItem
              question="Can I use the property myself?"
              answer="If the property is operated as a short-term rental, shareholders may have the option to book stays based on availability and agreed terms."
            />
            <FaqItem
              question="How are rental profits distributed?"
              answer="Profits are distributed periodically (monthly or quarterly) to investors through the Homeshares platform, with transparent reporting on earnings."
            />
            <FaqItem
              question="What fees are involved?"
              answer="There may be management fees for property maintenance, legal documentation, and platform operations. These fees will be clearly outlined before investment."
            />
            <FaqItem
              question="Can I invest from anywhere?"
              answer="Yes, as long as you meet the legal requirements to invest in real estate within the jurisdiction of the property."
            />
            <FaqItem
              question=" How do I get started?"
              answer="Sign up on the Homeshares platform.
                  • Browse available properties.
                  • Choose an investment and purchase shares.
                  • Start earning from rental income."
            />
            <FaqItem
              question="How do I track my investment?"
              answer="HOMESHARES provides a dashboard where investors can monitor their earnings, property performance, and market trends in real-time."
            />
            <FaqItem
              question="What makes Homeshares different from traditional real estate investing?"
              answer=" • Lower entry cost compared to full property ownership.
            • Passive income without direct"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
