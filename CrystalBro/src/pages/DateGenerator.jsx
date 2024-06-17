import { useState } from "react";

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}

export function DateGen() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
}

export default DateGen;
