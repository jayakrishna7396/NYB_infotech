
function DashboardLayout() {
  return (
    <div className="dashboard">

      <h1>Student Dashboard</h1>

      <div className="dashboard-container">

        {/* Sidebar */}

        <aside>

          <h3>Dashboard Menu</h3>

          <ul>

            <li>
              <Link to="/dashboard">
                Dashboard Home
              </Link>
            </li>

            <li>
              <Link to="/dashboard/profile">
                Profile
              </Link>
            </li>

            <li>
              <Link to="/dashboard/courses">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/dashboard/settings">
                Settings
              </Link>
            </li>

          </ul>

        </aside>


        {/* Child Pages Appear Here */}

        <main>

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;