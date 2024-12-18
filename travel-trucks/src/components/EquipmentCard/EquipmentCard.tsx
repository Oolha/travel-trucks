import { ReactNode } from "react";
import css from "./EquipmentCard.module.css";
interface EquipmentCardProps {
  id: string;
  label: ReactNode;
  icon: React.ReactNode;
  onSelect: (id: string) => void;
  selected: boolean;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  id,
  label,
  icon,
  onSelect,
  selected,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      style={{
        border: selected ? "1px solid #e44848" : "1px solid #dadde1",
      }}
      className={css.item}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default EquipmentCard;
