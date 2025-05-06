import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';
import AddNoteForm from './components/AddNoteForm';

const API = import.meta.env.VITE_API;

function App() {
  const [notes, setNotes] = useState<{ id: string; content: string }[]>([]);

  useEffect(() => {
    axios
      .get<{ id: string; content: string }[]>(`${API}/notes`)
      .then((res) => setNotes(res.data))
      .catch((err: unknown) => console.error('Error fetching notes:', err));
  }, []);

  const addNote = async (text: string) => {
    try {
      const res = await axios.post<{ id: string }>(`${API}/notes`, { content: text });
      setNotes([...notes, { id: res.data.id, content: text }]);
    } catch (err: unknown) {
      console.error('Error saving note:', err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await axios.delete(`${API}/notes/${id}`);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📝 QuickNotes</h1>
      <AddNoteForm onAdd={addNote} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map((note) => (
          <Note
            key={note.id}
            content={note.content}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;