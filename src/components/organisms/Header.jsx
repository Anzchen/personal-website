import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-row">
        <div className="logo">
            <img src="/src/assets/logo.png" alt="brand" />
        </div>
        <button className="menu-toggle">
          <svg
            className="hamburger-menu hamburger"
            viewBox="0 0 12 10"
            height="40px"
            width="40px"
          >
            <path d="M10,2 L2,2"></path>
            <path d="M2,5 L10,5"></path>
            <path d="M10,8 L2,8"></path>
          </svg>
        </button>
      </div>
      {/* <div class="header">
        <div class="menu-open">
          <ul class="site-nav-menu" data-menu-type="mobile">
            <li class="site-nav-submenu">
              <button
                type="button"
                class="site-nav-link site-nav-submenu-toggle"
                aria-controls="MobileSubMenu-1"
              >
                locations
              </button>
              <div id="MobileSubMenu-1" class="sub-menu">
                <ul>
                  <li>New York</li>
                  <li>Boston</li>
                </ul>
              </div>
            </li>
            <li>
              <a class="site-nav-link" href="/about/">
                about
              </a>
            </li>
            <li>
              <a class="site-nav-link" href="/blog/">
                my blog!
              </a>
            </li>
            <li>
              <a class="site-nav-link" href="/contact/">
                contact
              </a>
            </li>
          </ul>
        </div>

        <div class="container nav">
          <span class="logo">
            <img src="/assets/logo.png" alt="Project2" />
          </span>

          <button class="menu" onclick="openMenu()">
            <span class="sr-only">Toggle Navigation</span>
            <span class="nav-toggle-btn__line"></span>
            <span class="nav-toggle-btn__line"></span>
            <span class="nav-toggle-btn__line"></span>
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
