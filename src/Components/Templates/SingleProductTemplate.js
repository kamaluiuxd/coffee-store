const SingleProductTemplate = () => {
	return (
		<section className="container mx-auto md:grid grid-cols-2 m-5">
			<div className="w-full h-screen   text-2xl">
				<img src="https://cdn.shopify.com/s/files/1/0351/7759/5012/products/2bottles_dawara.001_720x.png" alt="" />
			</div>
			<div className="w-full h-screen text-2xl space-y-8">
				<h1 className="text-4xl text-bold ">Brass Dawara Set and Filter Coffee Decoction - 2 bottles</h1>
				<p className="text-2xl font-bold">
					Rs. 640 <span className="line-through">Rs. 690</span>
				</p>
				<p>Quantity</p>
				<p className="text-xl">Country of origin: India 🇮🇳</p>
				<h3 className="text-3xl font-semibold">Description</h3>
				<p className="text-xl">
					Its 6 am on a balmy day. Fresh decoction goes drip-drip in Paati’s brass filter and the aroma of coffee wafts through our home. Paati gives
					VS Thatha his first frothy cup and prepares a tall flask for the entire household. Her coffee-chicory blend is perfect - strong and
					flavorful, with no bitter aftertaste. Our mornings are punctuated by frequent doses from this beloved coffee flask. Now, we bring you our
					homebrew in a ready-to-consume format. Simply mix with hot milk and sugar, and savour the rich flavours of the coffee we grew up relishing!
					With love, from our home to yours.
				</p>
			</div>
		</section>
	);
};

export default SingleProductTemplate;
