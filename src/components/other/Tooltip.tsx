import "./tooltip.css";

interface Props {
  children: React.ReactNode;
  color: string;
}

const Tooltip = ({ children, color }: Props) => {
  return (
    <div
      id="tooltip-hover"
      role="tooltip"
      className={`tooltip hover z-[50] inline-block px-3 py-2 text-sm font-medium text-white  rounded-lg shadow-sm
      bg-${color} after:border-t-${color} after:border-r-transparent after:border-b-transparent after:border-l-transparent
      w-max
      `}
    >
      {children}
    </div>
  );
};

export default Tooltip;
