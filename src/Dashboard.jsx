import "./App.css";

export default function Dashboard() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Hospital</h2>
        <nav>
          <a>Dashboard</a>
          <a>Patients</a>
          <a>Doctors</a>
          <a>Appointments</a>
          <a>Reports</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <h1>Dashboard</h1>
          <div className="profile">Admin</div>
        </header>

        {/*  – Stats */}
        <section className="stats">
          <div className="card">Patients<br /><b>120</b></div>
          <div className="card">Doctors<br /><b>25</b></div>
          <div className="card">Beds<br /><b>80</b></div>
        </section>

        {/*  – Split Layout */}
        <section className="split">
          <div className="box large">Appointments Table</div>
          <div className="box small">Today Summary</div>
        </section>

        {/* – Responsive Cards */}
        <section className="departments">
          <div className="dept">ICU</div>
          <div className="dept">Emergency</div>
          <div className="dept">OPD</div>
          <div className="dept">Pharmacy</div>
        </section>

        {/* Footer */}
        <footer className="footer">
            <span>
         <marquee behavior="" direction="left">© 2026 Hospital System</marquee> </span>
        </footer>
      </main>
    </div>
  );
}
