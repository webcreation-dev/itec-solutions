"use client";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";

const plans = [
  {
    id: 1,
    title: "Étude & faisabilité",
    desc: "Analyser le site, le programme, les contraintes et le potentiel de l’opération.",
  },
  {
    id: 2,
    title: "Montage & conception",
    desc: "Définir un cadre viable avec la maîtrise d’ouvrage et les partenaires de conception.",
  },
  {
    id: 3,
    title: "Réalisation & livraison",
    desc: "Organiser le chantier et suivre les engagements de qualité, de délai et de budget.",
  },
];

const ConstructionTextPlan = () => {
  const isDarkTheme = useIsDarkRoute();
  const sectionBg = !isDarkTheme ? "#ffff" : undefined;

  return (
    <div className="cnt-plan-ptb pt-140 pb-130" style={{ backgroundColor: sectionBg }}>
      <div className="container container-1350">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="cnt-plan-heading text-center mb-50">
              <span
                className="cnt-section-subtitle mb-20 tp_fade_anim"
                data-delay=".3"
              >
                Promotion immobilière
              </span>

              <h3
                className="tp-section-title-clash-600 fs-60 fw-500 mb-0 pb-15 tp_fade_anim"
                data-delay=".4"
              >
                Les étapes d’un programme maîtrisé
              </h3>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="cnt-plan-box pb-90">
          <div className="row">
            {plans.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="cnt-plan-item text-center mb-30">
                  <h4 className="cnt-plan-item-title">{item.title}</h4>

                  <p style={{ whiteSpace: "pre-line" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="row">
          <div className="col-lg-12">
            <div className="cnt-plan-thumb">
              <Image className="img-fluid" width={1319} height={729}
                src="/assets/img/update-2/service/home-2/thumb-1.png"
                alt="plan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionTextPlan;
