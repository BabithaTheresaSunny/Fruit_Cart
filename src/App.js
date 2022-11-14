import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Signin from "./Components/Signin/signin";
import NotFound from "./Components/notfound";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route
            path="/layout"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
