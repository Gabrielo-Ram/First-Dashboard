//Icons
import { IoIosHome } from "react-icons/io";
import { HiArchive, HiAnnotation, HiCog } from "react-icons/hi";
import { useNavigate } from "react-router";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <section className="top-0 left-0 flex flex-col align-middle bg-blue-950 md:w-32 h-screen fixed text-white shadow-lg">
            <div id='homeButton' className="mt-8 sidebar-icon">
                <button onClick={() => navigate('/')}>
                    <IoIosHome className='w-5/6 h-5/6 m-auto'/>
                </button>
            </div>
            <div id='otherIcons' className='flex flex-col justify-between h-7/16 mt-70'>
                <div className="sidebar-icon">
                    <button onClick={() => navigate('/dataView')}>
                        <HiArchive className='w-5/6 h-5/6 m-auto'/> 
                    </button>
                </div>
                <div className="sidebar-icon">
                    <HiAnnotation className='w-5/6 h-5/6 m-auto'/>
                </div>
                <div className="sidebar-icon">
                    <HiCog className='w-5/6 h-5/6 m-auto'/>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;