import { PageBg } from "../components/global/PageBg";

export const AboutPage = () => {
  return (
    <PageBg>
      <div className="w-full p-16 mx-auto text-justify text-white bg-black bg-opacity-25 max-w-7xl font-comfortaa">
        <div className="flex flex-col gap-2 p-10 text-center ">
          <h1 className="font-julius-sans text-7xl">Quotr</h1>
          <p className="text-md">My solution to a problem that doesn't exist</p>
        </div>
        <div className="flex flex-col gap-2 p-10">
          <h2 className="text-5xl font-julius-sans">What is Quotr</h2>
          <p className="pl-16"></p>
        </div>
      </div>
    </PageBg>
  );
};
