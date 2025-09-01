import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [expanded, setExpanded] = useState(window.innerWidth >= 992);

  const menus = [
    { to: "/dashboard", icon: "fas fa-home", label: "Dashboard" },
    { to: "/tracker", icon: "fas fa-map", label: "Trackers" },
    { to: "/profile", icon: "fas fa-user", label: "Profile" },
  ];

  // Fungsi toggle sidebar
  const toggleSidebar = () => {
    if (window.innerWidth < 992) {
      setExpanded((prev) => !prev);
    }
  };

  // Update otomatis kalau resize
  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="sidebar"
      className={`sidebar flex-column ${expanded ? "expanded" : "collapsed"}`}
    >
      {/* Logo */}
      <div className="row my-3 d-none d-md-block">
        <div className="col-9 text-start my-auto">
          <img src="Images/xyz.png" style={{ width: "100px", height: "50px" }} alt="logo"/>
        </div>
      </div>

      {/* Logo + Toggle (mobile) */}
      <div className="row my-3 d-flex d-lg-none align-items-center" onClick={toggleSidebar}>
        <div className="col-9">
          <img src="Images/xyz.png" style={{ width: "80px", height: "50px" }} alt="logo"/>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-sm btn-light">☰</button>
        </div>
      </div>

      {/* Profil */}
      <div className="box-card row mx-auto border border-1 p-2 rounded-4 mb-3" style={{ backgroundColor: "white" }}>
        <div className="col-3 text-center my-auto">
          <img className="rounded-circle border border-1"
               src="Images/default.png"
               style={{ width: "50px", height: "50px", objectFit: "cover" }}
               alt="profile"/>
        </div>
        <div className="col-9 text-start my-auto">
          <p className="my-auto fw-semibold" style={{ fontSize: "12px" }}>Muhammad Risky Farhan</p>
          <p className="my-auto fw-semibold opacity-50" style={{ fontSize: "14px" }}>Admin</p>
        </div>
      </div>

      {/* Menu */}
      <div className="sidebar-component">
        <hr className="m-3"/>
        <p className="fw-semibold opacity-50" style={{ marginLeft: "30px" }}>Menu</p>
      </div>

      <nav className="nav flex-column flex-grow-1">
        {menus.map((menu, idx)=>(
          <Link 
            key={idx} 
            to={menu.to}
            className={`nav-link mx-3 py-3 rounded-4 location.pathname${location.pathname === menu.to ? "active bg-primary text-white" : ""}`}
            > 
            <i className={`${menu.icon}`}></i> <span className="link-text">{menu.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer menu */}
      <div className="row border border-1 mx-3 mb-3 rounded-4" style={{ backgroundColor: "#f1f1f1" }}>
        <a href="#" className="nav-link rounded-4">
          <i className="fas fa-cog ms-3"></i> <span className="link-text">Pengaturan</span>
        </a>
      </div>
      <div className="row border border-1 mx-3 mb-3 rounded-4" style={{ backgroundColor: "#f1f1f1" }}>
        <a href="/logout" className="nav-link rounded-4">
          <i className="fa-solid fa-arrow-right-from-bracket ms-3"></i> <span className="link-text">Keluar</span>
        </a>
      </div>
    </div>
  );
}
