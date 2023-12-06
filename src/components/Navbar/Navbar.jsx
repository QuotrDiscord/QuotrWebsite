import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <div className="flex justify-center bg-neutral-900">
      <div className="grid items-center justify-between w-full grid-cols-2 px-12 text-white border-b border-white h-14 xl:grid-cols-3 flex-grid">
        <h1 className="text-4xl font-julius-sans">Quotr</h1>
        <ul className="flex-row items-center justify-center hidden w-full h-full gap-10 text-lg font-comfortaa xl:flex">
          <NavbarItem name={"Home"} />
          <NavbarItem name={"Dashboard"} />
          <NavbarItem name={"Documentation"} />
          <NavbarItem name={"About"} />
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
