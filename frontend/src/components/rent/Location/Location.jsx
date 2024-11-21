import { useState } from "react";
import Map from "./Map";
import SelectCountry from "./SelectCountry";

const LocationSlide = () => {

    const [latLng, setLatLng] = useState([51.505, -0.09])
    console.log(latLng)

    return (
        <div>
            <h3 className="text-xl mb-2">Where is your place located?</h3>
            <p className="text-gray-500 mb-6">Help guests find you</p>
            <SelectCountry setLatLng={setLatLng} />
            <Map latLng={latLng} />
        </div>
    );
};

export default LocationSlide;
