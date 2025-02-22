import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";

const ProductCase = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProduct(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="md:p-10 p-5 md:mt-10 sm:mt-20 mt-30">
      <h1 className="sm:text-37 text-2xl font-semibold text-center py-10">
        Explore our products
      </h1>
      <p></p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:max-w-6xl w-full mx-auto">
        {product.map((product, index) => (
          <div
            key={index}
            className="p-5 border-2  border-darkblue flex justify-between gap-3 items-center rounded-lg  hover:animate-ping "
          >
            <div className="flex  items-center gap-3 ">
              <img
                src={product.logo}
                alt={product.name}
                className="md:w-20 w-15 md:h-20 h-15 object-contain "
              />
              <h1 className="text-darkblue text-18 font-semibold hover:underline cursor-pointer">
                {product.name}
              </h1>
            </div>
            <div className="text-darkblue">
              <GoChevronRight className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCase;
