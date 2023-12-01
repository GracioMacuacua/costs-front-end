import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";

import HomePage from "./pages/Home";
import CompanyPage from "./pages/Company";
import ContactPage from "./pages/Contact";
import ProjectsPage from './pages/Projects';
import EditProjectPage from './pages/Project';
import NewProjectPage from "./pages/NewProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/newproject" element={<NewProjectPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<EditProjectPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
