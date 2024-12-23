import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../Constants/Service";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchProductDetail = async () => {
    try {
      const response = await getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-96 max-md:h-72 object-cover rounded-md shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.title}
              </h1>
              <h2 className="text-lg text-gray-600 mt-2">{product.brand}</h2>
              <p className="text-gray-700 mt-4">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-purple-600">
                ₹{(product.price * 82).toFixed(0)}/-
              </h3>
              <div className="flex items-center mt-4">
                <span className="text-lg font-semibold">Rating:</span>
                <span className="ml-2 text-lg text-purple-600">
                  {product.rating.toFixed(1)} / 5
                </span>
              </div>
              <div className="mt-2">
                <span className="font-medium">
                  Stocks available:{" "}
                  <span className="font-normal text-purple-600">
                    {product.stock}
                  </span>
                </span>
              </div>
              {product.warrantyInformation && (
                <div className="mt-2">
                  <span className="text-gray-700 font-medium">
                    Warranty Information:
                  </span>
                  <span className="ml-2 text-purple-600">
                    {product.warrantyInformation}
                  </span>
                </div>
              )}
              {product.shippingInformation && (
                <div className="mt-2">
                  <span className="text-gray-700 font-medium">
                    Shipping Information:
                  </span>
                  <span className="ml-2 text-purple-600">
                    {product.shippingInformation}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                Add to Cart
              </button>
              <button className="border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
