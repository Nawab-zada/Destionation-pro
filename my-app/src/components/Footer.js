import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <p>Address:<br />
            Office No.19, Block 51<br />
            Chaudhry Plaza, Jinnah Avenue, Blue Area<br />
            Islamabad.<br />
            Phone: 051-2274080 / 2274341
          </p>
        </div>
        <div className="social-icons">
          <h>Follow us here</h>
          <a href="#"><img src="LinkedIn.png" alt="LinkedIn" /></a>
          <a href="#"><img src="instagra.png" alt="Instagram" /></a>
          <a href="#"><img src="twittter.png" alt="Twitter" /></a>
          <a href="#"><img src="Facebook.png" alt="Facebook" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
