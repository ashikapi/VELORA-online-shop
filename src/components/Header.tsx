import { CgProfile } from "react-icons/cg";
import { BsFillBasketFill } from "react-icons/bs";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="flex justify-evenly items-center p-4">
            <div>
                <NavLink to={'/home'}><img src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/header-logo.svg" alt="" /> </NavLink>
            </div>
            <div>
                <ul className='flex gap-20 text-lg font-semibold text-gray-600'>
                    <li><NavLink to={'/home'}> Home </NavLink></li>
                    <li><NavLink to={'/shop'}> Shop </NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/career'}>Careers</NavLink></li>
                    <li><NavLink to={'/faqus'}>FAQ's</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex justify-baseline gap-6 text-2xl"><CgProfile /> <BsFillBasketFill /></div>
        </div>
        <div className="p-3 flex justify-center items-center text-white bg-black text-lg"><p>Get 15% off on your first order</p></div>
    </div>
  )
}

export default Header