import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();

  const realizarCompra = () => {
    console.log("Compramos los productos");

    navigate("/");
  };

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={realizarCompra}>Comprar</button>
    </div>
  );
};
