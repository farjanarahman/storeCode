import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return ( 
        <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover hover:text-pink-600">Home</a>
                <a className="link link-hover hover:text-pink-600">About</a>
                <a className="link link-hover hover:text-pink-600">Contact</a>
                <a className="link link-hover hover:text-pink-600">Store</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61552618342420" target="_blank" rel="noopener noreferrer">
                        <div className="bg-blue-700 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                            <FaFacebookF className="text-2xl text-white" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/storecode_in/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <div className="bg-pink-600 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                            <FaInstagram className="text-2xl text-white" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/company/storecode/about/" target="_blank" rel="noopener noreferrer">
                        <div className="bg-blue-500 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                            <FaLinkedinIn className="text-2xl text-white" />
                        </div>
                    </a>
                </div>
            </nav>
            <aside>
            <a className="link link-hover hover:text-pink-600">Privacy Policy</a>
                <p>© 2023 All Rights Reserved By StoreCode</p>
            </aside>
        </footer>
    );
};

export default Footer;