import logo from "./logo.svg";
import "./App.css";

import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Auth from "./pages/Auth";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.8rem",
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
