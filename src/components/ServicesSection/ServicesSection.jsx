import { Utensils, Sparkles, Map, Car, Clock, ShieldCheck, Wifi } from 'lucide-react';
import './ServicesSection.css';

const services = [
    {
        icon: <Utensils size={36} />,
        title: "Desayuno & Restaurante",
        description: "Desayuno incluido (Buffet, Americano, Continental o Vegetariano), además de Bar, Restaurante y Room Service."
    },
    {
        icon: <Sparkles size={36} />,
        title: "Instalaciones de Relax",
        description: "Disfrute de nuestra Terraza con vistas panorámicas y áreas comunes diseñadas para su total relajación."
    },
    {
        icon: <Wifi size={36} />,
        title: "Conectividad Total",
        description: "WiFi de alta velocidad gratuito y Smart TVs con Streaming (Netflix, Disney+) en todas las habitaciones."
    },
    {
        icon: <Car size={36} />,
        title: "Servicio de Traslados",
        description: "Servicio de transporte para facilitar su llegada y salida de forma cómoda y sin complicaciones."
    },
    {
        icon: <Clock size={36} />,
        title: "Recepción 24/7",
        description: "Atención ininterrumpida. Nuestro personal le ayudará con recomendaciones locales y reservas de tours."
    },
    {
        icon: <ShieldCheck size={36} />,
        title: "Storage Service",
        description: "Servicio de almacenamiento de equipaje para que pueda explorar la ciudadela sin cargar maletas."
    }
];

const ServicesSection = () => {
    return (
        <section id="servicios" className="services-section">
            <div className="services-overlay"></div>
            <div className="container relative z-10">
                <div className="section-header text-center">
                    <span className="section-subtitle text-sun">Experiencias Inolvidables</span>
                    <h2 className="section-title text-white">Servicios de Primer Nivel</h2>
                    <div className="title-separator mx-auto bg-gold"></div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
