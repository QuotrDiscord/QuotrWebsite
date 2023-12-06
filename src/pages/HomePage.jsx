import { PageBg } from "../components/global/PageBg";
import { FeatureCard } from "../components/home/FeatureCard";

import featureCardData from "../data/featureCardData.json";

export const HomePage = () => {
  return (
    <PageBg>
      <div className="flex flex-col items-center justify-center gap-24 grow py-14">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-transparent text-9xl font-julius-sans bg-gradient-to-r from-violet-600 to-green-600 bg-clip-text">
            Quotr
          </h1>
          <div className="p-1 transition-all group hover:-translate-y-0.5 hover:shadow-2xl w-min rounded-xl bg-gradient-to-r from-violet-600 to-green-600">
            <button className="p-6 transition-all rounded-lg bg-neutral-900 ">
              <p className="text-4xl font-bold leading-none text-white transition-colors font-comfortaa whitespace-nowrap">
                Get Started
              </p>
            </button>
          </div>
        </div>
        <ul className="inline-flex items-center justify-center gap-16 max-w-[100rem] px-10 flex-wrap">
          {featureCardData.map((x) => {
            return (
              <FeatureCard
                name={x.name}
                icon={x.icon}
                description={x.description}
                learnMoreUrl={x.learnMoreUrl}
              />
            );
          })}
        </ul>
      </div>
    </PageBg>
  );
};
