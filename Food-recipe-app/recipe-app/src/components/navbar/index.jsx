import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar(){
    const {searchParam ,setSearchParam ,handleSubmit} = useContext(GlobalContext);
    // console.log(searchParam)
    return(
    <>
        <nav className="flex justify-between center items-center py-8 container mx-auto flex-col gap-5 lg:gap-0">
                <h2 className="text-2xl font-semibold" > 
                    <NavLink to={'/'} className="text-black hover:text-gray-700  duration-300">Food Recipe</NavLink>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} name="search" placeholder="Enter Items..." className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"/>
                </form>
            
        </nav>
        <ul className="flex gap-5">
         <li>
             <NavLink to={'/'} className="text-black hover:text-gray-700  duration-300">Home </NavLink>
         </li>  
         <li>
         <NavLink to={'/favorites'} className="text-black hover:text-gray-700  duration-300">Favorites</NavLink>
         </li>
        </ul>
    </>
    )
}