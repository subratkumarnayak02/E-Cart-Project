import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4wiD-QN8JXxU9_WTPrcJwyjC3IitpjyzAg&usqp=CAU";

const img3 =
  "https://i.gadgets360cdn.com/products/large/sony-ps5-649x800-1592631239.jpeg?downsize=*:180";

const img4 = "https://m.media-amazon.com/images/I/61yrR0exgUL._SX522_.jpg";

const img5 =
  "https://m.media-amazon.com/images/I/41n+wgaVGrL._SY300_SX300_.jpg";

const img6 =
  "https://m.media-amazon.com/images/I/31ROHZJMEUL._SX300_SY300_QL70_FMwebp_.jpg";

const img7 = "https://m.media-amazon.com/images/I/61o3mAnLhCL._SX522_.jpg";

const Home = () => {
  const productList = [
    { name: "Mac Book", price: 120000, imgSrc: img1, id: "swdweedwe" },
    { name: "Black Shoes", price: 3500, imgSrc: img2, id: "rhddgfhfdhtrh" },
    {
      name: "Sony PlayStation 5",
      price: 49990,
      imgSrc: img3,
      id: "rhddgfhfdhtrh",
    },
    { name: "Gaming Chair", price: 17000, imgSrc: img4, id: "fgnfgfghmnum" },
    { name: "RGB Keyboard", price: 2700, imgSrc: img5, id: "vsvdsdfv" },
    { name: "Wireless Mouse", price: 745, imgSrc: img6, id: "dyjfyjftyjh" },
    { name: "Extension Board", price: 419, imgSrc: img7, id: "trhfbnfgbfg" },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
