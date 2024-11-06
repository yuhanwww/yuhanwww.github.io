import React, { useState } from 'react';
import './footer.css'; // You can style the footer in a separate CSS file.

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
    return (
        <footer className="footer">
            &#169; {year} Yuhan ≽^•⩊•^≼ | Poweverd by &#9829; from family & friends
        </footer>
    )
};

export default Footer;