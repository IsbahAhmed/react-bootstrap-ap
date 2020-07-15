 export var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}

	return siblings;

};

export var products = [
	{
		id:"1",
		name:"watch 1",
		price:3000,
		catagory:"watch",
	   quantity:20,
	   pics:[{
		   link:"https://sc01.alicdn.com/kf/HTB1UBTzLFXXXXaOXXXXq6xXFXXXS/225747699/HTB1UBTzLFXXXXaOXXXXq6xXFXXXS.jpg_.webp"
	   },
	   {
		   link:"https://images-na.ssl-images-amazon.com/images/I/71MifNbyu9L._AC_UX342_.jpg"
	   },
	   {
		   link:"https://cdn.shopify.com/s/files/1/2342/3417/products/download_800x.jpg?v=1571439231"
	   }
	]
	},
	{
		id:"2",
		name:"watch 2",
		catagory:"watch",
		price:4000,
	   quantity:20,
	   pics:[{
		   link:"https://i2.wp.com/ae01.alicdn.com/kf/HTB188FbU4naK1RjSZFtq6zC2VXa4/2019-Men-Watch-CHEETAH-Brand-Fashion-Sports-Quartz-Watches-Mens-Leather-Waterproof-Chronograph-Clock-Business-Relogio.jpg?fit=800%2C800&ssl=1"
	   },
	   {
		   link:"https://www.dhresource.com/0x0/f2/albu/g8/M00/9E/1D/rBVaVFx2Pd6AAAYOAASQsN__cYc056.jpg"
	   },
	   {
		   link:"https://ae01.alicdn.com/kf/Hc3d37ec42e9f4839a298acb866c385fel.jpg?width=800&height=800&hash=1600"
	   }
	]
	} ,
	{
		id:"3",
		name:"glasses 1",
		catagory:"glasses",
		price:3200,
	   quantity:20,
	   pics:[{
		   link:"https://www.dhresource.com/0x0/f2/albu/g9/M01/53/99/rBVaVV4IZqWAY15lAACBiqkM_yk525.jpg"
	   },
	   {
		   link:"https://www.dhresource.com/0x0/f2/albu/g6/M00/D7/B1/rBVaR1vQCeaAdh2sAAB3tV62Drc037.jpg"
	   },
	   {
		   link:"https://i0.wp.com/ae01.alicdn.com/kf/HTB1wKEaas_vK1RkSmRyq6xwupXam/2019-Oversize-Square-Sunglasses-Men-Women-Celebrity-Sun-Glasses-Male-Driving-Superstar-Luxury-Brand-Designer-Female.jpg?fit=800%2C800&ssl=1"
	   }
	]
	}
	,
	{
		id:"4",
		name:"wallet 1",
		catagory:"wallets",
		price:6000,
	   quantity:20,
	   pics:[{
		   link:"https://i1.wp.com/ae01.alicdn.com/kf/HTB1np_kabH1gK0jSZFwq6A7aXXaR/Cobbler-Legend-100-Genuine-Leather-Men-Wallets-Vintage-Trifold-Wallet-Zip-Coin-Pocket-Purse-Cowhide-Leather.jpg?fit=800%2C800&ssl=1"
	   },
	   {
		   link:"https://willieswallets.com/wp-content/uploads/2018/12/CONTACT-S-Genuine-Crazy-Horse-Leather-Men-Wallets-Vintage-Trifold-Wallet-Zip-Coin-Pocket-Purse-Cowhide.jpg"
	   },
	   {
		   link:"https://cdn.shopify.com/s/files/1/1316/6125/products/CONTACT-S-Genuine-Crazy-Horse-Leather-Men-Wallets-Vintage-Trifold-Wallet-Zip-Coin-Pocket-Purse-Cowhide_1200x1200.jpg?v=1571439101"
	   }
	]
	}
]

var  delay = (t, v) => {
	return new Promise(function(resolve) { 
	  setTimeout(resolve.bind(null, v), t)
	});
  }
  
export function keepTrying(triesRemaining, storageRef) {
	if (triesRemaining < 0) {
	  return Promise.reject('out of tries');
	}
  
	return storageRef.getDownloadURL().then((url) => {
	  return url;
	}).catch((error) => {
	  switch (error.code) {
		case 'storage/object-not-found':
		  return delay(2000).then(() => {
			return keepTrying(triesRemaining - 1, storageRef)
		  });
		default:
		  console.log(error);
		  return Promise.reject(error);
	  }
	})
  }