import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminNavbar from './Components/AdminNavbar/AdminNavbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateBlogs from './Components/CreateBlogs/CreateBlogs';
import BlogList from './Pages/BlogList/BlogList';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;