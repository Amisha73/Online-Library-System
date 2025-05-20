import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full p-2">
            <div className=" bg-black text-white font-Poppins flex justify-between items-center p-3 sticky top-0 rounded-full">
    
                  <Link to="/"><h2 className="font-Oswald font-base text-2xl ">eBook</h2></Link>  
                    <ul className="hidden md:flex items-center gap-5 text-medium font-base cursor-pointer">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/browsebook'><li>Browse Book</li></Link>
                        <Link to="/addbooks"><li>Add books</li></Link>
                    </ul>
                    <div className="md:hidden">
                        <HiOutlineMenu className="w-8 h-8" onClick={() => setIsOpen(!isOpen)} />
                    </div>
        
            </div>
            <div className="p-2">
                    {
                        isOpen &&
                        <ul className="md:hidden flex flex-col justify-start gap-5 bg-black rounded-sm text-white w-full text-medium font-base cursor-pointer p-3">
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/browsebook'><li>Browse Book</li></Link>
                            <Link to="/addbook"><li>Add books</li></Link>
                        </ul>
                    }
                </div>
        </nav>
    )
}
export default Navbar;