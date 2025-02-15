import React from 'react'
import Container from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiCactus, GiCastle, GiCaveEntrance, GiFishingBoat, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from "react-icons/md"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import Option from '../elements/Option.element'
import { IoDiamond } from "react-icons/io5"

export const options = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "This property is close to the beach!"
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "This property has windmills!"
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This property is modern!"
    },
    {
        label: "Country",
        icon: TbMountain,
        description: "This property is in the countryside!"
    },
    {
        label: "Islands",
        icon: GiIsland,
        description: "This property is on a island!"
    },
    {
        label: "Lake",
        icon: GiFishingBoat,
        description: "This property is close to a lake!"
    },
    {
        label: "Pool",
        icon: TbPool,
        description: "This property has a pool!"
    },
    {
        label: "Skiing",
        icon: FaSkiing,
        description: "This property has skiing activities!"
    },
    {
        label: "Castles",
        icon: GiCastle,
        description: "This property is in a castle!",
    },
    {
        label: "Camping",
        icon: GiForestCamp,
        description: "This property has camping activities!",
    },
    {
        label: "Arctic",
        icon: BsSnow,
        description: "This property is close to the Arctic!",
    },
    {
        label: "Cave",
        icon: GiCaveEntrance,
        description: "This property is close to a cave!",
    },
    {
        label: "Desert",
        icon: GiCactus,
        description: "This property is in the desert!",
    },
    {
        label: "Barn",
        icon: GiBarn,
        description: "This property is in the barn!",
    },
    {
        label: "Lux",
        icon: IoDiamond,
        description: "This property is luxurious!",
    }
]



const Categories = () => {
    return (
        <Container styles="bg-gradient-to-b from-[#FAF3E0] to-[#FFF7E1] shadow-md bg-opacity-60 relative z-10">
            <div className='py-4 flex flew-row items-center justify-between overflow-x-auto'>
                {options.map((item) => <Option key={item.label} label={item.label} description={item.description} Icon={item.icon} />
                )}
            </div>
        </Container>
    )
}

export default Categories
