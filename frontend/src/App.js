import React, { Suspense, useState } from "react";
import TabButton from "./TabButton"; // TabButton 컴포넌트를 import합니다.
const AboutTab = React.lazy(() => import("./AboutTab"));
const PostsTab = React.lazy(() => import("./PostsTab"));
const ContactTab = React.lazy(() => import("./ContactTab"));

export default function TabContainer() {
  const [tab, setTab] = useState("about");
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
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </Suspense>
  );
}
