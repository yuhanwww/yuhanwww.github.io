import React, { useState } from 'react';
import './footer.css'; // You can style the footer in a separate CSS file.

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
    return (
        <footer className="footer">
            &#169; {year} Yuhanwww | Poweverd by &#128008;&#8205;&#11035;&#x2661; from <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/soooombra/">&nbsp; Sombra</a>
        </footer>
    )
};

export default Footer;