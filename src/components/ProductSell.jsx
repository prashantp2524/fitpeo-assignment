import React from 'react'

const ProductSell = () =>
{
    return (
        <>
            <div className='shadow-lg rounded-3xl bg-white p-4 sm:w-full sm:p-2'>
                <div>
                    <div className='flex justify-between' >
                        <div>

                            <h2 className='text-xl font-semibold sm:text-base'>Product Sell</h2>
                        </div>
                        <div className='flex '>

                            <div className='mx-2 sm:w-1/2'>

                                <form>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" class="block w-full outline-none p-1 pl-10 text-sm text-gray-900 bg-[#e3e5e6] rounded-lg" placeholder="Search" required />
                                    </div>
                                </form>
                            </div>
                            <div className=''>

                                <select id="countries" className=" text-gray-900 text-sm rounded-lg p-1 bg-[#e3e5e6] block w-full outline-none ">
                                    <option selected >Last 30 days</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className='mt-4'>
                        <div className='grid grid-cols-7'>
                            <div className='grid col-start-1 col-end-5'>
                                <p>Product Name</p>
                            </div>

                            <div className=''>
                                <p >Stock</p>
                            </div>
                            <div className=''>

                                <p>Price</p>
                            </div>

                            <div className=''>

                                <p>Total Sales</p>
                            </div>

                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className=' mt-4 grid grid-cols-7'>
                        <div className='grid col-start-1 col-end-5'>


                            <div className='flex  sm:flex-col  '>
                                <div className='w-20 px-2'>
                                    <img className='border rounded' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph" alt="" />
                                </div>
                                <div>
                                    <h6 className='text-md font-semibold sm:text-xs'>Abstract 3D</h6>
                                    <p className='sm:text-xs'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <p className='sm:text-xs'>32 in Stock</p>
                        </div>
                        <div className=''>

                            <p className='font-bold sm:text-xs'>$45.99</p>
                        </div>

                        <div className=''>

                            <p className='sm:text-xs'>20</p>
                        </div>


                    </div>
                    <div className=' mt-4 grid grid-cols-7'>
                        <div className='grid col-start-1 col-end-5'>


                            <div className='flex  sm:flex-col '>
                                <div className='w-20 px-2'>
                                    <img className='border rounded' src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph" alt="" />
                                </div>
                                <div>
                                    <h6 className='text-md font-semibold sm:text-xs'>Abstract 3D</h6>
                                    <p className='sm:text-xs' >Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <p className='sm:text-xs'>32 in Stock</p>
                        </div>
                        <div className=''>

                            <p className='font-bold sm:text-xs'>$45.99</p>
                        </div>

                        <div className=''>

                            <p className='sm:text-xs'>20</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductSell