import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Compass } from 'lucide-react';
import { roomsData, getRoomImages } from '../../data/roomsData';
import './RoomDetail.css';

const RoomDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const room = roomsData.find(r => r.id === id);

    useEffect(() => {
        // If room not found, redirect to home
        if (!room) {
            navigate('/');
        }
    }, [room, navigate]);

    if (!room) return null;

    const images = getRoomImages(room.folderStart);

    return (
        <div className="room-detail-page animate-fade-in">
            {/* Detail Hero Banner */}
            <div
                className="detail-hero"
                style={{ backgroundImage: `url('${images[0]}')` }}
            >
                <div className="detail-hero-overlay"></div>
                <div className="container relative z-10">
                    <Link to="/#habitaciones" className="back-link">
                        <ArrowLeft size={20} /> Volver a Habitaciones
                    </Link>
                    <span className="room-category text-gold">Habitación de Lujo</span>
                    <h1 className="detail-title">{room.name}</h1>
                </div>
            </div>

            <div className="container detail-content">
                <div className="detail-grid">

                    {/* Main Content Column */}
                    <div className="detail-main">
                        <div className="detail-section">
                            <h2 className="detail-heading">Descripción</h2>
                            <div className="title-separator mb-4"></div>
                            <p className="detail-description">{room.description}</p>
                        </div>

                        <div className="detail-section">
                            <h2 className="detail-heading">Galería de Imágenes</h2>
                            <div className="title-separator mb-4"></div>

                            <div className="gallery-grid">
                                {images.map((imgUrl, index) => (
                                    <div key={index} className={`gallery-item ${index === 0 ? 'gallery-item-large' : ''}`}>
                                        <img src={imgUrl} alt={`${room.name} vista ${index + 1}`} className="gallery-img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="detail-sidebar">
                        <div className="sidebar-card">
                            <Compass size={32} className="text-gold mb-3 mx-auto block" />
                            <h3 className="sidebar-title text-center">Amenidades Incluidas</h3>

                            <ul className="detail-amenities-list">
                                {room.amenityNames.map((amenity, idx) => (
                                    <li key={idx} className="detail-amenity-item">
                                        <Check size={18} className="text-gold mr-2" />
                                        <span>{amenity}</span>
                                    </li>
                                ))}
                                <li className="detail-amenity-item">
                                    <Check size={18} className="text-gold mr-2" />
                                    <span>Limpieza Diaria</span>
                                </li>
                                <li className="detail-amenity-item">
                                    <Check size={18} className="text-gold mr-2" />
                                    <span>Baño Privado con Agua Caliente 24/7</span>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-card mt-4 bg-brown text-white text-center">
                            <h3 className="text-white mb-2">¿Le gustaría reservar?</h3>
                            <p className="text-sm text-gray opacity-80 mb-4">
                                Póngase en contacto con nosotros para conocer disponibilidad y precios exactos.
                            </p>
                            <a href="https://wa.me/51992883804" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;
