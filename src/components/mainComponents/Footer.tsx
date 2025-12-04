import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
        <div className="bg-[rgb(0,0,0)] text-white">
            <div className="grid md:grid-cols-5 grid-cols-1 gap-20 p-20">
            <div className="flex flex-col gap-6">
                <img className="w-[136px] h-[40px" src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-logo.svg" alt="" />
                <p>Classic looks for Men, Women & Kids.</p>
                <ul className="flex gap-6 text-2xl mt-4">
                    <li><FaInstagram /></li>
                    <li><CiFacebook /></li>
                    <li><CiLinkedin /></li>
                    <li><FaXTwitter /></li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-extrabold">Quick Links</h1>
                <ul className="space-y-2">
                    <li><NavLink to={'/home'}>Home</NavLink> </li>
                    <li><NavLink to={'/shop'}>Shop</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-extrabold">Shop</h1>
                <ul className="space-y-2">
                    <li>Mens Wear</li>
                    <li>Womens Wear</li>
                    <li>Kids Wear</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-extrabold">Help</h1>
                <ul className="space-y-2">
                    <li>FAQ’s</li>
                    <li>Return Policy</li>
                    <li>Order Status</li>
                    <li>Shipping & Delivery</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-extrabold">My Profile</h1>
                <ul className="space-y-2">
                    <li>My Account</li>
                    <li>Track Order</li>
                    <li>My Cart</li>
                    <li>Order History</li>
                </ul>
            </div>
            </div>
            <div className="pb-20 pl-20 pr-20"><hr className="border-t border-gray-300 pb-6" />
            <label className="flex justify-between items-center"><p>Copyright © 2025 Clothing Store All rights reserved</p>
            <img className="w-[272px] h-[48px]" src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/payments.svg" alt="" /></label>
            
            </div>
        </div>
    </div>
  )
}

export default Footer