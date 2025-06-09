import React, { useState } from 'react';
import {
  Home,
  Menu,
  Search,
  Bell,
  MessageCircle,
  User,
  Inbox,
  LogOut,
  X,
  Download,
  AlertTriangle,
  FileText, 
  Edit,
  Users ,
  FileEdit,
  HelpCircle,
  Briefcase 
} from 'lucide-react';
import i1 from '../../assets/C1.webp';
import './AdminNavbar.css';

const menuItems = [
  { name: 'Dashboard', icon: <Home />, path: '/dashboard' },
  { name: 'Create Blogs', icon: <Edit />, path: '/createblog' },
  { name: 'Blog List', icon: <FileText />, path: '/bloglist' },
  { name: 'Manage Lawyer', icon: <User />, path: '/managelawyer' },
  { name: 'Team Members', icon: <Users />, path: '/teammembers' },
  { name: 'Legal Draft Service', icon: <FileEdit />, path: '/managelegaldraft' },
  { name: 'Post FAQ', icon: <HelpCircle />, path: '/postfaq' },
  { name: 'Cases Details', icon: <Briefcase />, path: '/casesdetails' },
  { name: 'Achievements & Category', icon: <Download />, path: '/achievementphotos' }, // ✅ NEW SECTION
];


const avatarMenuItems = [
  { icon: <User size={16} />, label: 'Profile' },
  { icon: <Inbox size={16} />, label: 'Inbox' },
  { icon: <LogOut size={16} />, label: 'Logout' },
];

const notifications = [
  {
    icon: <Download size={16} color="blue" />,
    label: 'Your order ready for Ship..!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <Download size={16} color="green" />,
    label: 'Download Complete',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <AlertTriangle size={16} color="red" />,
    label: '250 MB trash files',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

const friends = [
  { name: 'Ain Chavez', status: '28 minutes ago', online: true },
  { name: 'Kori Thomas', status: 'Online', online: true },
  { name: 'Erica Hughes', status: 'Online', online: true },
  { name: 'Ginger Johnston', status: '2 minutes ago', online: false },
  { name: 'Prasanth Anand', status: '2 hour ago', online: false },
  { name: 'Hileri Jecno', status: 'Online', online: true },
];

const AdminNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle('Admin-Navbar-sidebar-open', !sidebarOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <>
      <div className={`Admin-Navbar-sidebar ${sidebarOpen ? 'Admin-Navbar-open' : ''}`}>
       <div className="Admin-Navbar-sidebar-header">
  <img src={i1} alt="Logo" className="Admin-Navbar-sidebar-logo" />
  <h1 className="Admin-Navbar-brand">Lawer Point</h1>
        </div>

        <div className="Admin-Navbar-sidebar-user">
          <img src={i1} alt="User Avatar" className="Admin-Navbar-sidebar-user-avatar" />
          <div className="Admin-Navbar-sidebar-user-info">
            <h2>Dr. Uday Jyoshi</h2>
            <p>Director</p>
          </div>
        </div>

        <nav className="Admin-Navbar-sidebar-nav">
          {menuItems.map((item, index) => (
            <a key={index} href={item.path}>
              {item.icon} <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      
      <div className="Admin-Navbar-main-content">
        <nav className={`Admin-Navbar-navbar ${sidebarOpen ? 'Admin-Navbar-sidebar-open' : ''}`}>
          <div className="Admin-Navbar-menu-icon" onClick={toggleSidebar}>
            <Menu size={24} />
          </div>
          <div className="Admin-Navbar-search">
            <Search size={20} />
            <input type="text" placeholder="Search..." className="Admin-Navbar-search-input" />
          </div>
          <div className="Admin-Navbar-icons">
            <div className="Admin-Navbar-notification-icon" onClick={() => toggleDropdown('notification')}>
              <Bell size={20} />
              {activeDropdown === 'notification' && (
                <div className="Admin-Navbar-notification-dropdown">
                  <h2>Notifications</h2>
                  <ul>
                    {notifications.map((notification, index) => (
                      <li key={index}>
                        {notification.icon}
                        <span>{notification.label}</span>
                        <p>{notification.description}</p>
                      </li>
                    ))}
                  </ul>
                  <button>All notification</button>
                </div>
              )}
            </div>
            <MessageCircle size={20} onClick={() => toggleDropdown('messaging')} />
            {activeDropdown === 'messaging' && (
              <div className="Admin-Navbar-messaging-interface Admin-Navbar-show">
                <div className="Admin-Navbar-messaging-header">
                  <h2>FRIEND LIST</h2>
                  <button className="Admin-Navbar-close-button" onClick={() => toggleDropdown('messaging')}><X size={20} /></button>
                </div>
                <div className="Admin-Navbar-messaging-body">
                  <div className="Admin-Navbar-search-friend">
                    <input type="text" placeholder="search friend" />
                    <Search size={20} />
                  </div>
                  <div className="Admin-Navbar-friend-list">
                    {friends.map((friend, index) => (
                      <div key={index} className="Admin-Navbar-friend-item">
                        <img src={i1} alt="Profile Picture" />
                        <div className="Admin-Navbar-friend-info">
                          <h3>{friend.name}</h3>
                          <p>{friend.status}</p>
                        </div>
                        <div className={`Admin-Navbar-online-status ${friend.online ? 'Admin-Navbar-online' : 'Admin-Navbar-offline'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="Admin-Navbar-avatar-dropdown-container" onClick={() => toggleDropdown('avatar')}>
              <img src={i1} alt="avatar" className="Admin-Navbar-avatar" />
              {activeDropdown === 'avatar' && (
                <div className="Admin-Navbar-avatar-dropdown-menu">
                  <ul>
                    {avatarMenuItems.map((item, index) => (
                      <li key={index}>{item.icon} {item.label}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className={`Admin-Navbar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
      </div>
    </>
  );
};

export default AdminNavbar;