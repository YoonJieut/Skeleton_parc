import React, { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drf/")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1>메인페이지 로딩 완료</h1>
      <div>
        {events.map((event) => (
          <div key={event.id}>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
