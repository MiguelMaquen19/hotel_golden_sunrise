import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contacto">
            {/* Decorative top border */}
            <div className="footer-border-top"></div>

            <div className="container footer-container">
                <div className="footer-grid">

                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">Golden Sunrise</h3>
                        <span className="footer-logo-subtitle">Machupicchu</span>
                        <p className="footer-bio">
                            Somos tu hogar en el encantador Machu Picchu Pueblo, donde la aventura y la comodidad se encuentran.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="footer-links-col">
                        <h4 className="footer-heading">Explorar</h4>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#habitaciones">Habitaciones</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#opiniones">Opiniones</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Contacto</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="text-gold" />
                                <span>Urb. Las Orquídeas - Calle Wakanki Nro. 615</span>
                            </li>
                            <li>
                                <Phone size={18} className="text-gold" />
                                <span>+51 992 883 804</span>
                            </li>
                            <li>
                                <Mail size={18} className="text-gold" />
                                <span>reservas@goldensm.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Golden Sunrise Machupicchu. Todos los derechos reservados.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
