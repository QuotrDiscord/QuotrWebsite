import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between px-12 text-white border-b border-white bg-neutral-900'>
      <h1 className='text-4xl font-julius-sans'>Quotr</h1>
      <ul className='flex flex-row items-center justify-center w-full gap-10 font-bold grow font-comfortaa'>
        <NavbarItem name={"Home"} />
        <NavbarItem name={"Dashboard"} />
        <NavbarItem name={"Documentation"} />
        <NavbarItem name={"About"} />
      </ul>
      <div>ICON</div>
    </div>
  );
};
