import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { roomsData, getRoomImages } from '../../data/roomsData';
import './RoomsSection.css';

const RoomsSection = () => {
    // Only display the main featured rooms on the homepage
    const featuredRooms = roomsData.slice(0, 6);

    return (
        <section id="habitaciones" className="rooms-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Alojamiento de Lujo</span>
                    <h2 className="section-title">Nuestras Habitaciones</h2>
                    <div className="title-separator mx-auto"></div>
                </div>

                <div className="rooms-grid">
                    {featuredRooms.map((room) => {
                        const roomImages = getRoomImages(room.folderStart);
                        const mainImage = roomImages[0];

                        return (
                            <div key={room.id} className="room-card">
                                <div className="room-image-wrapper">
                                    <img src={mainImage} alt={room.name} className="room-image" />
                                    {/* Price hidden for now as requested */}
                                    {/* <div className="room-price">
                    <span className="price">$120</span>
                    <span className="price-label">/ noche</span>
                  </div> */}
                                </div>

                                <div className="room-content">
                                    <h3 className="room-name">{room.name}</h3>
                                    <p className="room-description">{room.description}</p>

                                    <ul className="room-amenities">
                                        <li className="amenity-item">
                                            {room.amenities[0]} {room.amenityNames[0]}
                                        </li>
                                        <li className="amenity-item">
                                            {room.amenities[1]} {room.amenityNames[1]}
                                        </li>
                                        <li className="amenity-item">
                                            {room.amenities[2]} {room.amenityNames[2]}
                                        </li>
                                    </ul>

                                    <Link to={`/room/${room.id}`} className="room-action text-brown">
                                        Ver Detalles y Fotos <ArrowRight size={18} className="action-icon" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/*
        <div className="rooms-footer text-center">
          <a href="#todas-habitaciones" className="btn btn-outline">Ver Todas las Habitaciones</a>
        </div>
        */}
            </div>
        </section>
    );
};

export default RoomsSection;
