import { CgProfile } from "react-icons/cg";
import { BsFillBasketFill } from "react-icons/bs";
import { NavLink } from "react-router";
import CartNumber from "./CartNumber";
import { TiThMenu } from "react-icons/ti";

const Header = () => {

    const navItems = [
        {name: "Home", path: "/home"},
        {name: "Shop", path: "/shop"},
        {name: "Blog", path: "/blog"},
        {name: "About", path: "/about"},
        {name: "Careers", path: "/career"},
        {name: "FAQ's", path: "/faqus"},
        {name: "Contact", path: "/contact"},
    ];

  return (
    <div className="w-full h-auto fixed top-0 z-50 bg-white">
        <div className="flex justify-evenly items-center p-4">
            <div>
                <NavLink to={'/home'}><img src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/header-logo.svg" alt="" /> </NavLink>
            </div>
            <div className="md:flex justify-center items-center lg:gap-x-10 md:gap-5 hidden lg:text-lg md:text-base font-semibold text-gray-600">
                {navItems.map ((items, index) => (
                    <ul key={index}
                     className="">
                            <NavLink to={items.path}
                             >{items.name}</NavLink>
                    </ul>
                ))}
                {/* <ul className='flex gap-20 text-lg font-semibold text-gray-600'>
                    <li><NavLink to={'/home'}> Home </NavLink></li>
                    <li><NavLink to={'/shop'}> Shop </NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/career'}>Careers</NavLink></li>
                    <li><NavLink to={'/faqus'}>FAQ's</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul> */}
            </div>
            <div className="group md:flex hidden justify-baseline gap-6 text-2xl"><CgProfile /> 
            <div className="relative">
                <BsFillBasketFill />
                <div className="md:flex hidden justify-baseline absolute -top-4 right-1.5"><CartNumber/></div>
            </div>
            </div>
            <div className="md:hidden block"><TiThMenu size={20} /></div>
        </div>
        <div className="p-3 flex justify-center items-center text-white bg-black text-lg"><p>Get 15% off on your first order</p></div>
    </div>
  )
}

export default Header