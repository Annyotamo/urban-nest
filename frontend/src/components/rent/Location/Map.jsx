import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSelector } from 'react-redux';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapUpdater = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.setView(position, map.getZoom()); // Update map position
        }
    }, [position, map]);

    return null; // No visual output, only effect on map
};

const Map = () => {

    const [position, setPosition] = useState([51.505, -0.09]);

    const { location } = useSelector((state) => state.giveRent)

    useEffect(() => {
        setPosition(location.latLng);
    }, [location])


    return (
        <div style={{ height: "290px", width: "100%" }}>
            <MapContainer
                center={position}
                zoom={5}
                style={{ height: '100%', width: '100%', borderRadius: "5px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapUpdater position={position} />
                <Marker position={position}>
                    <Popup>Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
