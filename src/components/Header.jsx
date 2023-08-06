// Components
import Results from "./Results";
import SearchPosts from "./SearchPosts";

// Contexts
import { usePostContext } from "../contexts/post_context";

export default function Header() {
  const { posts, handleClearPosts, searchQuery, setSearchQuery } =
    usePostContext();

  return (
    <header>
      <h1>
        <span>⚛️</span> The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
