import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Banner() {
  const [IsOpen, setIsOpen] = useState(true);
  return (
    <>
      {IsOpen && (
        <>
          <div className="banner container py-5 bg-orange-400 text-center relative">
            <h2>FREE Shipping</h2>
            <div>on every order over $35</div>
            <Button
              className="btn-close absolute top-1 right-1 bg-transparent"
              onClick={() => setIsOpen(false)}
            ></Button>
          </div>
        </>
      )}
    </>
  );
}
