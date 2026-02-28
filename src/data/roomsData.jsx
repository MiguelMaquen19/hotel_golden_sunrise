import { BedDouble, Wifi, Coffee, MonitorPlay } from 'lucide-react';

export const roomsData = [
    {
        id: 'simple-standard',
        name: 'Habitación Estándar (Simple)',
        description: 'Capacidad para 1 persona, cama confortable y todos los servicios esenciales para un descanso reparador.',
        folderStart: 'simple standard-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <MonitorPlay size={18} className="text-gold" />],
        amenityNames: ["Cama Confortable", "Wi-Fi Gratuito", "TV + Streaming"]
    },
    {
        id: 'doble-standard',
        name: 'Habitación Doble Estándar',
        description: 'Capacidad para 2 personas, cuenta con 2 camas de plaza y media, ideal para amigos o colegas que comparten aventura.',
        folderStart: 'doble standard-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <Coffee size={18} className="text-gold" />],
        amenityNames: ["2 Camas Pz/Media", "Wi-Fi Gratuito", "Desayuno Incluido"]
    },
    {
        id: 'doble-superior',
        name: 'Habitación Doble VIP',
        description: 'Espaciosa habitación para 2 personas con camas de plaza y media, acabados de lujo y servicios VIP exclusivos.',
        folderStart: 'doble superior-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <MonitorPlay size={18} className="text-gold" />],
        amenityNames: ["2 Camas Pz/Media", "Servicios VIP", "TV + Streaming"]
    },
    {
        id: 'matrimonial-standard',
        name: 'Habitación Matrimonial Estándar',
        description: 'Capacidad para 2 personas, equipada con una cama King size, baño privado con ducha y todas las comodidades modernas.',
        folderStart: 'matrimonial standard-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <Coffee size={18} className="text-gold" />],
        amenityNames: ["Cama King Size", "Baño Privado", "TV + Streaming"]
    },
    {
        id: 'matrimonial-vip',
        name: 'Habitación Matrimonial VIP',
        description: 'Habitación insonorizada para 2 personas con cama King size, bañera de hidromasaje, suelo de parquet y caja fuerte.',
        folderStart: 'matrimonial vip-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <Coffee size={18} className="text-gold" />],
        amenityNames: ["Cama King Size", "Bañera Hidromasaje", "Caja Fuerte"]
    },
    {
        id: 'triple-standard',
        name: 'Habitación Triple Estándar',
        description: 'Capacidad para 3 personas, cuenta con 3 camas de plaza y media, ideal para familias pequeñas o grupos.',
        folderStart: 'triple standard-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <MonitorPlay size={18} className="text-gold" />],
        amenityNames: ["3 Camas Pz/Media", "Wi-Fi Gratuito", "TV + Streaming"]
    },
    {
        id: 'suite-junior',
        name: 'Habitación Suite Junior',
        description: 'Diseño elegante para 2 personas, incluye cama King size, relajante Jacuzzi, frigobar y caja fuerte de seguridad.',
        folderStart: 'suite junior-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <Coffee size={18} className="text-gold" />],
        amenityNames: ["Cama King Size", "Jacuzzi Privado", "Frigobar"]
    },
    {
        id: 'suite-presidencial',
        name: 'Habitación Suite Presidencial',
        description: 'Máxima experiencia de lujo para 2 personas. Cama King size, Jacuzzi, frigobar, escritorio y amenities Premium.',
        folderStart: 'suite presidencial-',
        amenities: [<BedDouble size={18} className="text-gold" />, <Wifi size={18} className="text-gold" />, <Coffee size={18} className="text-gold" />],
        amenityNames: ["Cama King Size", "Jacuzzi", "Amenities Premium"]
    }
];

// Load all images via Vite's import.meta.glob
const allImagesConfig = import.meta.glob('../images/**/*.jpg', { eager: true, query: '?url', import: 'default' });

// Group images by room using folderStart matches
export const getRoomImages = (folderStart) => {
    const matchingImages = [];

    for (const path in allImagesConfig) {
        if (path.includes(`/${folderStart}`)) {
            matchingImages.push(allImagesConfig[path]);
        }
    }

    // If no native jpgs are found within our local assets (possibly zips inside),
    // we return a fallback placeholder to not break the UI.
    if (matchingImages.length === 0) {
        return ["https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"];
    }

    return matchingImages;
};
