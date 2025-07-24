import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LiveMap = () => {
  const [position, setPosition] = useState([23.3441, 85.3096]); // Ranchi default
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        setHasLocation(true);
      },
      (err) => {
        console.warn("Geolocation error:", err);
        setHasLocation(false);
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-6 mb-6 px-4 lg:px-10 bg-green-50">
      {/* Left section - Map */}
      <div className="w-full lg:w-1/2">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden border border-gray-300">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {hasLocation
                  ? "You are here 🚀"
                  : "Default location (permission denied)"}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Right section - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://s3.india.com/wp-content/uploads/2024/05/Feature-Image-_-Ranchi-1.jpg?impolicy=Medium_Widthonly&w=800&h=541"
          alt="Construction Site"
          className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default LiveMap;
