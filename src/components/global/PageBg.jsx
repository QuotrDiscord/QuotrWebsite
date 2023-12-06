import { children } from "solid-js";

export const PageBg = ({ children }) => {
  return (
    <div className='flex w-full main-gradient-dark grow bg-gradient-to-b md:bg-gradient-to-r'>
      <div className='flex grow bg-gradient-to-b from-neutral-900 to-transparent'>
        {children}
      </div>
    </div>
  );
};
