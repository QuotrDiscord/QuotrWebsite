export const FeatureCard = ({ name, icon, description, learnMoreUrl }) => {
  return (
    <li className="flex flex-col gap-4 p-5 text-white bg-black bg-opacity-25 font-comfortaa rounded-xl min-w-[300px] max-w-xs">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold">{name}</p>
        <img src={icon} />
      </div>
      <p className="text-xl font-light line-clamp-4">{description}</p>
      <a
        className="text-sm font-light text-right underline"
        href={learnMoreUrl}
      >
        Learn more...
      </a>
    </li>
  );
};
