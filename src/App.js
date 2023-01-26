import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
