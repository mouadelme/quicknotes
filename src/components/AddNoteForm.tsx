import { useState } from 'react';

type AddNoteFormProps = {
  onAdd: (text: string) => void;
};

function AddNoteForm({ onAdd }: AddNoteFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginLeft: '1rem', padding: '0.5rem' }}
      >
        Add
      </button>
    </div>
  );
}

export default AddNoteForm;
