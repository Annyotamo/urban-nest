import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

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

const LondonMap = ({ latLng }) => {
    const position = latLng;

    return (
        <div style={{ height: "290px", width: "100%" }}>
            <MapContainer
                center={position}
                zoom={13}
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

export default LondonMap;
