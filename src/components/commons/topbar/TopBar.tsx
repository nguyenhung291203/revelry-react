import React from "react";
import useSidebar from "../../../hooks/useSidebar";
import { colors } from "../../../utils/constants";
const Topbar = () => {
  const { handleToggleSidebar } = useSidebar();

  return (
    <nav style={{ borderRadius: '6px', boxShadow: '0 0.125rem 0.25rem rgba(165, 163, 174, 0.3)', }} className="navbar navbar-light px-4 d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span onClick={() => handleToggleSidebar()}>
          <i className="bi bi-list" style={{ color: colors.gray, fontSize: '20px', cursor: 'pointer' }}></i>
        </span>

      </div>

      {/* Notifications and User Section */}
      <div className="d-flex align-items-center">
        {/* Notifications */}
        <button className="btn me-3 position-relative" style={{ background: colors.orange }}>
          <i className="bi bi-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            5 {/* Replace with actual notification count */}
          </span>
        </button>

        {/* User Profile Avatar */}
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center"
            type="button"
            id="userMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://via.placeholder.com/30"
              alt="User Avatar"
              className="rounded-circle me-2"
              width="30"
              height="30"
            />
            <span>Admin</span>

          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
            <li>
              <a className="dropdown-item" href="/profile">
                Hồ sơ
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/logout">
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
