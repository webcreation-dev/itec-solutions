"use client";
import PlumbingFaqItem from "../components/PlumbingFaqItem";
import { SmartLink } from "@/components/common";
import { PlumbingButtonArrow } from "@/svg";
import { useIsDarkRoute } from "@/hooks";
import { FaqItemDT } from "@/types";

const FAQ_DATA: FaqItemDT[] = [
   {
      id: "one",
      question: "Services do you offer?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
      show: true,
   },
   {
      id: "two",
      question: "Is there a mobile app available?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
   },
   {
      id: "three",
      question: "Are your technicians licensed and insured?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
   },
   {
      id: "four",
      question: "How quickly can I schedule a service?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
   },
   {
      id: "five",
      question: "Do you offer emergency services?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
   },
   {
      id: "six",
      question: "Warranty on your work?",
      answer:
         "Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.",
   },
];
const PlumbingServiceFaq = () => {
   const isDarkMode = useIsDarkRoute();
   // -------------------------------
   // Theme-based Styles
   // -------------------------------
   const faqStyles = {
      primaryText: isDarkMode ? "tp-text-common-white" : "tp-text-common-black-5",
   };

   return (
      <div className="tp-faq-area pb-100 pt-155">
         <div className="container-fluid container-1646">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-service-title-wrap mb-40">
                     <span className={`text-anim tp-section-pb-subtitle mb-15 d-inline-block tp-ff-inter fw-500 fs-18 ls-m-4 lh-160-per ${faqStyles.primaryText}`}>
                        {`{ Why Choose Us }`}
                     </span>

                     <h2 className={`text-anim tp-section-pb-title mb-50 ${faqStyles.primaryText} tp-ff-sora fs-48  fs-sm-40 fs-xs-35 ls-m-2 lh-120-per`}>
                        Comprehensive<br /> Handyman Solutions
                     </h2>

                     <div
                        className="tp_fade_anim"
                        data-delay=".5"
                        data-fade-from="bottom"
                        data-ease="bounce"
                     >
                        <SmartLink
                           href="/contact"
                           className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white"
                        >
                           <span className="td-text d-inline-block mr-5">
                              Explore Now
                           </span>{" "}
                           <span className="tp-arrow-angle tp-arrow-angle-pb">
                              <PlumbingButtonArrow />
                           </span>
                        </SmartLink>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6">
                  <div
                     className="tp-faq-wrap tp-faq-cst-tab-content tp-faq-pb-tab-content mb-40 ml-35 tp_fade_anim"
                     data-delay=".5"
                     data-fade-from="right"
                  >
                     <div className="accordion mb-60" id="general_faqaccordion">
                        {FAQ_DATA.map((item) => (
                           <PlumbingFaqItem key={item.id} {...item} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PlumbingServiceFaq;
