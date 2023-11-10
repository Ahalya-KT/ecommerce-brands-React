import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Recoment = () => {
  const [cardData, setcardData] = useState([]);
  useEffect(() => {
    async function CardDetails() {
      await axios
        .get("https://fakestoreapi.com/products?limit=10")
        .then((res) => {
          console.log(res.data);
          setcardData(res.data);
        });
    }
    CardDetails();
  }, []);

  return (
    <div className="px-16  py-10 ">
      <div className="text-xl font-bold pb-5">Recommended items</div>
      <div className="flex flex-wrap gap-4 ">
        {cardData &&
          cardData.map((product, index) => {
            return <Card key={index} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Recoment;
