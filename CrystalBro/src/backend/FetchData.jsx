import { useEffect, useState } from "react";

export function useData() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function extractData() {
      const response = await fetch(`http://localhost:3000`);
      const result = await response.json();
      setMyData(result);
    }
    extractData();
  }, []);
  return myData;
}
