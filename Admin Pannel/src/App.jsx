import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminNavbar from './Components/AdminNavbar/AdminNavbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateBlogs from './Components/CreateBlogs/CreateBlogs';
import BlogList from './Pages/BlogList/BlogList';
import ManageLawer from './Pages/ManageLawer/ManageLawer';
import ManageTeam from './Pages/ManageTeam/ManageTeam';
import ManageLegalDraft from './Pages/ManageLegalDraft/ManageLegalDraft';
import PostFaqs from './Pages/PostFaqs/PostFaqs';
import CasesDetails from './Pages/CasesDetails/CasesDetails';
import Achivmentandcategory from './Pages/Achivmentandcategory/Achivmentandcategory';

function App() {
  return (
    <Router>
      <AdminNavbar />
      <div className="Admin-Navbar-main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlogs />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/managelawyer" element={<ManageLawer />} />
          <Route path="/teammembers" element={<ManageTeam />} />
          <Route path="/managelegaldraft" element={<ManageLegalDraft />} />
          <Route path="/postfaq" element={<PostFaqs />} />
          <Route path="/casesdetails" element={<CasesDetails />} />
          <Route path="/achievementphotos" element={<Achivmentandcategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;