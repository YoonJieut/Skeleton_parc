// 로컬 스토리지에 데이터 저장 - 저장하는데 활용
localStorage.setItem("userInfo", JSON.stringify({ name: "JH", age: 30 }));

// 로컬 스토리지에서 데이터 불러오기 - 불러오는데 활용
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

// 로컬 스토리지에서 데이터 삭제
localStorage.removeItem("userInfo");
