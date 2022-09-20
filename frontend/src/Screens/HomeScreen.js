import React, { useEffect, useReducer } from "react";
// import data from "../data";
import axios from "axios";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Product from "../Components/Product";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" }); // now loading becomes true
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bhagwati Traders</title>
      </Helmet>
      <h1> Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={6} md={4} lg={3} className="mb-3" key={product.slug}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};
