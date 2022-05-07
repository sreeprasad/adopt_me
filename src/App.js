import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1> Adopt me </h1>
      <Pet name="Tiger" animal="dog" breed="husky" />
      <Pet name="Twitter" animal="bird" breed="parrot" />
      <Pet name="Bond" animal="cat" breed="mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
