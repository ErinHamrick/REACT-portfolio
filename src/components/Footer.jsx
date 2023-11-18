import React from 'react';


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <p>&copy; {new Date().getFullYear()} Your Portfolio</p> */}
            <div className="social-links">
              <a href="https://github.com/ErinHamrick" id='github' target="_blank" rel="noopener noreferrer">
                {/* <i className="fab fa-github"></i> */}
                GITHUB
              </a>
              {/* Add links to other social media platforms */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
