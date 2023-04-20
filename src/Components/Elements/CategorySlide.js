//

import { Link } from "react-router-dom";

const CategorySlide = () => {
	const catDataSlide = [
		{
			id: 1,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Coffee Decation",
			NavLink: "",
		},
		{
			id: 2,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Instant Coffee",
			NavLink: "",
		},
		{
			id: 3,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Snacks",
			NavLink: "",
		},
		{
			id: 4,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Filter Coffee",
			NavLink: "",
		},
		{
			id: 5,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Super Savers",
			NavLink: "",
		},
		{
			id: 6,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "Spices",
			NavLink: "",
		},
		{
			id: 7,
			imgPath: "https://cdn.shopify.com/s/files/1/0351/7759/5012/files/decoction_c.001_180x.png",
			altText: "All Products",
			NavLink: "",
		},
	];

	return (
		<section className="container mx-auto flex space-x-10 p-10">
			{catDataSlide.map(({ id, imgPath, altText, NavLink }) => {
				return (
					<div key={id} className="flex">
						<Link to={NavLink}>
							<img src={imgPath} alt={altText} />
						</Link>
					</div>
				);
			})}
		</section>
	);
};

export default CategorySlide;
