import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../redux/favorites/slice";

const FavoritesPersistence = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    dispatch(setFavorites(savedFavorites));
  }, [dispatch]);

  return null;
};

export default FavoritesPersistence;
