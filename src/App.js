import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>}/>
          <Route path="/sign-in" element={<SignInScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
