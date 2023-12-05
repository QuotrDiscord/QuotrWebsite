export const NavbarItem = ({ name }) => {
  return (
    <li className='relative flex items-center justify-center px-5 group h-14'>
      <p>{name}</p>
      <div className='absolute bottom-0 w-full h-1 transition-transform scale-x-0 bg-white group-hover:scale-x-100' />
    </li>
  );
};
