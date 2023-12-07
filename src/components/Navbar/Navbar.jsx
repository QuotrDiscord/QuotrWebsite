import { A } from "@solidjs/router";

import { NavbarItem } from "./NavbarItem";
import navbarItems from "../../data/navbarItems.json";

export const Navbar = ({ userId }) => {
  return (
    <div className="flex justify-center bg-neutral-900">
      <div className="grid items-center justify-between w-full grid-cols-2 px-12 text-white border-b border-white lg:grid-cols-3 h-14 flex-grid">
        <h1 className="text-4xl font-julius-sans">
          <A href={"/"}>Quotr</A>
        </h1>
        <ul className="flex-row items-center justify-center hidden w-full h-full gap-5 text-lg lg:flex font-comfortaa">
          {navbarItems.map((x) => {
            if (userId === "" && x.url === "/dash") return;

            return <NavbarItem name={x.name} url={x.url} />;
          })}
        </ul>
        <div className="justify-self-end">
          <img
            className="p-1 border-2 border-white rounded-full w-9 h-9"
            src="/icons/user.svg"
          />
        </div>
      </div>
    </div>
  );
};
