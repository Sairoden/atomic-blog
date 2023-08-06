import { useState } from "react";

export default function FormAddPost({ handleAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!body || !title) return;

    handleAddPost({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Post Body"
      />
      <button>Add post</button>
    </form>
  );
}
