import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"

const LeftSidebar = () => {
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`);
            toast.success(res.data.message);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

return (
    <div className='w-[30%]'>
        <div>
            <div>
                <img width={"100px"} src="https://cityfurnish.com/blog/wp-content/uploads/2024/01/9087-min.jpg" alt="templetranquil-logo" />
            </div>
            <div className='my-4'>
                <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <FaHome size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Home</h1>
                </Link>
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <MdTour size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Tourism Guide</h1>
                </div><div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <GiByzantinTemple size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Temple information</h1>
                </div><div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <TbBrandBooking size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Booking Management</h1>
                </div><div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <IoNotificationsOutline size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Notifications</h1>
                </div>
                <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor rounded-full">
                    <div>
                        <IoIosSettings size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Settings</h1>
                </div>
                <div onClick={logoutHandler} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                    <div>
                        <IoIosLogOut size="24px" />
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Logout</h1>
                </div>
                <button className='px-4 py-2 border-none text-md bg-[#109BFB] w-full rounded-full text-white font-bold'>BookTicekt</button>
            </div>
        </div>
    </div>

)
}

export default LeftSidebar