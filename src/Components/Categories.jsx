import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="md:mt-10 mt-2 bg-white flex flex-col justify-center items-center">
      <h2 className="font-medium font-Poppins text-3xl mb-5">
        Book Catergories
      </h2>
      <div className="flex flex-wrap gap-4 px-6 py-3 w-fit rounded-md">
        <Link to="/books/science">
          <button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">
            Science
          </button>
        </Link>
        <Link to="/books/fiction">
          <button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">
            Fiction
          </button>
        </Link>
        <Link to="/books/non_fiction">
          <button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">
            Non-Fiction
          </button>
        </Link>
        <Link to="/books/fantacy">
          <button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">
            Fantacy
          </button>
        </Link>
        <Link to="/books/crime">
          <button className="bg-black text-white hover:bg-blue-800 font-normal text-base font-Poppins px-6 py-2 rounded-full">
            Crime
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Categories;
