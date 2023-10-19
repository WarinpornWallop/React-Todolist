import { useEffect } from "react";

export function StockGraph() {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Fetch data");
    }, 1000);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <div>
      <img alt="stock" src="200w.webp" />
    </div>
  );
}
