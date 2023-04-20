import logo from "../../Assets/images/coffeelogo.svg";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<section className="container-fluid border-solid border-slate-400 p-4">
			<section className="container flex justify-between items-center border-b-orange-300">
				<div>
					<Link to="/">
						<img src={logo} alt="" className="w-14"></img>
					</Link>
				</div>
				<ul className="flex space-x-5">
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
