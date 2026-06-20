import api from "../services/api";

function NotesList({ notes, refreshNotes }) {

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    refreshNotes();
  };

  return (
    <div>
      <h2>Notes List</h2>

      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>

          <p>{note.content}</p>

          <button
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;