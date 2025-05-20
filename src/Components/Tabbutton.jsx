import { Link } from "react-router-dom";
const Tabbutton = ({ children, to }) => {
    return (
        <Link to={to}><button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">{children}</button></Link>
    )
}
export default Tabbutton;