import React, { useState } from "react";
import axios from "axios";
import "./Product.css";
import { Card } from "@material-ui/core";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Row } from "reactstrap";
import { Share } from "@material-ui/icons";

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
              <Row>
                <Col md="4" sm="12">
                  <Card style={{ maxWidth: 345 }}>
                    <CardMedia component="img" image={comingData.image} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {comingData.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {comingData.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <Share />
                      </Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Col>
              </Row>
              {/* <div className="card" style={{ width: "18rem" }}>
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
              {/* </div> */}
              {/* </div> */}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Product;
