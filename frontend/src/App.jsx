import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/userLayout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
