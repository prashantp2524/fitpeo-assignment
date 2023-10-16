import React, { useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { TbDashboard } from 'react-icons/tb'
import { FaAngleRight } from 'react-icons/fa'
import { TbBrandProducthunt } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

const Sidebar = () =>
{

    // const ref = useRef()
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>
    {
        // ref.current.classList.remove('-translate-x-full')
        setToggle(true)
    }

    const hideSidebar = () =>
    {
        setToggle(false)
    }
    return (
        <>
            <div className='hidden md:block sm:block p-2 absolute top-0 left-0'>
                <button
                    type="button"
                    onClick={handleToggle}

                >
                    <svg
                        className="w-8 h-8"

                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
            </div>

            <div className={` md:w-1/2 sm:w-full md:fixed sm:fixed bg-[#010445] h-[100vh] sticky text-white fixed z-[100] absolute top-0 bottom-0 my-0 transition-all duration-200 ease-linear ${toggle ? 'md:left-0' : 'md:-left-full'} ${toggle ? 'sm:left-0' : 'sm:-left-full'}`}>
                <div onClick={hideSidebar} className='absolute right-0 p-1 sm:p-4 hidden sm:block md:block'>
                    <RxCross2 size={30} color='white' />
                </div>
                <div className='flex justify-center pt-4  inline'>

                    <span className='px-2'><BiSolidDashboard size={35} /> </span>
                    <h2 className='text-2xl font-semibold'>Dashboard</h2>



                </div>
                <div className='flex justify-center mt-10 flex-col px-4'>
                    <div className='bg-[#340575] rounded w-full  my-2 p-1 text-center flex items-center '>
                        <span className='px-2'><TbDashboard size={25} /></span>

                        <Link className='text-md text-center font-semibold  '> Dashboard</Link>
                    </div>
                    <div className=' hover:bg-[#340575] hover:rounded w-full  p-1 text-center flex my-4 items-center justify-between'>
                        <div className='flex'>

                            <span className='px-2'><TbBrandProducthunt size={25} /></span>

                            <Link className='text-md  font-normal  '>Product</Link>

                        </div>
                        <div>
                            <Link className='text-md  font-semibold  '> <FaAngleRight /></Link>
                        </div>
                    </div>
                    <div className=' hover:bg-[#340575] hover:rounded w-full  p-1 text-center flex my-4 items-center justify-between'>
                        <div className='flex'>

                            <span className='px-2'><TbDashboard size={25} /></span>

                            <Link className='text-md  font-normal  '>Customers</Link>

                        </div>
                        <div>
                            <Link className='text-md  font-semibold  '> <FaAngleRight /></Link>
                        </div>
                    </div>
                    <div className=' hover:bg-[#340575] hover:rounded w-full  p-1 text-center flex my-4 items-center justify-between'>
                        <div className='flex'>

                            <span className='px-2'><TbDashboard size={25} /></span>

                            <Link className='text-md  font-normal  '> Income</Link>

                        </div>
                        <div>
                            <Link className='text-md  font-semibold  '> <FaAngleRight /></Link>
                        </div>
                    </div>
                    <div className=' hover:bg-[#340575] hover:rounded w-full  p-1 text-center flex my-4 items-center justify-between'>
                        <div className='flex'>

                            <span className='px-2'><TbDashboard size={25} /></span>

                            <Link className='text-md  font-normal  '> Pramote</Link>

                        </div>
                        <div>
                            <Link className='text-md  font-semibold  '> <FaAngleRight /></Link>
                        </div>
                    </div>
                    <div className='hover:bg-[#340575] hover:rounded  w-full  p-1 text-center flex my-4 items-center justify-between'>
                        <div className='flex'>

                            <span className='px-2'><TbDashboard size={25} /></span>

                            <Link className='text-md  font-normal  '> Help</Link>

                        </div>
                        <div>
                            <Link className='text-md  font-semibold  '> <FaAngleRight /></Link>
                        </div>
                    </div>
                </div>

                <div>

                    <div className='absolute bottom-0 w-full '>


                        <div className='bg-[#340575] rounded h-12 mx-1 my-2 py-2 px-1  text-center flex items-center justify-between '>
                            <div className='rounded-[50%] w-10 p-0'>
                                <img className='p-0' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                            </div>

                            <div>
                                <p className='font-semibold text-xs'>Evano</p>
                                <p className=' text-xs'>Project Manager</p>
                            </div>

                            <div>

                                <span className='px-2 p-0'><IoIosArrowDown size={20} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Sidebar