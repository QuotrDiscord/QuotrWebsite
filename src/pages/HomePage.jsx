import { A } from "@solidjs/router";
import { PageBg } from "../components/global/PageBg";
import { FeatureCard } from "../components/home/FeatureCard";

import featureCardData from "../data/featureCardData.json";

export const HomePage = () => {
  return (
    <PageBg>
      <div className="flex flex-col items-center justify-center gap-28 grow py-14">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-transparent text-9xl font-julius-sans main-gradient-light bg-clip-text bg-gradient-to-r">
            Quotr
          </h1>
          <div className="p-1 transition-all group hover:-translate-y-0.5 hover:shadow-2xl main-gradient-light w-fit rounded-xl bg-gradient-to-r hover:from-transparent hover:to-transparent hover:bg-discord">
            <A
              className="flex flex-row items-center gap-5 p-5 transition-transform rounded-lg bg-neutral-900 hover:bg-transparent"
              href={import.meta.env.VITE_DISCORD_OAUTH_PATH}
            >
              <img src="/icons/discord.svg" />
              <p className="text-4xl font-bold leading-none text-white transition-colors font-comfortaa whitespace-nowrap">
                Sign In
              </p>
            </A>
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
