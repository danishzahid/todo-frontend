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
            fontSize: "1.2rem",
            background: "#fff", // Set background to white
            color: "#3498db", // Set text color to the border color
            borderRadius: "2px", // Adjust the border radius
            border: "2px solid #3498db", // Set the border style and color
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adjust the box shadow
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
