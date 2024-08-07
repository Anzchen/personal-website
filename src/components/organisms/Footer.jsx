import React from 'react';

const Footer = () => {
  return (
    <footer className="container">
      <div className="ft_top">
        <p className="ft_region">
          Boston, United States<br />
          New York, United States
        </p>
        <p className="ft_contact">
          anthonyzchen@yahoo.com<br />
          +1 (631) 428-5478
        </p>
        <div className="ft_socials">
          <ul>
            <a href="https://www.facebook.com/anthonyzchen.03" target="_blank">
              <button><i className="fa-brands fa-facebook"></i></button>
            </a>
            <a href="https://github.com/Anzchen" target="_blank">
              <button><i className="fa-brands fa-github"></i></button>
            </a>
            <a href="https://www.instagram.com/anthonyzchen/" target="_blank">
              <button><i className="fa-brands fa-instagram"></i></button>
            </a>
            <a href="https://www.linkedin.com/in/anthonyzchen/" target="_blank">
              <button><i className="fa-brands fa-linkedin"></i></button>
            </a>
            <a href="https://open.spotify.com/user/22bsi2i6c5v3vpb2uoxuias2a" target="_blank">
              <button><i className="fa-brands fa-spotify"></i></button>
            </a>
          </ul>
        </div>
      </div>
      <div className="ft_bottom">
        <div className="copyright"><span>&#169;</span>2024 anthonyzchen</div>
        <p className="ft_career">Software Engineering & Finance</p>
      </div>
    </footer>
  );
};

export default Footer;
