import CategorySlide from "../Elements/CategorySlide";
import HomeBannerSlide from "../Elements/HomeBannerSlide";
// import ProductData from "../../Assets/DataFiles/ProductData.json";
//import { useState } from "react";

const Home = () => {
	// const [pro, setPro] = useState([]);

	// console.log(pro);

	return (
		<section>
			<section>
				<HomeBannerSlide />
				<CategorySlide />
				<section className="container mx-auto space-y-8 text-center py-10">
					<h1 className="text-4xl font-bold">Welcome to the VS Family</h1>
					<p className="text-md ">
						We invite you to savour the wholesome delicacies of our childhood home - where coffee and
						<br /> conversations flowed freely, snacks were plentiful, and the simplest of foods were full of flavour.
					</p>
				</section>
				<section className="text-center">
					<h2 className="text-3xl font-extrabold">Our Bestsellers</h2>
					<div className="grid grid-cols-4"></div>
				</section>
			</section>
		</section>
	);
};

export default Home;
