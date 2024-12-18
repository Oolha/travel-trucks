import Icons from "../../../public/svg/sprite.svg";

type IconProps = {
  id: string;
  className?: string;
  size?: number | string;
  style?: React.CSSProperties;
};

export const Icon: React.FC<IconProps> = ({ id, className, size, style }) => {
  return (
    <svg className={className} height={size} width={size} style={style}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};
