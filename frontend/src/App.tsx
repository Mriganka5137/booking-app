import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
