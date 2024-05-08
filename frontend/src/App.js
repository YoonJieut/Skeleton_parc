import React, { Suspense, useState } from "react";
import TabButton from "./components/TabButton"; // TabButton 컴포넌트를 import합니다.
const AboutTab = React.lazy(() => import("./components/AboutTab"));
const PostsTab = React.lazy(() => import("./components/PostsTab"));
const ContactTab = React.lazy(() => import("./components/ContactTab"));

export default function TabContainer() {
  const [tab, setTab] = useState("about");
  const handleApiRequest = () => {
    // Send API request here
    console.log("API request sent");
    fetch("http://127.0.0.1:5000/hello")
      .then((response) => {
        console.log(response);
        return response.json(); // 2번째 then에 전달과 데이터 표시를 위한 결과값 반환
      })
      // 이제 모든 과정이 완료된 후 결과값을 보기 위한 console.log를 추가했습니다.
      .then((response) => console.log(`type : ${typeof response}`, response))
      .catch((error) => console.error(error));
  };

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
        Posts
      </TabButton>
      <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
        Contact
      </TabButton>
      <button onClick={handleApiRequest}>Send API Request</button>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </Suspense>
  );
}
