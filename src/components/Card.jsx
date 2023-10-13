import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsArrowUpShort } from 'react-icons/bs'
const Card = () =>
{
    return (
        <>
            <div className='flex shadow-md w-52'>
                <div  >
                    <div className='bg-green-400 p-4 rounded-[50%]'>
                        <AiOutlineDollarCircle />
                    </div>
                </div>

                <div>
                    <p>Earning</p>
                    <h4>$198k</h4>
                    <p><BsArrowUpShort />37.8 this month</p>
                </div>
            </div>

        </>
    )
}

export default Card