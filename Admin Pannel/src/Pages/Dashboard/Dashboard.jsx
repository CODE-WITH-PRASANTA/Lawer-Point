import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart, Legend } from 'recharts';
import './Dashboard.css';
import i1 from '../../assets/C1.webp'

const Dashboard = () => {
  const userInfo = {
    name: 'Admin ',
    messages: 2,
    tasks: 15,
  };
  const appSelectorOptions = [
    { value: 'acme-corp-backend-app', label: 'ACME Corp. Backend App' },
  ];
  const navTabs = [
    { label: 'Home', isActive: true },
    { label: 'Budget' },
    { label: 'Team', badge: 9 },
  ];
  const widgets = [
    {
      title: 'Total Cases',
      count: 21,
      label: 'Due Tasks',
      footnote: 'Completed: 13',
      color: 'blue',
    },
    {
      title: 'Overdue',
      count: 17,
      label: 'Tasks',
      footnote: 'From yesterday: 9',
      color: 'red',
    },
    {
      title: 'Issues',
      count: 24,
      label: 'Open',
      footnote: 'Closed today: 19',
      color: 'orange',
    },
    {
      title: 'Messages & Notification',
      count: 38,
      label: 'Proposals',
      footnote: 'Implemented: 16',
      color: 'green',
    },
  ];
  const pieData = [
    { name: 'Fixed', value: 3, color: '#3b82f6' },
    { name: "Won't Fix", value: 4, color: '#ef4444' },
    { name: 'Re-opened', value: 8, color: '#f59e0b' },
    { name: 'Needs Triage', value: 6, color: '#10b981' },
  ];
  const radarData = [
    { subject: 'API', A: 10 },
    { subject: 'Backend', A: 20 },
    { subject: 'Frontend', A: 30 },
    { subject: 'Issues', A: 25 },
  ];

  return (
    <div className="Dashboard-Container">
      <header className="Dashboard-Header">
        <div className="Dashboard-UserInfo">
          <img src={i1} alt="User Avatar" className="Dashboard-UserAvatar" />
          <div className="Dashboard-UserDetails">
            <h1 className="Dashboard-WelcomeMessage">Welcome back, {userInfo.name}!</h1>
            <p className="Dashboard-UserNotifications">🔔 You have {userInfo.messages} new messages and {userInfo.tasks} new tasks</p>
          </div>
        </div>
        <div className="Dashboard-Actions">
          <button className="Dashboard-Button Dashboard-MessagesButton">✉️ Messages</button>
          <button className="Dashboard-Button Dashboard-SettingsButton">⚙️ Settings</button>
        </div>
      </header>
      <section className="Dashboard-Widgets">
        {widgets.map((widget, index) => (
          <div key={index} className="Dashboard-Widget">
            <h3 className="Dashboard-WidgetTitle">{widget.title}</h3>
            <p className={`Dashboard-WidgetCount Dashboard-${widget.color}`}>{widget.count}</p>
            <p className="Dashboard-WidgetLabel">{widget.label}</p>
            <p className="Dashboard-WidgetFootnote">{widget.footnote}</p>
          </div>
        ))}
      </section>

      <section className="Dashboard-IssuesSummary">
        <div className="Dashboard-IssuesChart">
          <div className="Dashboard-ChartHeader">
            <h3 className="Dashboard-ChartTitle">Summary</h3>
            <p className="Dashboard-ChartLabel">New vs. Closed</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="Dashboard-IssuesOverview">
          <div className="Dashboard-ToggleButtons">
            <button className="Dashboard-ToggleButton">Last Week</button>
            <button className="Dashboard-ToggleButton Dashboard-Active">This Week</button>
          </div>
          <div className="Dashboard-OverviewCards">
            {pieData.map((item, index) => (
              <div key={index} className="Dashboard-OverviewCard">
                <h4 className="Dashboard-OverviewCardValue">{item.value}</h4>
                <p className="Dashboard-OverviewCardLabel">{item.name}</p>
              </div>
            ))}
            <div className="Dashboard-OverviewCard Dashboard-New">
              <h4 className="Dashboard-OverviewCardValue">214</h4>
              <p className="Dashboard-OverviewCardLabel">New Issues</p>
            </div>
            <div className="Dashboard-OverviewCard Dashboard-Closed">
              <h4 className="Dashboard-OverviewCardValue">75</h4>
              <p className="Dashboard-OverviewCardLabel">Closed</p>
            </div>
          </div>
        </div>
      </section>

      <div className="Dashboard-TaskScheduleContainer">
        <section className="Dashboard-TaskDistribution">
          <div className="Dashboard-ChartHeader">
            <h3 className="Dashboard-ChartTitle">Task Distribution</h3>
            <div className="Dashboard-ToggleButtons">
              <button className="Dashboard-ToggleButton">Last Week</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="Tasks" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="Dashboard-TaskLabels">
            <span className="Dashboard-Dot Dashboard-Blue"></span> API
            <span className="Dashboard-Dot Dashboard-Indigo"></span> Backend
            <span className="Dashboard-Dot Dashboard-Gray"></span> Frontend
            <span className="Dashboard-Dot Dashboard-Dark"></span> Issues
          </div>
          <div className="Dashboard-TaskSummary">
            <div className="Dashboard-TaskSummaryItem">
              <h4 className="Dashboard-TaskSummaryValue">594</h4>
              <p className="Dashboard-TaskSummaryLabel">New tasks</p>
            </div>
            <div className="Dashboard-TaskSummaryItem">
              <h4 className="Dashboard-TaskSummaryValue">287</h4>
              <p className="Dashboard-TaskSummaryLabel">Completed tasks</p>
            </div>
          </div>
        </section>

        <section className="Dashboard-Schedule">
          <div className="Dashboard-ChartHeader">
            <h3 className="Dashboard-ChartTitle">Schedule</h3>
            <div className="Dashboard-ToggleButtons">
              <button className="Dashboard-ToggleButton Dashboard-Active">This Month</button>
            </div>
          </div>
          <ul className="Dashboard-ScheduleList">
            <li className="Dashboard-ScheduleItem"><strong>Group Meeting</strong> <span>🕒 in 32 minutes • 📍 Conference room 1B</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Coffee Break</strong> <span>🕒 10:30 AM</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Public Beta Release</strong> <span>🕒 11:00 AM</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Lunch</strong> <span>🕒 12:10 PM</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Dinner with David</strong> <span>🕒 05:30 PM • 📍 Magnolia</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Jane's Birthday Party</strong> <span>🕒 07:30 PM • 📍 Home</span></li>
            <li className="Dashboard-ScheduleItem"><strong>Overseer's Retirement Party</strong> <span>🕒 09:30 PM • 📍 Overseer's room</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;