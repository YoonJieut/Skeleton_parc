import React, { useState, useEffect } from "react";

const CachedComponent = () => {
  const [data, setData] = useState(() => {
    // 로컬 스토리지에서 데이터를 불러옴
    const savedData = localStorage.getItem("cachedData");
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (!data) {
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          localStorage.setItem("cachedData", JSON.stringify(fetchedData)); // 데이터 캐싱
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [data]);

  return (
    <div>
      {data ? <span>Loaded from cache!</span> : <span>Loading data...</span>}
    </div>
  );
};

export default CachedComponent;
