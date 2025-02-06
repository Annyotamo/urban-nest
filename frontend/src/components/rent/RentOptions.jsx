import React, { useState } from 'react'
import OverlayModal from "../elements/OverlayModal.element"
import Categories from './Category/Categories'
import LocationPanel from "./Location/Location"
import AddImagePanel from './AddImage/ImagePanel'
import FacilitiesPanel from './Facilities/Facilities'
import PricePanel from './Price/PricePanel'
import SubmitPanel from "./RentSubmit"
import { useSelector } from 'react-redux'

const RentOptions = ({ toggle }) => {

    const listingData = useSelector((state) => state.giveRent);
    console.log(listingData);

    let content = (<div className="h-full overflow-y-auto p-4 pt-0">
        <h2 className="text-md font-semibold mb-4">Select a Category</h2>
        <Categories />
    </div>)

    const [slide, setSlide] = useState(0);

    switch (slide) {
        case 0:
            content = (<div className="h-full overflow-y-auto p-4 pt-0">
                <h2 className="text-xl mb-2">Select a Category</h2>
                <p className='text-gray-500 mb-6'>Which describes your home best</p>
                <Categories />
            </div>)
            break;
        case 1:
            content = (<LocationPanel />)
            break;
        case 2:
            content = (<AddImagePanel />)
            break;
        case 3:
            content = (<FacilitiesPanel />)
            break;
        case 4:
            content = (<PricePanel />)
            break;
        default:
            content = (<SubmitPanel toggle={toggle} />)
            break;
    }

    return (

        <OverlayModal heading="Rent your home" close={toggle} setSlide={setSlide} showNext={slide <= 4} showPrev={slide > 0} slide={slide}>
            {content}
        </OverlayModal>
    )
}

export default RentOptions
