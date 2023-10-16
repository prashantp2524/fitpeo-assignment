import React from 'react'
import Sidebar from './Sidebar'
import Card from './Card'
import BarChart from './BarChart'
import ProgressBar from './ProgressBar'
import ProductSell from './ProductSell'



const Wrapper = () =>
{


    return (
        <>

            <div className='flex w-screen'>

                <div className='w-[18%] '><Sidebar /></div>

                <div className='w-[82%] px-10 py-4 md:w-screen  sm:w-full  ' >
                    <div className='flex justify-between p-4 w-full md:px-8 sm:px-8' >
                        <div><h1 className='text-2xl font-semibold sm:text-xl'>Hello Shaharuk!</h1></div>
                        <div className='sm:w-[50%]'>

                            <form>

                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none" placeholder="Search" required />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='w-full   justify-center items-center'>
                        <div><Card /></div>
                    </div>

                    <div className='mt-6 flex w-full justify-between md:flex-col sm:flex-col '>
                        <div className='shadow-xl w-3/5 p-8 bg-white rounded-3xl md:w-full sm:w-full '>
                            <BarChart />
                        </div>

                        <div className='w-1/3 shadow-lg flex   flex-col p-4 bg-white rounded-3xl sm:w-full  md:w-full md:mt-4 sm:mt-4'>
                            <div>
                                <h3 className='text-xl font-semibold'>Customers</h3>
                                <h6>Customers that buy products</h6>
                            </div>
                            <div className='flex justify-center items-center'>

                                <ProgressBar />
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 '>
                        <ProductSell />
                    </div>
                </div >
            </div >
        </>
    )
}

export default Wrapper