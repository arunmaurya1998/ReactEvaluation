import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../component/Error";
import Loading from "../component/Loading";
import Card from "../component/Card";
import { useContext } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    setError(false);
    try {
      let resp = await axios(() => {
        (method = "get"),
          (url =
            "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
      });

      setProduct(resp?.data);
     console.log(resp.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <>
<Card product={product}/>
  </>;
}
