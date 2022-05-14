import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details"; 
import { StrictMode } from "react/cjs/react.development";

const App = () => {
  return (
    <StrictMode>
    <BrowserRouter>
      <h1> Adopt me </h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>;
    <div>  
      <SearchParams />
    </div>
    </StrictMode>
  );
  
};
render(<App />, document.getElementById("root"));
