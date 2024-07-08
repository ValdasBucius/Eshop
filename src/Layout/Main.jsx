import React, { useEffect, useState } from "react";

export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/tours")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.data.tours);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  return (
    <main className="flex items-center justify-center">
      <ul>
        {Array.isArray(data) &&
          data.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
    </main>
  );
}
