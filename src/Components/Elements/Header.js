import { FaRegUser } from "react-icons/fa";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logok.png";

const Header = () => {
	return (
		<section className="container-fluid border-solid border-slate-400 bg-slate-800 text-white p-4 fixed top-0">
			<section className="container flex justify-between items-center ">
				<div>
					<Link to="/">
						<img src={logo} alt="coffee store" className="w-14"></img>
					</Link>
				</div>
				<ul className="hidden md:flex space-x-5">
					<li>
						<Link to="products">Shop</Link>
					</li>
					<li>
						<Link to="our-story">Our Story</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>
				<ul className="flex space-x-5">
					<IoSearchOutline />
					<FaRegUser />
					<IoBagOutline />
				</ul>
			</section>
		</section>
	);
};

export default Header;
