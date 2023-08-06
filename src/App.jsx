import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter(post =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark(isFakeDark => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "🔆" : "🌙"}
      </button>

      <Header
        posts={searchedPosts}
        handleClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main posts={searchedPosts} handleAddPost={handleAddPost} />
      <Archive
        handleAddPost={handleAddPost}
        createRandomPost={createRandomPost}
      />
      <Footer />
    </section>
  );
}

export default App;
