import Results from "./Results";
import SearchPosts from "./SearchPosts";

export default function Header({
  posts,
  handleClearPosts,
  searchQuery,
  setSearchQuery,
}) {
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
