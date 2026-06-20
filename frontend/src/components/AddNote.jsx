
import { useState } from "react";
import api from "../services/api";

function AddNote({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/notes", {
      title,
      content,
    });

    setTitle("");
    setContent("");

    refreshNotes();
  };

  return (
    <div>
      <h2>Add Note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={addNote}>
        Add Note
      </button>
    </div>
  );
}

export default AddNote;