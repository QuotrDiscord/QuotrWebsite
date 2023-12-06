import { children } from "solid-js";

export const PageBg = ({ children }) => {
  return (
    <div className="flex w-full bg-gradient-to-r from-violet-950 to-green-950 grow">
      <div className="flex grow bg-gradient-to-b from-neutral-900 to-transparent">
        {children}
      </div>
    </div>
  );
};
