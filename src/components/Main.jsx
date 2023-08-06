// Components
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

// Contexts
import { usePostContext } from "../contexts/post_context";

export default function Main() {
  const { posts, handleAddPost } = usePostContext();

  return (
    <main>
      <FormAddPost handleAddPost={handleAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
