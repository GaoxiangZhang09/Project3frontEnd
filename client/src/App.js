import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import NewCommu from "./pages/NewCommu";
import Rubric from "./pages/Rubric";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      {/* <NewCommu />
      <Home /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Communication" element={<NewCommu />} />
          <Route path="/Rubric" element={<Rubric />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

App.propTypes = {};

export default App;
