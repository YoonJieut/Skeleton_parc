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
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        return response.json(); // 2번째 then에 전달과 데이터 표시를 위한 결과값 반환
      })
      .then((response) => console.log(`type : ${typeof response}`))
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
