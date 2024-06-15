import { useEffect, useState } from "react";

export function useData(url) {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    async function extractData() {
      const response = await fetch(`http://localhost:3000/${url}`);
      const result = await response.json();
      setPetData(result);
    }
    extractData();
  }, [url]);
  return petData;
}
