import { FeatureCard } from "../home/FeatureCard";

import featureCardData from "../../../data/featureCardData.json";

export const HomePage = () => {
  return (
    <div className="flex w-full bg-gradient-to-r from-violet-950 to-green-950 grow">
      <div className="flex grow bg-gradient-to-b from-neutral-900 to-transparent">
        <div className="flex flex-col items-center justify-center gap-24 grow pt-14">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-transparent text-9xl font-julius-sans bg-gradient-to-r from-violet-600 to-green-600 bg-clip-text">
              Quotr
            </h1>
            <div className="p-1 transition-all group hover:-translate-y-0.5 hover:shadow-2xl w-min rounded-xl bg-gradient-to-r from-violet-600 to-green-600">
              <button className="p-6 transition-all rounded-lg bg-neutral-900 ">
                <p className="text-4xl font-bold text-white transition-colors font-comfortaa whitespace-nowrap">
                  Get Started
                </p>
              </button>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-16 max-w-7xl">
            {featureCardData.map((x) => {
              return (
                <FeatureCard
                  name={x.name}
                  icon={x.icon}
                  description={x.description}
                  learnMoreUrl={x.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
