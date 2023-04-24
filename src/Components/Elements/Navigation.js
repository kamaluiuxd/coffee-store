//

import { Route, Routes } from "react-router-dom";
//
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import OurStory from "../Pages/OurStory";
import Products from "../Pages/Products";
import UnderConstruction from "../Pages/UnderConstruction";

//

const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<UnderConstruction />} />
			<Route path="/home" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="our-story" element={<OurStory />} />
			<Route path="contact" element={<Contact />} />
			<Route path="cart" element={<Cart />} />
			<Route path="checkout" element={<CheckOut />} />
		</Routes>
	);
};

export default Navigation;
