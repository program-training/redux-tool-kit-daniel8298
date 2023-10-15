import { Button } from "@mui/material";
import { select } from "../store/animalSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

const ButtonsLeft = () => {
  const color = useAppSelector((store) => store.animal.color);
  const dispatch = useAppDispatch();

  return (
    <div className="buttons_left">
      <Button
        variant="contained"
        onClick={() => dispatch(select("Dog"))}
        sx={{ backgroundColor: color === "Dog" ? color : "red" }}
      >
        Dog
      </Button>

      <Button
        variant="contained"
        onClick={() => dispatch(select("Wolf"))}
        sx={{ backgroundColor: color === "Wolf" ? color : "blue" }}
      >
        Wolf
      </Button>

      <Button
        variant="contained"
        onClick={() => dispatch(select("Fox"))}
        sx={{ backgroundColor: color === "Fox" ? color : "orange" }}
      >
        Fox
      </Button>
    </div>
  );
};

export default ButtonsLeft;
