1. react로 초기 api 요청 하기
2. cors 설정

# front api 요청해보기

```
// App.js

export default function TabContainer() {
  const handleApiRequest = () => {
    // Send API request here
    console.log("API request sent");
    // 이 엔드포인트, 즉 url만 바꾸면 get 요청이 날라간다.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        return response.json(); // 2번째 then에 전달과 데이터 표시를 위한 결과값 반환
      })
      .then((response) => console.log(`type : ${typeof response}`))
      .catch((error) => console.error(error));
  };

  return (
    <button onClick={handleApiRequest}>Send API Request</button>
  );
}

```
