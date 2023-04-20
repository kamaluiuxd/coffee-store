//

import { Route, Routes } from "react-router-dom";
//
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import OurStory from "../Pages/OurStory";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";

//

const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="our-story" element={<OurStory />} />
			<Route path="contact" element={<Contact />} />
			<Route path="cart" element={<Cart />} />
			<Route path="checkout" element={<CheckOut />} />
		</Routes>
	);
};

export default Navigation;
