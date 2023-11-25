import React, { useContext, useEffect, useState } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import axios from "axios";
import "../app.css";
import { CircularProgress } from "@mui/material";
import { ModeContext } from "../context/ModeContext";

function Home() {
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { Theme, setTheme } = useContext(ModeContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products.slice(0, 8));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  function ModeChange() {
    setTheme(Theme === "light" ? "dark" : "light");
  }

  return (
    <main>
      <button onClick={ModeChange}>dark mode</button>
      <div className="container">
        {error ? <h1>error404</h1> : ""}
        {loading ? (
          <CircularProgress />
        ) : (
          Products.map((product) => {
            return <RecipeReviewCard key={product.id} product={product} />;
          })
        )}
      </div>
      <div className="Fav-Container">
        <h1>fAV</h1>
      </div>
    </main>
  );
}

export default Home;
