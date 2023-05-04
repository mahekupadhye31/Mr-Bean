import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import logo from "../assets/logo-removebg-preview.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const navi = useNavigate();
  const navigatefun = () => {
    navi("/login");
  };
  return (
    <>
      <Chat />
      <nav nav className="navbar fixed-top navbar-expand-lg " id="nav_design">
        <a
          class="navbar-brand"
          href="#"
          style={{
            marginLeft: "1.2vw",
            fontFamily: "Sacramento",
            fontSize: "40px",
            color: "#563300",
          }}
        >
          <img style={{ width: "230px" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-0 g-0">
            <li class="nav-item active">
              <Link to="/" class="nav-link" href="#">
                HOME
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/menu" class="nav-link" href="#">
                MENU
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/events" class="nav-link">
                EVENTS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/games" class="nav-link">
                GAMES
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/leader" class="nav-link" href="#">
                LEADERBOARD
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ProfileDetails" class="nav-link" href="#">
                <AccountCircleIcon
                  sx={{ color: "#563300", fontSize: "30px", marginTop: "0px" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
