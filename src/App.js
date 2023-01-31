import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contexts/UserContext";
import BoardScreen from "./pages/BoardScreen";
import CreateBoardScreen from "./pages/CreateBoardScreen";
import HomeScreen from "./pages/HomeScreen";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  return (
    <>
    <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen/>}/>
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/home" element={<PrivateRoute> <HomeScreen /> </PrivateRoute>} />
            <Route path="/board">
              <Route path="create" element={<PrivateRoute> <CreateBoardScreen /> </PrivateRoute>} />
              <Route path=":boardId" element={<PrivateRoute> <BoardScreen /> </PrivateRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
