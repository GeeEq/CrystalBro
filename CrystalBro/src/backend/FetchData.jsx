import { useEffect, useState } from "react";

export function useData(url) {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function extractData() {
      const response = await fetch(`http://localhost:3000/${url}`);
      const result = await response.json();
      setMyData(result);
    }
    extractData();
  }, [url]);
  return myData;
}
