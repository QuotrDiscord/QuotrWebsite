import { A } from "@solidjs/router";

export const NavbarItem = ({ name, url }) => {
  return (
    <A
      href={url}
      className="relative flex items-center justify-center h-full px-5 group"
      activeClass="navbar-active"
    >
      <p>{name}</p>
      <div className="absolute bottom-0 w-full h-1 transition-transform scale-x-0 bg-white rounded-t-full group-hover:scale-x-100" />
    </A>
  );
};
