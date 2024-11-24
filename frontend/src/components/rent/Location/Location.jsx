import Map from "./Map";
import SelectCountry from "./SelectCountry";

const LocationSlide = () => {

    return (
        <div>
            <h3 className="text-xl mb-2">Where is your place located?</h3>
            <p className="text-gray-500 mb-6">Help guests find you</p>
            <SelectCountry />
            <Map />
        </div>
    );
};

export default LocationSlide;
