// API로부터 데이터를 불러와 세션 스토리지에 저장
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    sessionStorage.setItem("apiData", JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// 세션 스토리지에서 데이터를 불러오기
const loadData = () => {
  const data = sessionStorage.getItem("apiData");
  return data ? JSON.parse(data) : null;
};

export { fetchData, loadData };
