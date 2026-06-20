
import { useState } from "react";
import api from "../services/api";

function EditNote({ note, refreshNotes }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const updateNote = async () => {
    await api.put(`/notes/${note.id}`, {
      title,
      content,
    });

    refreshNotes();
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={updateNote}>
        Update
      </button>
    </div>
  );
}

export default EditNote;