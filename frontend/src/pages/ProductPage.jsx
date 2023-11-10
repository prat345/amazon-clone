import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const product = useParams();
  const { slug } = product;
  return (
    <div>
      <h1>Product {slug}</h1>
    </div>
  );
}
