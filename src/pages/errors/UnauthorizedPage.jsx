import { useLocation } from "@solidjs/router";
import { PageBg } from "../../components/global/PageBg";

export const UnauthorizedPage = () => {
  const location = useLocation();

  return (
    <PageBg>
      <div className="flex flex-col items-center w-full gap-12 p-24 text-lg text-white font-comfortaa">
        <div className="flex flex-col items-center">
          <h1 className="text-transparent text-9xl font-julius-sans bg-gradient-to-r from-violet-600 to-green-600 bg-clip-text">
            401
          </h1>
          <p>Looks like something went wrong!</p>
        </div>
        <div className="text-center">
          <p>You aren't allowed to access the following page:</p>
          <p>{location.pathname}</p>
        </div>
        <div className="grow" />
        <p>If you believe this is a mistake, submit an issue on GitHub</p>
      </div>
    </PageBg>
  );
};
