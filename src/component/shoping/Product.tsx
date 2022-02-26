import React, { useState } from "react";
import axios from "axios";
import "./Product.css";

export interface Iproduct {
  id: number;
  title: String;
  price: number;
  description: String;
  category: String;
  image: any;
  rating: number;
}

function Product(Iproduct: any) {
  const [product, setProduct] = useState([]);
  // const InterfaceProd: Iproduct[] = [];

  const getProductData = () => {
    axios
      .get<Iproduct>("https://fakestoreapi.com/products")
      .then((response: any) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((err: any) => {
        console.log("error are", err);
      });
  };
  // useEffect(() => {
  //   getProductData();
  // }, []);

  // const getProduct = () => {
  //  setProduct(response.data)
  //   console.log("this is tet");
  // };

  return (
    <>
      <div>
        <h3 className="heading">this is a product page</h3>
      </div>
      <div className="get-product-button">
        <button onClick={getProductData}>Get Product </button>

        {product.map((comingData: any) => {
          return (
            <>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={comingData.image}
                  className="card-img-top"
                  alt="images"
                  style={{ width: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{comingData.title}</h5>
                  <p className="card-text">{comingData.description}</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Product;
