import React from 'react';

const CreatePost = () => {
    return (
        <div className='w-[35%]'>
            <div className='m-3'>
                <div className='flex items-center justify-between border border-gray-500'>
                    <div className='cursor-pointer'>
                        <h1 className='font-bold text-gray-600 text-lg'>Temple Ticket Booking</h1>
                    </div>
                </div>
                <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                    {/* Srisailam Temple */}
                    <div className='flex items-center justify-between p-4 m-3'>
                        <img
                            src='https://tirupatitirumalainfo.com/wp-content/uploads/2018/06/srisailam-mruthyunjaya-homam-1920x1280.jpg'
                            alt='Srisailam'
                            className='w-80 h-70  mr-3'
                        />
                        <h1 className='font-bold text-lg ml-3'>Srisailam</h1>
                        <a
                            href='https://www.srisailadevasthanam.org/en-in/online-booking/'
                            className='px-20 py-1 border-none text-lg bg-[#109BFB] w-full rounded-full text-white font-bold m-1'
                        >
                            Book Ticket
                        </a>
                        <br>
                        </br>
                    </div>
                </div>

                <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                    {/* Yadadri Temple */}
                    <div className='flex items-center justify-between p-4 m-3'>
                        <img
                            src='https://assets.thehansindia.com/h-upload/2021/06/17/1082600-yadadri-temple.jpg'
                            alt='Yadadri'
                            className='w-150 h-115 mr-3'
                        />
                        <h1 className='font-bold text-lg ml-2'>Yadadri</h1>
                        <a
                            href='https://online.yadadrionline.in/home'
                            className='px-20 py-1 border-none text-lg bg-[#109BFB] w-full rounded-full text-white font-bold m-3'
                        >
                            Book Ticket
                        </a>
                        <br>
                        </br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
