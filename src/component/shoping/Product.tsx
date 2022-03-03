import React, { useState } from "react";
import axios from "axios";
import "./Product.css";
//import { Card } from "@material-ui/core";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  CardText,
  CardLink,
  CardDeck,
  CardHeader,
  CardGroup,
  CardImg,
  CardSubtitle,
  Button,
  CardFooter,
  Container,
} from "reactstrap";
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
      </div>
      <Row>
        {product.map((comingData: any, id: any) => {
          return (
            <>
              <Col md="4" key={id}>
                <Card className="align-items-center mt-4">
                  <CardImg
                    alt="Card image cap"
                    src={comingData.image}
                    className="w-25"
                    height="10%"
                    key={id}
                  />
                  <CardBody>
                    <CardTitle>{comingData.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted">
                      {comingData.category}
                    </CardSubtitle>
                    <CardText>{comingData.description}</CardText>
                    <CardFooter>
                      <div className="d-flex">
                        <Button>Button</Button>
                        <h4 className="ml-5">{comingData.price}Rs.</h4>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default Product;
