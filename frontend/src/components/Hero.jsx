import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero mb-4">
        <div className="center container">
          <p className="text-orange-600 text-5xl font-semibold">
            Amason's Best Deals
          </p>
          <p>Features New Arrivals</p>
          <p>
            <a href={"#product-gallery"} className="btn btn-secondary">
              Shop now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
