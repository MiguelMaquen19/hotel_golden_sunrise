import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoUrl from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          <img src={logoUrl} alt="Golden Sunrise" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">Golden Sunrise</span>
            <span className="logo-subtitle">Machupicchu</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <ul className="nav-links">
            <li><a href="/#inicio">Inicio</a></li>
            <li><a href="/#nosotros">Nosotros</a></li>
            <li><a href="/#habitaciones">Habitaciones</a></li>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/#contacto">Contacto</a></li>
          </ul>
          <a href="https://wa.me/51992883804" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-btn">Reservar Ahora</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="/#inicio" onClick={toggleMobileMenu}>Inicio</a></li>
          <li><a href="/#nosotros" onClick={toggleMobileMenu}>Nosotros</a></li>
          <li><a href="/#habitaciones" onClick={toggleMobileMenu}>Habitaciones</a></li>
          <li><a href="/#servicios" onClick={toggleMobileMenu}>Servicios</a></li>
          <li><a href="/#contacto" onClick={toggleMobileMenu}>Contacto</a></li>
        </ul>
        <a href="https://wa.me/51992883804" target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-nav-btn" onClick={toggleMobileMenu}>Reservar Ahora</a>
      </div>
    </nav>
  );
};

export default Navbar;
