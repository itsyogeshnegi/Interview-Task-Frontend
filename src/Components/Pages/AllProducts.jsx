import React, { useEffect, useState } from "react";
import { getProducts } from "../../Constants/Service";
import ProductCards from "../Common/ProductCards";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await getProducts();
      setData(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    fetchProduct();
  }, []);
  return (
    <div className="bg-purple-50 min-h-screen w-full grid grid-cols-12 py-10 container">
      {data.map((item, index) => (
        <ProductCards key={index} data={item} />
      ))}
    </div>
  );
};

export default AllProducts;
