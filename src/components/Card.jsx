import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsArrowUpShort } from 'react-icons/bs'
// import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsBorderStyle } from 'react-icons/bs'
import { MdAccountBalance } from 'react-icons/md'
import { FcSalesPerformance } from 'react-icons/fc'
import { HiArrowSmDown } from 'react-icons/hi'
const Card = () =>
{

    const cardData = [
        {
            color: '#74f7a0',
            heading: 'Earning',
            price: '$198k',
            percentage: '37.8%',
            icon: <AiOutlineDollarCircle size={40} />,
            arrow: < BsArrowUpShort size={25} color='green' />,
            percentageColor: 'green'
        },
        {
            color: '#54b5ff',
            heading: 'Orders',
            price: '$2.4k',
            percentage: '2%',
            icon: <BsBorderStyle size={40} />,
            arrow: < HiArrowSmDown size={25} color='red' />,
            percentageColor: 'red'

        },
        {
            color: '#d776f5',
            heading: 'Balance',
            price: '$2.4k',
            percentage: '2%',
            icon: <MdAccountBalance size={40} />,
            arrow: < HiArrowSmDown size={25} color='red' />,
            percentageColor: 'red'

        },
        {
            color: '#fa32e6',
            heading: 'Total Sales',
            price: '$8.9k',
            percentage: '11%',
            icon: <FcSalesPerformance size={40} />,
            arrow: < BsArrowUpShort size={25} color='green' />,
            percentageColor: 'green'

        },
    ]
    return (
        <div className='flex justify-between sm:flex-wrap'>

            {cardData && cardData.map((card, indx) => (

                <div key={indx} className='flex shadow-md w-64 justify-between sm:justify-evenly sm:w-full items-center px-2 py-2 bg-white rounded-xl m-1 '>
                    <div  >
                        <div className=' p-6 rounded-[50%] lg-p-3' style={{ backgroundColor: card.color }}>
                            {card.icon}
                        </div>
                    </div>

                    <div>
                        <p className='text-sm'>{card.heading}</p>
                        <h4 className='text-xl font-semibold'>{card.price}</h4>
                        <div className='flex items-center'>

                            <span className=''>{card.arrow}</span >
                            <span className='text-red-500' style={{ color: card.percentageColor }}>{card.percentage}</span>
                            <span>this month</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card