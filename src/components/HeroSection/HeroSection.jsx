import { ArrowRight } from 'lucide-react';
import heroBgImage from '../../images/suite presidencial-20251110T161532Z-1-001/601 1.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="inicio" className="hero-section" style={{ backgroundImage: `url('${heroBgImage}')` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content container animate-fade-in">
                <span className="hero-subtitle">Bienvenido a su refugio andino</span>
                <h1 className="hero-title">
                    Despierte con la magia de <br />
                    <span className="text-gold">Golden Sunrise</span>
                </h1>
                <p className="hero-description">
                    Experimente la hospitalidad de lujo en Machu Picchu Pueblo,
                    a solo pasos de una de las maravillas del mundo.
                </p>
                <div className="hero-buttons">
                    <a href="https://wa.me/51992883804" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        Ver Disponibilidad <ArrowRight size={20} className="icon-right" />
                    </a>
                    <a href="#nosotros" className="btn btn-outline btn-lg text-white">
                        Descubra el Hotel
                    </a>
                </div>
            </div>

            {/* Decorative Greek Border at the bottom of hero */}
            <div className="hero-border-bottom"></div>
        </section>
    );
};

export default HeroSection;
