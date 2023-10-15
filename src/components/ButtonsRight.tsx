import { Button } from "@mui/material";
import { select } from "../store/animalSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const ButtonsRight = () => {
  const color = useAppSelector((store) => store.animal.color);
  const dispatch = useAppDispatch();
  return (
    <div className="buttons_right">
      <Button
        variant="contained"
        onClick={() => dispatch(select("Cat"))}
        sx={{ backgroundColor: color === "Cat" ? color : "purple" }}
      >
        Cat
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(select("Tiger"))}
        sx={{ backgroundColor: color === "Tiger" ? color : "green" }}
      >
        Tiger
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(select("Lion"))}
        sx={{ backgroundColor: color === "Lion" ? color : "brown" }}
      >
        Lion
      </Button>
    </div>
  );
};

export default ButtonsRight;
