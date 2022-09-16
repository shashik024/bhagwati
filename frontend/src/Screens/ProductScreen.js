import { useParams } from "react-router-dom";

function ProductScreen() {
  const param = useParams();

  return <h1>{param.slug}</h1>;
}

export default ProductScreen;
