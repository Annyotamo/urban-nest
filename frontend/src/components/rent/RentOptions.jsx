import React, { useState } from 'react'
import OverlayModal from "../elements/OverlayModal.element"
import Categories from './Category/Categories'
import LocationSlide from "./Location/Location"

const RentOptions = ({ toggle }) => {

    let content = (<div className="h-full overflow-y-auto p-4 pt-0">
        <h2 className="text-xl font-bold mb-4">Select a Category</h2>
        <Categories />
    </div>)

    const [slide, setSlide] = useState(0);

    switch (slide) {
        case 0:
            content = (<div className="h-full overflow-y-auto p-4 pt-0">
                <h2 className="text-xl font-bold mb-4">Select a Category</h2>
                <Categories />
            </div>)
            break;
        case 1:
            content = (<LocationSlide />)
            break;
        default:
            content = (<div className="h-full overflow-y-auto p-4 pt-0">
                <h2 className="text-xl font-bold mb-4">Select a Category</h2>
                <Categories />
            </div>)
            break;
    }

    return (
        <OverlayModal heading="Rent your home" close={toggle} setSlide={setSlide} showNext={slide <= 6} showPrev={slide > 0}>
            {content}
        </OverlayModal>
    )
}

export default RentOptions
