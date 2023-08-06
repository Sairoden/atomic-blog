import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

export default function Main({ posts, handleAddPost }) {
  return (
    <main>
      <FormAddPost handleAddPost={handleAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
