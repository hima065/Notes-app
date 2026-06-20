import { useEffect, useState } from "react";
import api from "./services/api";

import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await api.get("/notes");
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app-shell">
      <div className="container glass-card">
        <h1>Notes App</h1>

        <AddNote refreshNotes={fetchNotes} />

        <hr />

        <NotesList
          notes={notes}
          refreshNotes={fetchNotes}
        />
      </div>
    </div>
  );
}

export default App;