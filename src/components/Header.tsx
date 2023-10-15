import Typography from "@mui/material/Typography";
import { useAppSelector } from "../store/hooks";

const Header = () => {
  const animal = useAppSelector((store) => store.animal).animal;
  return (
    <header>
      <Typography variant="h4">The animal chosen is: {animal}</Typography>
    </header>
  );
};

export default Header;
