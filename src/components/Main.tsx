import ButtonsLeft from "./ButtonsLeft";
import ButtonsRight from "./ButtonsRight";
import Input from "./Input";

const Main = () => {
  return (
    <main>
      <div className="buttons">
        <ButtonsLeft />
        <ButtonsRight />
      </div>
      <div>
        <Input />
      </div>
    </main>
  );
};

export default Main;
