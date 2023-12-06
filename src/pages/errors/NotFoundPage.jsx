import { useLocation } from "@solidjs/router";
import { PageBg } from "../../components/global/PageBg";

export const NotFoundPage = () => {
  const location = useLocation();

  return (
    <PageBg>
      <div className='flex flex-col items-center w-full gap-12 p-24 text-lg text-white font-comfortaa'>
        <div className='flex flex-col items-center'>
          <h1 className='text-transparent text-9xl font-julius-sans bg-gradient-to-r main-gradient-light bg-clip-text'>
            404
          </h1>
          <p>Looks like something went wrong!</p>
        </div>
        <div className='text-center'>
          <p>The following route could not be found:</p>
          <p>{location.pathname}</p>
        </div>
        <div className='grow' />
        <p>If you believe this is a mistake, submit an issue on GitHub</p>
      </div>
    </PageBg>
  );
};
