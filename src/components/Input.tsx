import { TextField } from "@mui/material";
import { select } from "../store/animalSlice";
import { useAppDispatch } from "../store/hooks";

const Input = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <TextField
        label="another animal"
        onChange={(e) => dispatch(select(e.target.value))}
      />
    </div>
  );
};

export default Input;
