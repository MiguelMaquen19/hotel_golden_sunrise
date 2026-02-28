import aboutImg1 from '../../images/suite presidencial-20251110T161532Z-1-001/601 2.jpg';
import aboutImg2 from '../../images/doble superior-20251110T160632Z-1-001/404 1.jpg';
import aboutImg3 from '../../images/matrimonial vip-20251110T161535Z-1-001/501 5.jpg';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="nosotros" className="about-section">
            <div className="container about-container">

                <div className="about-text-content">
                    <div className="section-header">
                        <span className="section-subtitle">Nuestra Historia</span>
                        <h2 className="section-title">La Esencia de los Andes en cada detalle</h2>
                        <div className="title-separator"></div>
                    </div>

                    <p className="about-description">
                        En <strong>Golden Sunrise Machupicchu</strong>, somos tu hogar en el encantador Machu Picchu Pueblo, donde la aventura y la comodidad se encuentran. Nuestro objetivo es ofrecer una experiencia de viaje inolvidable, satisfaciendo el anhelo de nuestros huéspedes de visitar Machu Picchu con todas las comodidades modernas.
                    </p>
                    <p className="about-description">
                        <strong>Nuestra Misión:</strong> Proveer a nuestros visitantes un servicio de calidad y confort, comprometidos con la excelencia y la satisfacción del cliente.
                        <br /><br />
                        <strong>Nuestra Visión:</strong> Ser la primera y mejor opción en el rubro hotelero mediante el compromiso adquirido con nuestros huéspedes, de la mano con el cuidado del medio ambiente.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number text-gold">4</span>
                            <span className="stat-label">Estrellas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number text-gold">40</span>
                            <span className="stat-label">Habitaciones Equipadas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number text-gold">24h</span>
                            <span className="stat-label">Recepción y Asistencia</span>
                        </div>
                    </div>
                </div>

                <div className="about-images">
                    <div className="image-grid">
                        <img
                            src={aboutImg1}
                            alt="Habitación Principal Golden Sunrise"
                            className="about-img img-large"
                        />
                        <div className="image-column">
                            <img
                                src={aboutImg2}
                                alt="Comodidad y vistas"
                                className="about-img img-small"
                            />
                            <img
                                src={aboutImg3}
                                alt="Detalles de lujo andino"
                                className="about-img img-small"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
