import css from "./CampersList.module.css";
import { useEffect, useState } from "react";
import { selectCampers } from "../../redux/trucks/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { fetchCampers } from "../../redux/trucks/operations";
import Camper from "../Camper/Camper";

const CampersList = ({}) => {
  const dispatch = useAppDispatch();
  const data = useSelector(selectCampers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCampers()).unwrap();
      } catch (error) {
        console.error("Failed to fetch campers", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <ul>
        {data.map((camper) => {
          return <Camper key={camper.id} camper={camper} />;
        })}
      </ul>
    </div>
  );
};

export default CampersList;
