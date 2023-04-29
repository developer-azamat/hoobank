import React from "react";
import styles, { layout } from "../script";
import Button from "./Button";
import { features } from "../constants/index";

interface features {
  id: string;
  icon: string;
  title: string;
  content: string;
}

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> well handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Wish the right credit card, you can imporve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature: features, idx: number) => (
          <div
            className={`flex flex-row p-6 rounded-[20px] ${
              idx !== features.length - 1 ? "mb-6" : "mb-0"
            } feature-card`}
            key={feature.id}
          >
            <div
              className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
            >
              <img
                src={feature.icon}
                className="w-[50%] h-[50%] object-contain"
                alt={feature.title}
              />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{feature.title}</h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
