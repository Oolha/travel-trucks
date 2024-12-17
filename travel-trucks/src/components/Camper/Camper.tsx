import React from "react";
import { Camper as CamperType } from "../../redux/types";

interface CamperProps {
  camper: CamperType;
}

const Camper = ({ camper }: CamperProps) => {
  return (
    <li>
      <h3>{camper.name}</h3>
      <p>{camper.description}</p>
      <p>Price: ${camper.price}</p>
    </li>
  );
};

export default Camper;
